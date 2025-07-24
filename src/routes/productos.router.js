import { Router } from "express";
const router = Router();

import { getAllProductos, getProductoByID, createProductos, updateProductos, deleteProductos } from "../controllers/productos.controller.js";

import { auth } from "../middlewares/auth.middleware.js";

router.get("/productos", getAllProductos);
router.get("/productos/:id", auth, getProductoByID);

//ALTA
router.post("/productos", auth, createProductos);

//MODIFICACIÓN
router.put("/productos/:id", auth, updateProductos);

//BAJA
router.delete("/productos/:id", auth, deleteProductos);


export default router;






