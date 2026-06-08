import { ID } from "appwrite";
import { account } from "./appwrite";

class AuthService {
  async createAccount({ email, password, name }) {
    const userAccount = await account.create(
      ID.unique(),
      email,
      password,
      name,
    );

    if (userAccount) {
      return await this.login({ email, password });
    }

    return userAccount;
  }

  async login({ email, password }) {
    return await account.createEmailPasswordSession(email, password);
  }

  async getCurrentUser() {
    return await account.get();
  }

  async logout() {
    await account.deleteSessions();
  }
}

const authService = new AuthService();

export default authService;

/*
    This service can do 4 things:
    1-Create a new account (Sign Up)
    2-Login
    3-Get current logged-in user
    4-Logout
  */
