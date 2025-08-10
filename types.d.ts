interface AuthCredentials {
  id?: string;
  username: string;
  email: string;
  passwordHash: string; // Only available server-side
  status?: "ONLINE" | "OFFLINE";
  isVerified?: boolean;
  privacy?: "PUBLIC" | "PRIVATE" | "FRIENDS_ONLY";
  lastActivityDate?: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
