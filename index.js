import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.json({message: "API REST del Proyecto Final, funcionando!"})
}); 

const PORT = 3000;

app.listen(PORT,() => console.log(`http://localhost:${PORT}`));

