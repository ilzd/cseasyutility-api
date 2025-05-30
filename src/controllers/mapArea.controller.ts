import { NextFunction, Request, Response } from "express";
import { MapAreaModel } from "../models/mapArea.model";

// GET /map-areas/map/:mapId — find all areas for a specific map
export const getMapAreasByMapId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const areas = await MapAreaModel.find({ map: req.params.mapId });
    res.json(areas);
  } catch (err) {
    next(err);
  }
};

// GET /map-areas/:id — find area by ID
export const getMapAreaById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const area = await MapAreaModel.findById(req.params.id);
    if (!area) {
      res.status(404).json({ error: "MapArea not found" });
      return;
    }
    res.json(area);
  } catch (err) {
    next(err);
  }
};

// POST /map-areas — create new area
export const createMapArea = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const area = new MapAreaModel(req.body);
    await area.save();
    res.status(201).json(area);
  } catch (err) {
    next(err);
  }
};

// PUT /map-areas/:id — update area
export const updateMapArea = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updated = await MapAreaModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updated) {
      res.status(404).json({ error: "MapArea not found" });
      return;
    }
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

// DELETE /map-areas/:id — delete area
export const deleteMapArea = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const deleted = await MapAreaModel.findByIdAndDelete(req.params.id);
    if (!deleted) {
      res.status(404).json({ error: "MapArea not found" });
      return;
    }
    res.json({ message: "MapArea deleted successfully" });
  } catch (err) {
    next(err);
  }
};
