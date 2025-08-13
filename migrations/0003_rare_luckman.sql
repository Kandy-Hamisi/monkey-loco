ALTER TABLE "outfit_votes" DROP CONSTRAINT "outfit_votes_post_id_posts_id_fk";
--> statement-breakpoint
ALTER TABLE "outfit_votes" DROP CONSTRAINT "outfit_votes_voter_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "outfit_votes" DROP CONSTRAINT "outfit_votes_post_id_voter_id_category_pk";--> statement-breakpoint
CREATE UNIQUE INDEX "outfit_votes_unique_vote" ON "outfit_votes" USING btree ("post_id","voter_id","category");