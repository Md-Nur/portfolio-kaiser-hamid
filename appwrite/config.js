import conf from "@/conf/config.js";
import { Client, Account, ID, Databases, Query } from "appwrite";

const appwriteClient = new Client()
  .setEndpoint(conf.appwriteUrl)
  .setProject(conf.appwriteProjectId);

const databaseId = conf.appwriteDatabaseId;

export const account = new Account(appwriteClient);

export class AppwriteService {
  async login(email, password) {
    try {
      return await account.createEmailSession(email, password);
    } catch (e) {
      throw e;
    }
  }

  async isLoggedIn() {
    try {
      const data = await this.getCurrentUser();
      return Boolean(data);
    } catch (e) {}
    return false;
  }

  async getCurrentUser() {
    try {
      return await account.get();
    } catch (e) {
      throw e;
    }
  }

  async logout() {
    try {
      console.log("Logout success");
      return await account.deleteSession("current");
    } catch (e) {
      throw e;
    }
  }
  async readData(collectionId, documentId) {
    try {
      const database = new Databases(appwriteClient);
      return await database.getDocument(databaseId, collectionId, documentId);
    } catch (e) {
      throw e;
    }
  }
  async updateData(collectionId, documentId, data) {
    try {
      const database = new Databases(appwriteClient);
      return await database.updateDocument(
        databaseId,
        collectionId,
        documentId,
        data
      );
    } catch (e) {
      throw e;
    }
  }

  async createData(collectionId, data) {
    try {
      const database = new Databases(appwriteClient);
      return await database.createDocument(
        databaseId,
        collectionId,
        ID.unique(),
        data
      );
    } catch (e) {
      throw e;
    }
  }

  async getAllData(collectionId) {
    try {
      const database = new Databases(appwriteClient);
      return await database.listDocuments(databaseId, collectionId, [
        Query.limit(100),
      ]);
    } catch (e) {
      throw e;
    }
  }

  async deleteData(collectionId, documentId) {
    try {
      const database = new Databases(appwriteClient);
      return await database.deleteDocument(
        databaseId,
        collectionId,
        documentId
      );
    } catch (e) {
      throw e;
    }
  }
}

const appwriteService = new AppwriteService();
export default appwriteService;
