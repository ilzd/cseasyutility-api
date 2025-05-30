import { Schema, model, Document } from "mongoose";

export interface Map extends Document {
  name: string;
  thumbnail: string;
  mapImage: string;
}

const mapSchema = new Schema<Map>({
  name: { type: String, required: true },
  thumbnail: { type: String, required: true },
  mapImage: { type: String, required: true }
});

export const MapModel = model<Map>("Map", mapSchema);
