import {
  boolean,
  date,
  integer,
  pgEnum,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

// =======================
// ENUMS
// =======================
export const STATUS_ENUM = pgEnum("status", ["ONLINE", "OFFLINE"]);
export const PRIVACY_ENUM = pgEnum("privacy", [
  "PUBLIC",
  "PRIVATE",
  "FRIENDS_ONLY",
]);
export const FOLLOW_REQUEST_STATUS_ENUM = pgEnum("follow_request_status", [
  "PENDING",
  "ACCEPTED",
  "DECLINED",
]);
export const STORY_TYPE_ENUM = pgEnum("story_type", [
  "IMAGE",
  "VIDEO",
  "POLL",
  "OUTFIT_OF_DAY",
]);
export const NOTIFICATION_TYPE_ENUM = pgEnum("notification_type", [
  "LIKE",
  "COMMENT",
  "FOLLOW",
  "FOLLOW_REQUEST",
  "MENTION",
  "STORY_VIEW",
  "OUTFIT_FEATURE",
]);

export const MEDIA_TYPE_ENUM = pgEnum("media_type", ["IMAGE", "VIDEO"]);

// =======================
// USERS
// =======================
export const users = pgTable("users", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  username: varchar("username", { length: 255 }).notNull().unique(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  passwordHash: varchar("passwordHash", { length: 255 }).notNull(),
  status: STATUS_ENUM("status").default("ONLINE"),
  privacy: PRIVACY_ENUM("privacy").default("PUBLIC"),
  isVerified: boolean("is_verified").default(false),
  lastActivityDate: date("last_activity_date").defaultNow(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

// =======================
// PROFILES
// =======================
export const profiles = pgTable("profiles", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  userId: uuid("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull()
    .unique(),
  displayName: varchar("display_name", { length: 100 }).notNull(),
  bio: text("bio"),
  location: varchar("location", { length: 100 }).notNull(),
  avatarUrl: text("avatar_url"),
  coverUrl: text("cover_url"),
  inspiration: text("inspiration"),
  //   Fashion specific fields
  favoriteStyle: varchar("favorite_style", { length: 50 }),
  fashionGoals: text("fashion_goals"),
  clothingSize: varchar("clothing_size", { length: 10 }),
  shoeSize: varchar("shoe_size", { length: 10 }),
  colorPreferences: text("color_preferences"), // JSON array of preferred colors
});

// =======================
// POSTS
// =======================
export const posts = pgTable("posts", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  userId: uuid("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  imageUrl: text("image_url").notNull(),
  caption: text("caption"),
  privacy: PRIVACY_ENUM("privacy").default("PUBLIC"),
  isOutfitOfDay: boolean("is_outfit_of_day").default(false),
  occasion: varchar("occasion", { length: 100 }),
  weather: varchar("weather", { length: 50 }),
  estimatedPrice: integer("estimated_price"),
  likesCount: integer("likes_count").default(0),
  commentsCount: integer("comments_count").default(0),
  mediaCount: integer("media_count").default(1),
  created_at: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at").defaultNow(),
});

// =======================
// MEDIA TABLE
// =======================
export const media = pgTable("media", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  postId: uuid("post_id")
    .references(() => posts.id, { onDelete: "cascade" })
    .notNull(),
  url: text("url").notNull(),
  type: MEDIA_TYPE_ENUM("type").notNull(),
  order: integer("order").notNull(), // For maintaining order of images/videos
  altText: text("alt_text"), //for accessibility
  width: integer("width"), // Original dimensions
  height: integer("height"),
  fileSize: integer("file_size"), // In bytes
  duration: integer("duration"), // For videos (in seconds)
  thumbnailUrl: text("thumbnail_url"), // For video thumbnails
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// =======================
// STYLE TAGS
// =======================
export const styleTags = pgTable("style_tags", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 50 }).unique().notNull(),
  category: varchar("category", { length: 30 }), // e.g., "style", "brand", "color", "occasion"
  isPopular: boolean("is_popular").default(false),
});

// =======================
// POST TAGS (M2M)
// =======================
export const postTags = pgTable(
  "post_tags",
  {
    postId: uuid("post_id")
      .references(() => posts.id, { onDelete: "cascade" })
      .notNull(),
    tagId: serial("tag_id")
      .references(() => styleTags.id, { onDelete: "cascade" })
      .notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.postId, table.tagId] }),
  }),
);

// =======================
// STORIES
// =======================
export const stories = pgTable("stories", {
  id: uuid("id").notNull().primaryKey().unique(),
  userId: uuid("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  caption: text("caption"),
  viewsCount: integer("views_count").default(0),
  created_at: timestamp("created_at").defaultNow().notNull(),
  expires_at: timestamp("updated_at").defaultNow(),
});

// =======================
// COMMENTS
// =======================
export const comments = pgTable("comments", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  postId: uuid("post_id")
    .references(() => posts.id, { onDelete: "cascade" })
    .notNull(),
  userId: uuid("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  content: text("content").notNull(),
  likesCount: integer("likes_count").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// =======================
// POST LIKES
// =======================
export const postLikes = pgTable(
  "post_likes",
  {
    userId: uuid("user_id")
      .references(() => users.id, { onDelete: "cascade" })
      .notNull(),
    postId: uuid("post_id")
      .references(() => posts.id, { onDelete: "cascade" })
      .notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.userId, table.postId] }),
  }),
);

// =======================
// COMMENT LIKES
// =======================
export const commentLikes = pgTable(
  "comment_likes",
  {
    userId: uuid("user_id")
      .references(() => users.id, { onDelete: "cascade" })
      .notNull(),
    commentId: uuid("comment_id")
      .references(() => comments.id, { onDelete: "cascade" })
      .notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.userId, table.commentId] }),
  }),
);

// =======================
// FOLLOWERS
// =======================
export const followers = pgTable(
  "followers",
  {
    followerId: uuid("follower_id")
      .references(() => users.id, { onDelete: "cascade" })
      .notNull(),
    followingId: uuid("following_id")
      .references(() => users.id, { onDelete: "cascade" })
      .notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.followerId, table.followingId] }),
  }),
);

// =======================
// FOLLOW REQUESTS
// =======================
export const followRequests = pgTable(
  "follow_requests",
  {
    senderId: uuid("sender_id")
      .references(() => users.id, { onDelete: "cascade" })
      .notNull(),
    receiverId: uuid("receiver_id")
      .references(() => users.id, { onDelete: "cascade" })
      .notNull(),
    status: FOLLOW_REQUEST_STATUS_ENUM("status").default("PENDING"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.senderId, table.receiverId] }),
  }),
);

// =======================
// BLOCKS
// =======================
export const blocks = pgTable(
  "blocks",
  {
    blockerId: uuid("blocker_id")
      .references(() => users.id, { onDelete: "cascade" })
      .notNull(),
    blockedId: uuid("blocked_id")
      .references(() => users.id, { onDelete: "cascade" })
      .notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.blockerId, table.blockedId] }),
  }),
);

// =======================
// OUTFIT ITEMS (Fashion-specific)
// =======================
export const outfitItems = pgTable("outfit_items", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),
  postId: uuid("post_id")
    .references(() => posts.id, { onDelete: "cascade" })
    .notNull(),
  itemName: varchar("item_name", { length: 100 }).notNull(),
  brand: varchar("brand", { length: 50 }),
  price: integer("price"), // Price in cents
  purchaseUrl: text("purchase_url"),
  category: varchar("category", { length: 30 }), // e.g., "top", "bottom", "shoes", "accessory"
  color: varchar("color", { length: 30 }),
  size: varchar("size", { length: 10 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// =======================
// SAVED POSTS (Bookmarks)
// =======================
export const savedPosts = pgTable(
  "saved_posts",
  {
    userId: uuid("user_id")
      .references(() => users.id, { onDelete: "cascade" })
      .notNull(),
    postId: uuid("post_id")
      .references(() => posts.id, { onDelete: "cascade" })
      .notNull(),
    collectionName: varchar("collection_name", { length: 50 }).default(
      "general",
    ),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.userId, table.postId] }),
  }),
);

// =======================
// NOTIFICATIONS
// =======================
export const notifications = pgTable("notifications", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),
  recipientId: uuid("recipient_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  senderId: uuid("sender_id").references(() => users.id, {
    onDelete: "cascade",
  }),
  type: NOTIFICATION_TYPE_ENUM("type").notNull(),
  postId: uuid("post_id").references(() => posts.id, { onDelete: "cascade" }),
  commentId: uuid("comment_id").references(() => comments.id, {
    onDelete: "cascade",
  }),
  message: text("message"),
  isRead: boolean("is_read").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// =======================
// FASHION CHALLENGES (Bonus Feature)
// =======================
export const fashionChallenges = pgTable("fashion_challenges", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),
  title: varchar("title", { length: 100 }).notNull(),
  description: text("description").notNull(),
  hashtag: varchar("hashtag", { length: 30 }).notNull().unique(),
  imageUrl: text("image_url"),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date").notNull(),
  participantsCount: integer("participants_count").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// =======================
// CHALLENGE PARTICIPATIONS
// =======================
export const challengeParticipations = pgTable(
  "challenge_participations",
  {
    challengeId: uuid("challenge_id")
      .references(() => fashionChallenges.id, { onDelete: "cascade" })
      .notNull(),
    postId: uuid("post_id")
      .references(() => posts.id, { onDelete: "cascade" })
      .notNull(),
    userId: uuid("user_id")
      .references(() => users.id, { onDelete: "cascade" })
      .notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.challengeId, table.postId] }),
  }),
);
