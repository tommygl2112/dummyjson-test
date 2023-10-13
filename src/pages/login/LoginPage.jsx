import React, { useState } from 'react';
import './LoginStyles.css';
import { useLogin } from '../../hooks/login/useLogin';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [errorMsg, setErrorMsg] = useState('');

    const login = useLogin();

    return (
        <div className='main-container'>
            <div className="login-container">
                <h1>Iniciar Sesión</h1>
                <input
                    type="text"
                    placeholder="Nombre de usuario"
                    className="input-field"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    className="input-field"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="login-button" onClick={() => login(username, password, setErrorMsg)}>
                    Iniciar Sesión
                </button>
                <div className="login-error">{errorMsg}</div>
            </div>

            <div className='credenciales-container'>
                <h4>Credenciales de prueba</h4>
                <div>Usuario: kminchelle</div>
                <div>Contraseña: 0lelplR</div>
            </div>
        </div>
    );
}