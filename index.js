import "dotenv/config"; //Importo las variables de entorno
import express from "express";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "API REST del Proyecto Final, funcionando!"})
}); 

import productosRouter from "./src/routes/productos.router.js";
app.use("/api", productosRouter);

import authRouter from "./src/routes/auth.router.js";
app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT,() => console.log(`http://localhost:${PORT}`));
