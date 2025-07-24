//Acá en el Modelo vamos a integrar con Firebase
import { db } from "./bd-firebase.js";

//Importo la colección y todos los documentos
import { collection, getDocs, doc, getDoc, addDoc, setDoc, deleteDoc } from "firebase/firestore";

//Importo los productos de la Collección
const productosCollection = collection(db, "productos");

/*Esta función devuelve todos los productos SIN conexión a la BD
export const getAllProductos = () => {
    return [{ id: 1, name: "Producto 1" }];
};
*/

//BÚSQUEDA - Esta función devuelve todos los productos desde la BD
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

//BÚSQUEDA - Esta función devuelve un producto específico, identificado por su ID
export const getProductoByID = async (id) => {
    try {
        const docRef = doc(productosCollection, id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
    }
};

//ALTA - Esta función me permite dar de alta un producto
export const createProductos = async (newProducto) => {
    try {
        const docRef = await addDoc (productosCollection, newProducto);
        return { id: docRef.id, ...newProducto };
    } catch (error) {
        console.error(error);
    }
};

//UPDATE - Esta función me permite actualizar un producto, ubicado por su ID
export const updateProductos = async (id, updateProductoData) => {
    try {
        const docRef = doc(productosCollection, id);
        await setDoc(docRef, updateProductoData,{ merge: true});
        return { id, ...updateProductoData };
    } catch (error) {
        console.error(error);
        return null;
    }
};

//DELETE - Esta función me permite eliminar un producto, ubicado por su ID
export const deleteProductos = async (id) => {
    try {
        const docRef = doc(productosCollection, id);
        await deleteDoc(docRef);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};