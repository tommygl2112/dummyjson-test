export const loginUserAndGetToken = (username, password) => {
    return new Promise((resolve, reject) => {
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
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
