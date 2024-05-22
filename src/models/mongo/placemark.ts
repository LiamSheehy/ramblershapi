import { Schema, model } from "mongoose";
import { Placemark } from "../../types/placemark-types";

const placemarkSchema = new Schema<Placemark>({
  poi: String,
  level: String,
  member: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  trektype: {
    type: Schema.Types.ObjectId,
    ref: "Trektype",
  },
  lat: String,
  lng: String,
});

export const PlacemarkMongoose = model("Placemark", placemarkSchema);