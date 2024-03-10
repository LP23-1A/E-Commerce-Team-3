import { Request, Response } from "express";
import aws, { S3 } from "aws-sdk"
import dotenv from "dotenv"
import {promisify} from "util"
import crypto from "crypto"
import { productModel } from "../model/product";

dotenv.config()

const randomBytes = promisify(crypto.randomBytes)

const s3 = new aws.S3({

  region : process.env.REGION,
  accessKeyId : process.env.ACCESS_KEY,
  secretAccessKey : process.env.SECRET_ACCESS_KEY,
  signatureVersion : "v4"

})


const bucketName = "team3-ecommerce"

export const generateUrl = async () => {

  const rawBytes =  randomBytes(16)
  const ImageName = rawBytes.toString('hex') 
  const params = ({
    Bucket : bucketName,
    key : ImageName ,
    expires : 60
  })

  const uploadUrl = await s3.getSignedUrlPromise("putObject" , params)
  return uploadUrl

}


type ProductType = {
  productName : string,
  categoryId : string,
  price : number,
  quantity : number,
  thumbnails:string,
  images: string,
  coupon : string,
  salePercent : number,
  description : string,
  viewsCount : number,

}



export const createProduct = async (req: Request, res: Response) => {
    try {


      const {productName , description , price , quantity , categoryId, images} : Required <ProductType> = req.body
    const newProduct = await productModel.create({
      productName ,
      description ,
      price ,
      quantity ,
      categoryId,
      images ,
   
    })
    newProduct.save()
    return res.status(200).send({success:true})

     
    } catch (error) {
        return res.status(500).send({ success: false, error: "Create product failed" });
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


  export const getProducById = async (req: Request, res: Response) => {

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
      const updatedProduct = await productModel.findByIdAndUpdate( req.params.id, req.body,{ new: true });
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
      const deletedProduct = await productModel.findByIdAndDelete(req.params.id );
      if (!deletedProduct) {
        return res.status(404).json({ error: "product not found" });
      }
      res.status(204).json();

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };