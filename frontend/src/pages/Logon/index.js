import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

import Heroes from '../../assets/heroes.png'
import Logo from '../../assets/logo.svg'

import api from '../../services/api';

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const response = await api.post('sessions', { id });
            console.log(response.data);
            localStorage.setItem('ongName', response.data.name);
            localStorage.setItem('ongId', id);
            console.log(response.data.name)
            history.push('/profile');
        } catch (err) {
            alert('falha no login, tente novamente');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={Logo} alt="Logo" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input type="text" placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)} />
                    <button type="submit" className="button">Entrar</button>
                    <Link to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={Heroes} alt="Heroes" />
        </div>
    )
}