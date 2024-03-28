import { Request, Response } from "express";
import { productModel } from "../model/product";


export const createProduct = async (req: Request, res: Response) => {
  try {

    const newProduct = await productModel.create(req.body)
    res.status(201).json(newProduct)


  } catch (error) {
    console.log(error);

    res.status(500).send({ success: false, error: "Create product failed" });
  }
};


export const getAllProducts = async (req: Request, res: Response) => {

  try {


    const products = await productModel.find().populate('mainCategory')
    

    res.status(200).json(products);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: " Server Error" });
  }
};


export const getProductById = async (req: Request, res: Response) => {

  try {
    const product = await productModel.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "product not found" });
    }
    res.status(200).json(product);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


export const updateProductById = async (req: Request, res: Response) => {

  try {
    const updatedProduct = await productModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ error: "product not found" });
    }
    res.status(200).json(updatedProduct);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


export const deleteProductById = async (req: Request, res: Response) => {

  try {
    const deletedProduct = await productModel.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ error: "product not found" });
    }
    res.status(204).json();

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};