import { Request, Response } from "express";
import { productModel } from "../model/product";
import { generateUrl } from "../utils/s3";
import axios from "axios";



type ProductType = {
  productName: string,
  categoryId: string,
  price: number,
  quantity: number,
  thumbnails: string,
  images: [string],
  coupon: string,
  salePercent: number,
  description: string,
  viewsCount: number,

}



export const createProduct = async (req: Request, res: Response) => {
  try {


    const { productName, description, price, quantity, categoryId, images }: Required<ProductType> = req.body
    const newProduct = await productModel.create({
      productName,
      description,
      price,
      quantity,
      categoryId,
      images


    })
    newProduct.save()
    res.status(200).send({ success: true })


  } catch (error) {
    console.log(error);

    res.status(500).send({ success: false, error: "Create product failed" });
  }
};


export const getAllProducts = async (req: Request, res: Response) => {

  try {
    const products = await productModel.find();
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