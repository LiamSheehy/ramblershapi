import { Placemark } from "../../types/placemark-types.js";
import { PlacemarkMongoose } from "./placemark.js";

export const placemarkStore = {
  async find(): Promise<Placemark[]> {
    const placemarks = await PlacemarkMongoose.find().populate("member").populate("trektype").lean();
    return placemarks;
  },

  async findBy(id: string): Promise<Placemark | null> {
    const placemark = await PlacemarkMongoose.findOne({ trektype: id });
    if (!placemark) {
      return null;
    }
    return placemark;
  },

  async add(placemark: Placemark): Promise<Placemark | null> {
    let newPlacemark = new PlacemarkMongoose({ ...placemark });
    await newPlacemark.save();
    return newPlacemark;
  },

  async delete() {
    await PlacemarkMongoose.deleteMany({});
  },
};
