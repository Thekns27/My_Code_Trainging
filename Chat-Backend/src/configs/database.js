import { DataSource } from "typeorm";
import User from "../entities/user.js";
import message from "../entities/message.js";
import chatRoom from "../entities/chatRoom.js";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: "5432",
  username: "postgres",
  password: "Thek",
  database: "chat-backenddb",
  synchronize: false,
  logging: true,
  entities: [User,message,chatRoom],
  subscribers: [],
  migrations: ["src/migrations/*.js"],
});
