import { updateAProduct } from "../../services/products/productsServices";

export const useUpdateProduct = () => {

    const getLimitedProducts = async (id, title, description, price, stock, imageUrl, setNotification) => {
        try {
            const response = await updateAProduct(id, title, description, price, stock, imageUrl);
            setNotification('Producto editado satisfactoriamente');
            return response;
        } catch (error) {
            setNotification('Error al editar el producto');
            console.log(`login error: ${error}`);
            return;
        }
    }

    return getLimitedProducts;
}