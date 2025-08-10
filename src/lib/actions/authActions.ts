"use server";

//signup
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import { hash } from "bcryptjs";
import { signIn } from "../auth";

type AuthResult = {
  success: boolean;
  error?: string;
};

export const signUp = async (params: AuthCredentials): Promise<AuthResult> => {
  const { username, email, passwordHash } = params;

  console.log("user email: ", email);

  // check if the user already exists
  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (existingUser.length > 0) {
    return { success: false, error: "User already exists" };
  }

  const hashedPassword = await hash(passwordHash, 10);
  console.log("Hashed Password: ", hashedPassword);

  try {
    await db.insert(users).values({
      username,
      email,
      passwordHash: hashedPassword,
    });

    //     perform any other operations like workflows for sending emails
    console.log("User successfully created");

    await signInWithCredentials({ email, passwordHash });

    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false, error: "There was an error while signing up" };
  }
};

export const signInWithCredentials = async (
  params: Pick<AuthCredentials, "email" | "passwordHash">,
) => {
  const { email, passwordHash } = params;

  try {
    const result = await signIn("credentials", {
      email,
      password: passwordHash,
      redirect: false,
    });

    if (result?.error) {
      // throw new Error(result.error);
      return { success: false, error: result?.error };
    }

    return { success: true };
  } catch (error) {
    console.log(error, "Sign In Error");
    return { success: false, error: "Sign In Error" };
  }
};
