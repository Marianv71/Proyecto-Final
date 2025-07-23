import { Router } from "express";
const router = Router();

import { getAllProductos, getProductoByID } from "../controllers/productos.controller.js";

import { auth } from "../middlewares/auth.middleware.js";

router.get("/productos", getAllProductos);
router.get("/productos/:id", auth, getProductoByID);


export default router;






