import { NextFunction, Request, Response } from "express";
import { MapModel } from "../models/map.model";

// GET /maps - find all
export const getAllMaps = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const maps = await MapModel.find();
    res.json(maps);
  } catch (err) {
    next(err);
  }
};

// GET /maps/:id - find by id
export const getMapById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const map = await MapModel.findById(req.params.id);
    if (!map) {
      res.status(404).json({ error: "Map not found" });
      return;
    }
    res.json(map);
  } catch (err) {
    next(err);
  }
};

// POST /maps - create
export const createMap = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newMap = new MapModel(req.body);
    await newMap.save();
    res.status(201).json(newMap);
  } catch (err) {
    next(err);
  }
};

// PUT /maps/:id - update
export const updateMap = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedMap = await MapModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedMap) {
      res.status(404).json({ error: "Map not found" });
      return;
    }
    res.json(updatedMap);
  } catch (err) {
    next(err);
  }
};

// DELETE /maps/:id - delete
export const deleteMap = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const deletedMap = await MapModel.findByIdAndDelete(req.params.id);
    if (!deletedMap) {
      res.status(404).json({ error: "Map not found" });
      return;
    }
    res.json({ message: "Map deleted successfully" });
  } catch (err) {
    next(err);
  }
};
