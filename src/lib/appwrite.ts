import { Client, Account } from "appwrite";
import config from "../../config";

export const client = new Client();

client
  .setEndpoint(config.env.appwriteEndpoint)
  .setProject(config.env.appwriteProjectID);

export const account = new Account(client);
