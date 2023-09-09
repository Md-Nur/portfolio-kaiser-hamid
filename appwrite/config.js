import conf from "@/conf/config.js";
import { Client, Account, ID, Databases } from "appwrite";

const appwriteClient = new Client()
  .setEndpoint(conf.appwriteUrl)
  .setProject(conf.appwriteProjectId);


const databaseId = conf.appwriteDatabaseId;

export const account = new Account(appwriteClient);

export class AppwriteService {
  async login(email, password) {
    try {
      console.log("Login success");
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
      console.log("Get current user error", e);
    }
  }

  async logout() {
    try {
      console.log("Logout success");
      return await account.deleteSession("current");
    } catch (e) {
      console.log("Logout error", e);
    }
  }
  async readData(collectionId, documentId) {
    try {
      const database = new Databases(appwriteClient);
      return await database.getDocument(databaseId, collectionId, documentId);
    } catch (e) {
      console.log("Read database error", e);
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
      return "Update database error", e;
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
      return await database.listDocuments(databaseId, collectionId);
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
