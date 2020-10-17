import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

import Heroes from '../../assets/heroes.png'
import Logo from '../../assets/logo.svg'

import api from '../../services/api';

export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();
        const data = { name, email, whatsapp, city, uf };
        const response = await api.post('ongs', data);
        alert(`Seu ID de acesso: ${response.data.id}`)
        history.push('/');
    }

    return (
        <div className="register-container">
            <div className="content">
                <section className="form">
                    <img src={Logo} alt="Logo" />
                    <h1>Faça seu cadastro</h1>
                    <p>Cadastre-se, entre na plataforma e ajude pessoas a encontrarem casos da sua ong</p>
                    <Link to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Já tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input type="text" placeholder="Nome da ONG" value={name} onChange={e => setName(e.target.value)} />
                    <input type="email" placeholder="Seu e-mail" value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="text" placeholder="Whatsapp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />
                    <div className="input-group">
                        <input type="text" placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)} />
                        <input type="text" placeholder="UF" style={{ width: 80 }} value={uf} onChange={e => setUf(e.target.value)} />
                    </div>
                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}