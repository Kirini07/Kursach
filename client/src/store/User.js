import { makeAutoObservable } from "mobx";

class User {
  user = {
    token: null,
    userId: null,
    role: null,
  };

  constructor() {
    makeAutoObservable(this);
  }

  login(token = null, userId = null, role = null, save = false) {
    this.user.token = token;
    this.user.userId = userId;
    this.user.role = role;
    if (save) {
      localStorage.setItem(
        "userData",
        JSON.stringify({
          userId,
          token,
          role,
        })
      );
    }
  }

  logout() {
    this.user.token = null;
    this.user.userId = null;
    this.user.role = null;
    localStorage.removeItem("userData");
  }
}

export const user = new User();
