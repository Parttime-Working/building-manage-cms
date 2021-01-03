import axios from "axios";

const API = process.env.REACT_APP_SERVICE_API;

class BackendService {
  constructor(url) {
    this.client = axios.create({
      baseURL: url,
      timeout: 60000,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true",
      },
      withCredentials: true,
    });
  }

  async login({ username, password }) {
    return this.client.post("/auth/login", {
      username,
      password,
    });
  }

  async logout() {
    return this.client.post("/auth/logout");
  }

  async listUsers({ page = 1, pageSize = 10, filter = {} } = {}) {
    // TODO: implement filter
    return this.client.get("/users", {
      params: {
        page,
        pageSize,
        // filter,
      },
    });
  }

  async getUserByNo({ no }) {
    return this.client.get(`/users/${no}`);
  }

  async getMe() {
    return this.client.get("/users/me");
  }

  async updateUserByNo({ no, username, password }) {
    return this.client.patch(`/users/${no}`, {
      username,
      password,
    });
  }

  async createUser({ username, password }) {
    return this.client.post("/users", {
      username,
      password,
    });
  }
}

export const backendService = new BackendService(API);
