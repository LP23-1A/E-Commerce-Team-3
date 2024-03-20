import { subCategoryModel } from "../model/subCategory";
import { Request, Response } from "express";


export const createSubCategory = async (req: Request, res: Response) => {
    try {
     
      const newSubCategory = await subCategoryModel.create(req.body)
          res.status(201).json(newSubCategory)
  
  
    } catch (error) {
      console.log(error);
  
      res.status(500).send({ success: false, error: "Create subCategory failed" });
    }
  };

  export const getAllSubCategory = async (req: Request, res: Response) => {

    try {
      const subCategory = await subCategoryModel.find();
      res.status(200).json(subCategory);
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: " Server Error" });
    }
  };