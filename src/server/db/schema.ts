import { relations, sql } from "drizzle-orm";
import {
  boolean,
  index,
  integer,
  pgTableCreator,
  primaryKey,
  text,
  timestamp,
  varchar,
  pgEnum,
} from "drizzle-orm/pg-core";
import { type AdapterAccount } from "next-auth/adapters";

import { nanoid } from "nanoid";

export const createTable = pgTableCreator((name) => `underscore_${name}`);

export const events = createTable("events", {
  id: varchar("id", { length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => nanoid()),
  name: varchar("name").notNull(),
  start: timestamp("start", { withTimezone: true }).notNull(),
  end: timestamp("end", { withTimezone: true }),
  include_time: boolean("include_time"),
  thumbnail: varchar("image", { length: 255 }),
});

export const eventsRelations = relations(events, ({ many }) => ({
  invitations: many(eventInvitations),
}));

export const eventInvitationStatus = pgEnum("event_invitation_status", [
  "none",
  "accepted",
  "refused",
]);

export const eventInvitations = createTable("event_invitations", {
  eventId: varchar("event_id", { length: 255 })
    .notNull()
    .references(() => events.id),
  userId: varchar("user_id", { length: 255 })
    .notNull()
    .references(() => users.id),
  status: eventInvitationStatus("status").default("none"),
});

export const eventInvitationsRelations = relations(
  eventInvitations,
  ({ one }) => ({
    event: one(events, {
      fields: [eventInvitations.eventId],
      references: [events.id],
    }),
    user: one(users, {
      fields: [eventInvitations.userId],
      references: [users.id],
    }),
  }),
);

export const users = createTable("user", {
  id: varchar("id", { length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => nanoid()),
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
