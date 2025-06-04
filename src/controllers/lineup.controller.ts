import { NextFunction, Request, Response } from "express";
import { LineupModel } from "../models/lineup.model";

// GET /api/lineups
export const getAllLineups = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const lineups = await LineupModel.find()
      .populate("map")
      .populate("origin.area")
      .populate("destination.area");
    res.json(lineups);
  } catch (err) {
    next(err);
  }
};

// GET /api/lineups/:id
export const getLineupById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const lineup = await LineupModel.findById(req.params.id)
      .populate("map")
      .populate("origin.area")
      .populate("destination.area");

    if (!lineup) {
      res.status(404).json({ error: "Not found" });
      return; // just return void here
    }
    res.json(lineup);
  } catch (err) {
    next(err);
  }
};

// POST /api/lineups
export const createLineup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const lineup = new LineupModel(req.body);
    await lineup.save();
    res.status(201).json(lineup);
  } catch (err) {
    next(err);
  }
};

// PUT /api/lineups/:id - update
export const updateLineup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedLineup = await LineupModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedLineup) {
      res.status(404).json({ error: "Lineup not found" });
      return;
    }
    res.json(updatedLineup);
  } catch (err) {
    next(err);
  }
};
