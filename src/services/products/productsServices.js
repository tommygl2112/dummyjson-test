export const limitAndSkipProducts
    = (limit) => {
        return new Promise((resolve, reject) => {
            fetch(`https://dummyjson.com/products?limit=${limit}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
                .then(data => {
                    resolve(data.json());
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

export const updateAProduct
    = (id, title, description, price, stock, imageUrl) => {
        return new Promise((resolve, reject) => {
            fetch(`https://dummyjson.com/products/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: title,
                    description: description,
                    price: price,
                    stock: stock,
                    imageUrl: imageUrl
                })
            })
                .then(data => {
                    resolve(data.json());
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

export const deleteProduct
    = (id) => {
        return new Promise((resolve, reject) => {
            fetch(`https://dummyjson.com/products/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            })
                .then(data => {
                    resolve(data.json());
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
