import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.json({message: "API REST del Proyecto Final, funcionando!"})
}); 

import productosRouter from "./src/routes/productos.router.js";
app.use("/api", productosRouter);

const PORT = 3000;

app.listen(PORT,() => console.log(`http://localhost:${PORT}`));
