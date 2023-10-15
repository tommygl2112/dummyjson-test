import { loginUserAndGetToken } from '../../services/login/loginServices.js';

export const useLogin = () => {

    const login = async (username, password, setErrorMsg) => {
        try {
            const response = await loginUserAndGetToken(username, password);
            if (response.message === 'Invalid credentials') {
                setErrorMsg(response.message)
                return (response.message);
            } else {
                window.location.href = 'https://dummyjson-test.vercel.app/list';
            }
        } catch (error) {
            console.log(`login error: ${error}`);
        }
    }

    return login;
}