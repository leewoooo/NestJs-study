import { Request, Response } from "express";
import { Cat, CatType } from "./cats.model";

interface ErrorResponseBody {
  success: boolean;
  error: string;
}

const generateErrorResponse = (e: Error): ErrorResponseBody => {
  return {
    success: false,
    error: e.message,
  };
};

export const findAll = (req: Request, res: Response) => {
  try {
    res.status(200).send(Cat);
  } catch (e: any) {
    res.status(400).send(generateErrorResponse(e));
  }
};

export const findById = (req: Request, res: Response) => {
  try {
    const selected = Cat.filter((cat) => cat.id === req.params.id);
    res.status(200).send(selected);
  } catch (e: any) {
    res.status(400).send(generateErrorResponse(e));
  }
};

export const saveCat = (req: Request, res: Response) => {
  try {
    const saveCat = req.body as CatType;
    Cat.push(saveCat);
    res.status(201).send(saveCat);
  } catch (e: any) {
    res.status(400).send(generateErrorResponse(e));
  }
};

export const updateCat = (req: Request, res: Response) => {
  try {
    const updateCat = req.body as CatType;
    Cat.forEach((cat) => {
      if (cat.id === updateCat.id) {
        cat = updateCat;
      }
    });
    res.status(204).send();
  } catch (e: any) {
    res.status(400).send(generateErrorResponse(e));
  }
};

export const deleteCat = (req: Request, res: Response) => {
  try {
    const targetId = req.params.id;
    const result = Cat.filter((cat) => cat.id !== targetId);
    res.status(204).send();
  } catch (e: any) {
    res.status(400).send(generateErrorResponse(e));
  }
};
