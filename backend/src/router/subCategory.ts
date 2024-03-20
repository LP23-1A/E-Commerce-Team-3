import express from "express"
import {  } from "../controller/mainCategory";
import { createSubCategory, getAllSubCategory } from "../controller/subCategory";

const subCategory = express.Router();

subCategory.route("/subCategory").post(createSubCategory).get(getAllSubCategory)

export {subCategory}