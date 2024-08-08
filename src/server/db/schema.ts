import { relations, sql } from "drizzle-orm";
import {
  index,
  integer,
  pgTableCreator,
  primaryKey,
  serial,
  text,
  timestamp,
  varchar,
  pgEnum,
  uuid,
} from "drizzle-orm/pg-core";
import { type AdapterAccount } from "next-auth/adapters";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `underscore_${name}`);

export const valorantRegions = createTable("valorant-regions", {
  id: serial("id").primaryKey(),
  name: varchar("name"),
});

export const valorantRegionsRelations = relations(
  valorantRegions,
  ({ many }) => ({
    enrollments: many(premierEnrollments),
    events: many(premierEvents),
  }),
);

export const valorantMaps = createTable("valorant-map", {
  id: uuid("id").primaryKey(),
});

export const valorantMapsRelations = relations(valorantMaps, ({ many }) => ({
  mapsToMatches: many(premierMatches),
}));

export const premierSeasons = createTable("premier-seasons", {
  id: serial("id").primaryKey(),
});

export const premierSeasonsRelations = relations(
  premierSeasons,
  ({ many }) => ({
    enrollments: many(premierEnrollments),
    events: many(premierEvents),
    macthes: many(premierMatches),
  }),
);

export const premierEnrollments = createTable(
  "premier-enrollments",
  {
    valorantRegionId: integer("valorant_region_id")
      .notNull()
      .references(() => valorantRegions.id),
    premierSeasonId: integer("premier_season_id")
      .notNull()
      .references(() => premierSeasons.id),
    start: timestamp("start", { withTimezone: true }),
    end: timestamp("end", { withTimezone: true }),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.valorantRegionId, t.premierSeasonId] }),
  }),
);

export const premierEnrollmentsRelations = relations(
  premierEnrollments,
  ({ one }) => ({
    region: one(valorantRegions, {
      fields: [premierEnrollments.valorantRegionId],
      references: [valorantRegions.id],
    }),
    season: one(premierSeasons, {
      fields: [premierEnrollments.premierSeasonId],
      references: [premierSeasons.id],
    }),
  }),
);

export const premierMatchType = pgEnum("premier-match-type", [
  "SCRIM",
  "LEAGUE",
  "TOURNAMENT",
]);

export const premierMatchMapType = pgEnum("premier-match-map-type", [
  "RANDOM",
  "PICKBAN",
]);

export const premierMatches = createTable("premier-matches", {
  id: serial("id").primaryKey(),
  premierSeasonId: integer("premier_season_id")
    .notNull()
    .references(() => premierSeasons.id),
  points_required: integer("points_required"),
  match_type: premierMatchType("match_type"),
  map_type: premierMatchMapType("map_type"),
});

export const premierMatchesRelations = relations(
  premierMatches,
  ({ many, one }) => ({
    events: many(premierEvents),
    maps: many(valorantMaps),
    season: one(premierSeasons, {
      fields: [premierMatches.premierSeasonId],
      references: [premierSeasons.id],
    }),
  }),
);

export const premierMatchesToValorantMaps = createTable(
  "premier-matches-to-valorants-maps",
  {
    valorantMapId: integer("valorant_map_id")
      .notNull()
      .references(() => valorantMaps.id),
    premierMatchId: integer("premier_match_id")
      .notNull()
      .references(() => premierMatches.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.valorantMapId, t.premierMatchId] }),
  }),
);

export const premierMatchesToValorantMapsRelations = relations(
  premierMatchesToValorantMaps,
  ({ one }) => ({
    map: one(valorantMaps, {
      fields: [premierMatchesToValorantMaps.valorantMapId],
      references: [valorantMaps.id],
    }),
    match: one(premierMatches, {
      fields: [premierMatchesToValorantMaps.premierMatchId],
      references: [premierMatches.id],
    }),
  }),
);

export const premierEvents = createTable("premier-events", {
  id: serial("id").primaryKey(),
  valorantRegionId: integer("valorant_region_id")
    .notNull()
    .references(() => valorantRegions.id),
  premierSeasonId: integer("premier_season_id")
    .notNull()
    .references(() => premierSeasons.id),
  premierMatchId: integer("premier_matches_id")
    .notNull()
    .references(() => premierMatches.id),
  start: timestamp("start", { withTimezone: true }),
  end: timestamp("end", { withTimezone: true }),
});

export const premierEventsRelations = relations(premierEvents, ({ one }) => ({
  region: one(valorantRegions, {
    fields: [premierEvents.valorantRegionId],
    references: [valorantRegions.id],
  }),
  season: one(premierSeasons, {
    fields: [premierEvents.premierSeasonId],
    references: [premierSeasons.id],
  }),
  match: one(premierMatches, {
    fields: [premierEvents.premierMatchId],
    references: [premierMatches.id],
  }),
}));

export const posts = createTable(
  "post",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
    createdById: varchar("created_by", { length: 255 })
      .notNull()
      .references(() => users.id),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
  },
  (example) => ({
    createdByIdIdx: index("created_by_idx").on(example.createdById),
    nameIndex: index("name_idx").on(example.name),
  }),
);

export const users = createTable("user", {
  id: varchar("id", { length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull(),
  emailVerified: timestamp("email_verified", {
    mode: "date",
    withTimezone: true,
  }).default(sql`CURRENT_TIMESTAMP`),
  image: varchar("image", { length: 255 }),
});

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
}));

export const accounts = createTable(
  "account",
  {
    userId: varchar("user_id", { length: 255 })
      .notNull()
      .references(() => users.id),
    type: varchar("type", { length: 255 })
      .$type<AdapterAccount["type"]>()
      .notNull(),
    provider: varchar("provider", { length: 255 }).notNull(),
    providerAccountId: varchar("provider_account_id", {
      length: 255,
    }).notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: varchar("token_type", { length: 255 }),
    scope: varchar("scope", { length: 255 }),
    id_token: text("id_token"),
    session_state: varchar("session_state", { length: 255 }),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
    userIdIdx: index("account_user_id_idx").on(account.userId),
  }),
);

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, { fields: [accounts.userId], references: [users.id] }),
}));

export const sessions = createTable(
  "session",
  {
    sessionToken: varchar("session_token", { length: 255 })
      .notNull()
      .primaryKey(),
    userId: varchar("user_id", { length: 255 })
      .notNull()
      .references(() => users.id),
    expires: timestamp("expires", {
      mode: "date",
      withTimezone: true,
    }).notNull(),
  },
  (session) => ({
    userIdIdx: index("session_user_id_idx").on(session.userId),
  }),
);

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, { fields: [sessions.userId], references: [users.id] }),
}));

export const verificationTokens = createTable(
  "verification_token",
  {
    identifier: varchar("identifier", { length: 255 }).notNull(),
    token: varchar("token", { length: 255 }).notNull(),
    expires: timestamp("expires", {
      mode: "date",
      withTimezone: true,
    }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  }),
);
