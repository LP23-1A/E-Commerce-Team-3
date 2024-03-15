import express from "express"
import { createProduct, deleteProductById, getAllProducts, getProductById, updateProductById } from "../controller/product";
import { generateUrl } from "../utils/s3";

const product = express.Router();

product.route("/").post(createProduct).get(getAllProducts)
product.route("/:id").get(getProductById).put(updateProductById).delete(deleteProductById)

export { product }