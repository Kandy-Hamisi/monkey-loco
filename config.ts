const config = {
  env: {
    appwriteEndpoint: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
    appwriteProjectID: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!,
    databaseUrl: process.env.DATABASE_URL!,
  },
};

export default config;
