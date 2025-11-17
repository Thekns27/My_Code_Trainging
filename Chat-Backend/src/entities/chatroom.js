import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "chatRoom",
  tableName: "chatRooms",
  columns: {
    id: { primary: true, type: "int", generated: true },
    name: { type: "varchar" },
  },
  // relations: {
  //   users: {
  //     type: "many-to-many",
  //     target: "User",
  //     joinTable: true,
  //     inverseSide: "chatRoom",
  //   },
  //   messages: {
  //     type: "one-to-many",
  //     target: "Message",
  //     inverseSide: "chatRoom",
  //   },
  // },
});
