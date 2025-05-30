import { Schema, model, Document, Types } from "mongoose";
import { I18n, Position, Utilities } from "../types/common";

interface PositionSchemaType {
  area: Types.ObjectId;
  coordinate: { x: number; y: number };
}

const validUtilityValues = Object.values(Utilities).filter(
  (v) => typeof v === "number"
);

export interface LineupDocument extends Document {
  title: I18n;
  description: I18n;
  map: Types.ObjectId;
  origin: Position;
  destination: Position;
  utility: Utilities;
  videoURL: string;
}

const coordinateSchema = new Schema(
  {
    x: { type: Number, required: true },
    y: { type: Number, required: true },
  },
  { _id: false }
);

const positionSchema = new Schema<PositionSchemaType>(
  {
    area: { type: Schema.Types.ObjectId, ref: "MapArea", required: true },
    coordinate: coordinateSchema,
  },
  { _id: false }
);

const lineupSchema = new Schema<LineupDocument>({
  title: { type: Map, of: String, required: true },
  description: { type: Map, of: String, required: true },
  map: { type: Schema.Types.ObjectId, ref: "Map", required: true },
  origin: positionSchema,
  destination: positionSchema,
  utility: {
    type: Number,
    enum: validUtilityValues,
    required: true,
  },
  videoURL: { type: String },
});

export const LineupModel = model<LineupDocument>("Lineup", lineupSchema);
