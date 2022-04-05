import { Router } from "express";
import {
  deleteCat,
  findAll,
  findById,
  saveCat,
  updateCat,
} from "./cats.service";

export const router = Router();

router.get("/cats", findAll);
router.get("/cats/:id", findById);
router.post("/cats", saveCat);
router.put("/cats/:id", updateCat);
router.delete("/cats/:id", deleteCat);
