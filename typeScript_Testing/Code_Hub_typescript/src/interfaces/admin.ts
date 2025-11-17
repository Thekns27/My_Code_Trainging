import type{ User } from "./user";
import type{ Editor } from "./editor";
export interface Admin extends User, Editor {
  addUser(): string;
}
