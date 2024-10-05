import express, { Route } from "express";
import { addProduct, deleteProductById, getProductById, getproducts, updateProductById } from "../Controllers/product.js";

const router =express.Router();
//addproduct
router.post('/add',addProduct)
//get product
router.get('/all',getproducts)
//get product by id 
router.get('/:id',getProductById)
//update product by id
router.put('/:id',updateProductById)
//delete product by id
router.delete('/:id',deleteProductById);







export default router;
