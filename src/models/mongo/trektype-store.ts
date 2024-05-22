import { Trektype } from "../../types/placemark-types.js";
import { TrektypeMongoose } from "./trektype.js";

export const trektypeStore = {
  async find(): Promise<Trektype[]> {
    const trektypes = await TrektypeMongoose.find().lean();
    return trektypes;
  },

  async findOne(id: string): Promise<Trektype | null> {
    const trektype = await TrektypeMongoose.findOne({ _id: id }).lean();
    return trektype;
  },

  async findBy(title: string): Promise<Trektype | null> {
  const trektype = await TrektypeMongoose.findOne({ title }).lean();
  return trektype;
  },

};