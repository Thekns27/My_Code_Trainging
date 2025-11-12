import { EntitySchema, JoinColumn } from "typeorm";

export default new EntitySchema({
  name: "Photo",
  tableName: "photos",
  columns: {
    id: {
        type: Number,
        primary: true,
        generated: true,
    },
    path: {
        type: String
    },
  },
  relations: {
    user: {
        type: "many to one",
        target: "User",
        JoinColumn: true,
        inverseSide: "photos",
    }
  }
});
