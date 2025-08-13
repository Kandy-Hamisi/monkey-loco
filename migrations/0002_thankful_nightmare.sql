CREATE TABLE "outfit_votes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"post_id" uuid NOT NULL,
	"voter_id" uuid NOT NULL,
	"category" varchar(20) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "outfit_votes_post_id_voter_id_category_pk" PRIMARY KEY("post_id","voter_id","category")
);
--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "daily_votes_count" integer DEFAULT 0;--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "weekly_votes_count" integer DEFAULT 0;--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "is_outfit_of_week" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "outfit_votes" ADD CONSTRAINT "outfit_votes_post_id_posts_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "outfit_votes" ADD CONSTRAINT "outfit_votes_voter_id_users_id_fk" FOREIGN KEY ("voter_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;