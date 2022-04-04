import { Router } from "express";
import {
  findAll,
  findById,
  saveCat,
  updateCat,
  updatePartialCat,
  deleteById,
} from "./cats.service";

// cats에 해당하는 router들을 Router 인스턴스를 모아 해당 인스턴스에 등록을 해준 후
// app에다가 router 인스턴스를 등록해준다.
export const router = Router();

// READ 고양이 전체 데이터 조회 -> GET
router.get("/cats", findAll);

// READ 특정 고양이 데이터 조회 -> GET
router.get("/cats/:id", findById);

// CREATE 새로운 고양이 추가 -> POST
router.post("/cats", saveCat);

// UPDATE 고양이 데이터 업데이트 -> PUT
router.put("/cats/:id", updateCat);

// UPDATE 고양이 데이터 부분 업데이트 -> Patch
router.put("/cats/:id", updatePartialCat);

// DELETE 고양이 데이터 삭제 -> Delete
router.delete("/cats/:id", deleteById);
