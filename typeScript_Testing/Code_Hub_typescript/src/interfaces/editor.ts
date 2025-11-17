import type { User } from "./user";
export interface Editor extends User {
  deleteUser(): string;
}
