import { useState } from "react";
import { limitAndSkipProducts } from "../../services/products/productsServices";

export const useLimitProducts = () => {
    const [products, setProducts] = useState(null);

    const getLimitedProducts = async (limit) => {
        try {
            const response = await limitAndSkipProducts(limit);
            console.log(response);
            setProducts(response);
            return response;
        } catch (error) {
            console.log(`login error: ${error}`);
        }
    }

    return { getLimitedProducts, products };
}