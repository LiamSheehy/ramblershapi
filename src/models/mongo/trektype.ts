import { Schema, model } from "mongoose";
import { Trektype } from "../../types/placemark-types";

const trektypeSchema = new Schema<Trektype>({
  title: String,
});

export const TrektypeMongoose = model("Trektype", trektypeSchema);
