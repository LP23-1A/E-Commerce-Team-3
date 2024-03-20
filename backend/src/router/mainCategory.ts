import express from "express"
import { createMainCategory, getAllMainCategory } from "../controller/mainCategory";


const mainCategory = express.Router();

mainCategory.route("/mainCategory").post(createMainCategory).get(getAllMainCategory)

export {mainCategory}
