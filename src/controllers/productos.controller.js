//Como tengo que importar una función con el mismo nombre, pongo el * parra que traiga "todas" las funciones
//dentro del objeto services. Así evito poner losnombres duplicados.

import * as Service from "../services/productos.services.js"

export const getAllProductos = async (req, res) => {
    
    const productos = await Service.getAllProductos();
    res.json (productos);
}; 

export const getProductoByID = async (req, res) => {
    const { id } = req.params;
    const producto = await Service.getProductoByID(id);
    if (producto) {
        res.json(producto);
    } else {
        res.status(404).json({ message: "Producto No encontrado"});
    }
};