import { Client, Account, Databases, Storage } from "appwrite";
import config from "@/config/config";

const client = new Client();

client.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

export default client;
