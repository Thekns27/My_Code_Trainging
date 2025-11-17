import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "Message",
  tableName: "messages",
  columns: {
    id: { primary: true, type: "int", generated: true },
    content: { type: "text" },
    createdAt: { type: "timestamp", createDate: true },
  },
  // relations: {
  //   user: { type: "many-to-one", target: "User", joinColumn: true },
  //   chatRoom: { type: "many-to-one", target: "ChatRoom", joinColumn: true },
  // },
});
