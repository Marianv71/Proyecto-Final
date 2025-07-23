import * as Model from "../models/productos.models.js";

export const getAllProductos = async () => {
    return await Model.getAllProductos();
};

export const getProductoByID = async (id) => {
    return await Model.getProductoByID(id);
};
