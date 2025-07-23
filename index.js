//Importo las variables de entorno
import "dotenv/config";

import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.json({message: "API REST del Proyecto Final, funcionando!"})
}); 

import productosRouter from "./src/routes/productos.router.js";
app.use("/api", productosRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT,() => console.log(`http://localhost:${PORT}`));
