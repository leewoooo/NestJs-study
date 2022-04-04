import { Cat, CatType } from "./cats.model";
import { Request, Response } from "express";

/**
 * service layer를 생성하여 분리한 이유?
 * 코드의 가독성 증가 및 유지보수 증가, 확장성 확보
 * Testcode 작성 용이
 */

// READ 고양이 전체 데이터 조회 -> GET
export const findAll = (req: Request, res: Response) => {
  try {
    const cats = Cat;
    res.status(200).send({
      success: true,
      data: cats,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

// READ 특정 고양이 데이터 조회 -> GET
export const findById = (req: Request, res: Response) => {
  try {
    const cats = Cat;
    const selected = cats.find((cat) => cat.id == req.params.id);
    res.status(200).send({
      success: true,
      data: selected,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

// CREATE 새로운 고양이 추가 -> POST
export const saveCat = (req: Request, res: Response) => {
  try {
    const cat = req.body as CatType;
    Cat.push(cat);
    res.status(200).send({
      success: true,
      data: cat,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

// UPDATE 고양이 데이터 업데이트 -> PUT
export const updateCat = (req: Request, res: Response) => {
  try {
    Cat.forEach((cat) => {
      if (cat.id === req.params.id) {
        cat = req.body;
      }
    });

    res.status(204).send();
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

// UPDATE 고양이 데이터 부분 업데이트 -> Patch
export const updatePartialCat = (req: Request, res: Response) => {
  try {
    Cat.forEach((cat) => {
      if (cat.id === req.params.id) {
        // TODO: 구조 분해 할당?
        // 원본의 데이터와 새로 들어온 데이터를 구조 분해 한 후 key값을 비교하여 데이터를 변경해준다.
        cat = { ...cat, ...req.body };
      }
    });
    res.status(204).send();
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

// DELETE 고양이 데이터 삭제 -> Delete
export const deleteById = (req: Request, res: Response) => {
  try {
    const targetId = req.params.id;
    const result = Cat.filter((cat) => cat.id !== targetId);
    res.status(204).send();
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};
