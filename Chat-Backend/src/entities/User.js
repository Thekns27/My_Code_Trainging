import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
    },
  },
  // relations: {
  //   chatRooms: {
  //     type: "one-to-many",
  //     target: "chatRoom",
  //     inverseSide: "user",
  //   },
  // },
});
