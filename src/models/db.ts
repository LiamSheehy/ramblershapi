import { Db } from "../types/placemark-types.js";
import { connectMongo } from "./mongo/connect.js";

export const db: Db = {
  userStore: null,
  trektypeStore: null,
  placemarkStore: null,
};

export function connectDb(dbType: string) {
  switch (dbType) {
    case "mongo":
      connectMongo(db);
      break;
    default:
  }
}