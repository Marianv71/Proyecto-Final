import * as Model from "../models/productos.models.js";

export const getAllProductos = async () => {
    return await Model.getAllProductos();
};

export const getProductoByID = async (id) => {
    return await Model.getProductoByID(id);
};

export const createProductos = async (newProducto) => {
    return await Model.createProductos(newProducto);
};

export const updateProductos = async (id, updateProductoData) => {
    return await Model.updateProductos(id, updateProductoData);
};

export const deleteProductos = async (id) => {
    return await Model.deleteProductos(id);
};
