//Como tengo que importar una función con el mismo nombre, pongo el * parra que traiga "todas" las funciones
//dentro del objeto services. Así evito poner losnombres duplicados.

import * as Service from "../services/productos.services.js"

export const getAllProductos = (req, res) => {
    
    const productos = Service.getAllProductos();
    res.json (productos);

}