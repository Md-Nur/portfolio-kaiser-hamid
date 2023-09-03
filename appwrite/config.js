import conf from "./conf/config.js";
import { Client, Account, ID, Databases } from "appwrite";

const appwriteClient = new Client()
  .setEndpoint(conf.appwriteUrl)
  .setProject(conf.appwriteProjectId);

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
     console.log("Get current user error", e);
    }
  }

  async logout() {
    try {
      return await account.deleteSession("current");
    } catch (e) {
      console.log("Logout error", e);
    }
  }
}

const appwriteService = new AppwriteService();
export default appwriteService;
