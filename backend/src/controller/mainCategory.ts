import { mainCategoryModel } from "../model/mainCategory";
import { Request, Response } from "express";


export const createMainCategory = async (req: Request, res: Response) => {
    try {
     
      const newMainCategory = await mainCategoryModel.create(req.body)
          res.status(201).json(newMainCategory)
  
  
    } catch (error) {
      console.log(error);
  
      res.status(500).send({ success: false, error: "Create mainCategory failed" });
    }
  };

  export const getAllMainCategory = async (req: Request, res: Response) => {

    try {
      const mainCategory = await mainCategoryModel.find();
      res.status(200).json(mainCategory);
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: " Server Error" });
    }
  };