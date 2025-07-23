//Acá en el Modelo vamos a integrar con Firebase
import { db } from "./bd-firebase.js";

//Importo la colección y todos los documentos
import { collection, getDocs } from "firebase/firestore";

//Importo los productos de la Collección
const productosCollection = collection(db, "productos");

/*Esta función devuelve todos los productos SIN conexión a la BD
export const getAllProductos = () => {
    return [{ id: 1, name: "Producto 1" }];
};
*/

//Esta función devuelve todos los productos desde la BD
export const getAllProductos = async () => {
    try {
        const snapshot = await getDocs(productosCollection);
        const productos = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return productos; 
    } catch (error) {
        console.error(error);
    }
};

