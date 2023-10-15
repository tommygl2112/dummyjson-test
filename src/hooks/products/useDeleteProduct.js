import { updateAProduct } from "../../services/products/productsServices";

export const useDeleteProduct = () => {

    const deleteProduct = async (id) => {
        try {
            const response = await updateAProduct(id);
            alert("Producto eliminado satisfactoriamente");
            window.location.href = 'https://dummyjson-test.vercel.app/list';
        } catch (error) {
            alert("Error al eliminar el producto");
            console.log(`login error: ${error}`);
            return;
        }
    }

    return deleteProduct;
}