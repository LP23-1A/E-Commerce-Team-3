import express from "express"
import { createProduct, deleteProductById, getAllProducts, getProducById, updateProductById } from "../controller/product";

const product = express.Router();

product.route("/").post(createProduct).get(getAllProducts)
product.route("/:id").get(getProducById).put(updateProductById).delete(deleteProductById)

export {product}