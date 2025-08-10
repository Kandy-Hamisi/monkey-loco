import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email(),
  passwordHash: z.string().min(8, "Password must be at least 8 characters"),
});

export const signUpSchema = z
  .object({
    username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username must be less than 20 characters")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores",
      ),
    email: z.string().email("Invalid email address"),
    passwordHash: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number",
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.passwordHash === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const updateProfileSchema = z.object({
  displayName: z.string().min(1, "Display name is required").max(100),
  bio: z.string().max(500, "Bio must be less than 500 characters").optional(),
  location: z
    .string()
    .max(100, "Location must be less than 100 characters")
    .optional(),
  favoriteStyle: z.string().max(50).optional(),
  fashionGoals: z.string().max(1000).optional(),
});
