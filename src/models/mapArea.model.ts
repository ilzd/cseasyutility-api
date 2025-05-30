import { Schema, model, Document, Types } from "mongoose";
import { I18n, Coordinate } from "../types/common";

export interface MapAreaDocument extends Document {
  map: Types.ObjectId;
  name: I18n;
  region: Coordinate[];
}

const coordinateSchema = new Schema<Coordinate>(
  {
    x: { type: Number, required: true },
    y: { type: Number, required: true },
  },
  { _id: false }
);

const mapAreaSchema = new Schema<MapAreaDocument>({
  map: { type: Schema.Types.ObjectId, ref: "Map", required: true },
  name: { type: Map, of: String, required: true },
  region: { type: [coordinateSchema], required: true },
});

export const MapAreaModel = model<MapAreaDocument>("MapArea", mapAreaSchema);
