import React, { useState } from 'react';
import './ContactoPage.css';
import axios from 'axios';

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData =>({
            ...oldData,
            [name]: value //forma dinámica
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
        axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`, formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return ( <main>
            <div className='App-container'>
            <div className='contacto'>
                <h2>Contacto rápido</h2>
                <br></br>
                <form className='formulario' onSubmit={handleSubmit}>
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}></input>
                    </p>
                    <p>
                        <label for="nombre">E-mail</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange}></input>
                    </p>
                    <p>
                        <label for="nombre">Teléfono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}></input>
                    </p>
                    <p>
                        <label for="nombre">Mensaje</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>
                    {sending ? <p>Enviando...</p>: null}
                    {msg ? <p>{msg}</p>: null}
                    <p class='acciones' className='centrar'>
                        <input type="submit" value="Enviar"></input>
                    </p>
                </form>
                <br></br>
                <div class='datos'>
                    <h2>Otras vías de comunicación</h2>
                <p>Escribinos todos los días, respondemos de lunes a viernes de 9hs a 18hs.</p>
                <ul>
                    <li>Teléfono : +54911654355</li>
                    <li>E-mail : sinergiacosmetica@gmail.com</li>
                    <li>Facebook: Sinergia Cosmética</li>
                    <li>Instagram: @sinergiacosmetica </li>
                </ul>
                </div>
            </div>
        </div>
    </main>
    )
};
export default ContactoPage;
