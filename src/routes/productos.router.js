import { Router } from "express";
const router = Router();

import { getAllProductos } from "../controllers/productos.controller.js";

router.get("/productos", getAllProductos);

export default router;






