import {
  date,
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

// =======================
// USERS
// =======================
export const users = pgTable("users", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  username: varchar("username", { length: 255 }).notNull().unique(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  passwordHash: varchar("passwordHash", { length: 255 }).notNull(),
  status: STATUS_ENUM("status").default("ONLINE"),
  lastActivityDate: date("last_activity_date").defaultNow(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
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
  bio: text("bio"),
  location: varchar("location", { length: 100 }).notNull(),
  avatarUrl: text("avatar_url"),
  inspiration: text("inspiration"),
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
  created_at: timestamp("created_at").defaultNow().notNull(),
});

// =======================
// STYLE TAGS
// =======================
export const styleTags = pgTable("style_tags", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 50 }).unique().notNull(),
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
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// =======================
// LIKES
// =======================
export const likes = pgTable(
  "likes",
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
