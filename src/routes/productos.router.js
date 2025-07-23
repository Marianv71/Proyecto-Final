import { Router } from "express";
const router = Router();

import { getAllProductos, getProductoByID } from "../controllers/productos.controller.js";

router.get("/productos", getAllProductos);
router.get("/productos/:id", getProductoByID);


export default router;






