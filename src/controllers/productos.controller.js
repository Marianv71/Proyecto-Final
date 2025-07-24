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

//ALTA - Esta función me permite dar de alta un producto
export const createProductos = async (req, res) => {
    const newProducto = req.body;
    const createdProductos = await Service.createProductos(newProducto);
    res.status(201).json(createdProductos);
};

//UPDATE - Esta función me permite actualizar un producto, ubicado por su ID
export const updateProductos = async(req, res) => {
    const { id } = req.params;
    const updateProductosData = req.body;

    const updatedProductos = await Service.updateProductos(id, updateProductosData);

    if (updatedProductos) {
        res.json(updatedProductos);
    } else {
        res.status(404).json({ message: "Producto No encontrado"});
    }
};

//DELETE - Esta función me permite eliminar un producto, ubicado por su ID
export const deleteProductos = async (req, res) => {
    const { id } = req.params;
    const deletedProductos = await Service.deleteProductos(id);
    if (deletedProductos) {
        res.json({ message: "Producto eliminado correctamente" });
    } else {
        res.status(404).json({ message: "Producto No encontrado"});
    }
};

