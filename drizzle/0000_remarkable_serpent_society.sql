DO $$ BEGIN
 CREATE TYPE "public"."event_invitation_status" AS ENUM('none', 'accepted', 'refused');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "underscore_account" (
	"user_id" varchar(255) NOT NULL,
	"type" varchar(255) NOT NULL,
	"provider" varchar(255) NOT NULL,
	"provider_account_id" varchar(255) NOT NULL,
	"refresh_token" text,
	"access_token" text,
	"expires_at" integer,
	"token_type" varchar(255),
	"scope" varchar(255),
	"id_token" text,
	"session_state" varchar(255),
	CONSTRAINT "underscore_account_provider_provider_account_id_pk" PRIMARY KEY("provider","provider_account_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "underscore_event_invitations" (
	"event_id" varchar(255) NOT NULL,
	"user_id" varchar(255) NOT NULL,
	"status" "event_invitation_status" DEFAULT 'none'
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "underscore_events" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"start" timestamp with time zone NOT NULL,
	"end" timestamp with time zone,
	"include_time" boolean,
	"image" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "underscore_session" (
	"session_token" varchar(255) PRIMARY KEY NOT NULL,
	"user_id" varchar(255) NOT NULL,
	"expires" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "underscore_user" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"email" varchar(255) NOT NULL,
	"email_verified" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"image" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "underscore_verification_token" (
	"identifier" varchar(255) NOT NULL,
	"token" varchar(255) NOT NULL,
	"expires" timestamp with time zone NOT NULL,
	CONSTRAINT "underscore_verification_token_identifier_token_pk" PRIMARY KEY("identifier","token")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "underscore_account" ADD CONSTRAINT "underscore_account_user_id_underscore_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."underscore_user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "underscore_event_invitations" ADD CONSTRAINT "underscore_event_invitations_event_id_underscore_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."underscore_events"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "underscore_event_invitations" ADD CONSTRAINT "underscore_event_invitations_user_id_underscore_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."underscore_user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "underscore_session" ADD CONSTRAINT "underscore_session_user_id_underscore_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."underscore_user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "account_user_id_idx" ON "underscore_account" ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "session_user_id_idx" ON "underscore_session" ("user_id");