import React, { useState, useEffect } from 'react';
import './estilos.css';


function FormularioQuieroVender() {

    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    
    // Iniciamos el mensaje vacío
    const [mensaje, setMensaje] = useState('');

    //funcion envio de email
    const sendTokkoApi = async (nombre, email, telefono, mensaje) => {

        const apiKey = "21ba32400d0d3e7c551c128d5363b05d7b1912dd";
        const url = `https://tokkobroker.com/api/v1/webcontact/?key=${apiKey}`
        
        const payload = {        
            api_key: apiKey,
            name: nombre,
            email: email,
            phone: telefono,
            tags: mensaje
        };
        
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            console.log("entré");
            console.log("resp:", response);
            if (response.ok) {
                const text = await response.text();
                if (text) {
                    const jsonResponse = JSON.parse(text)
                    return jsonResponse;
                } else {
                    console.warn('La respuesta no contiene un cuerpo JSON.')
                    return {}; 
                }        
            } else {
                console.error('Error al enviar los datos a la API de Tokko')
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre && telefono && email && mensaje) {
            sendTokkoApi(nombre, email, telefono, mensaje);
            setNombre('');
            setTelefono('');
            setEmail('');
        }else{
            alert('Completa todos los campos');
        }
    };

    // Ajustar la altura del textarea dinámicamente
    const autoResizeTextarea = (e) => {
        e.target.style.height = 'auto';  // Reinicia la altura
        e.target.style.height = `${e.target.scrollHeight}px`;  // Ajusta la altura al contenido
    };

    //efecto para iniciar la Pag desd la parte SUPERIOR
    useEffect(() => {
        // Desplaza la página hacia la parte superior cuando el componente se monta
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const textarea = document.querySelector('textarea');
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    }, [mensaje]); 

    return (
        <div className='cont-vender'>
            <header>
                <div className='header-vender'>
                    <div className='cont-tazacion'>
                        <h2 className='h2-tazacion'>Tazaciones</h2>
                    </div>
                </div>
            </header>
            <main>
                <div className='cont-main'>
                    <div className='cont-titulo-main-form-vender'>
                        <p className='p-qres-vender'>¿Querés tasar con nosotros?</p>
                        <p className='p-envianos'>Envianos los datos de tu propiedad.</p>
                    </div>
                    {/* formulario */}
                    <div className='cont-form-vender'>
                        <form onSubmit={handleSubmit} className='form-vender'>
                            <div className="cont-nombre-form-vender">
                                <label className="label-form-vender" htmlFor="name">Nombre y Apellido</label>
                                <input
                                    required
                                    className="input-nombre-form-vender"
                                    type="text"
                                    name='nombre'
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                            </div>

                            <div className="cont-nombre-form-vender">
                                <label className="label-form-vender" htmlFor="name">Telefono</label>
                                <input
                                    required
                                    className="input-email-form-vender"
                                    type="text"
                                    name='telefono'
                                    value={telefono}
                                    onChange={(e) => setTelefono(e.target.value)}
                                />
                            </div>

                            <div className="cont-nombre-form-vender">
                                <label className="label-form-vender" htmlFor="name">Email</label>
                                <input
                                    required
                                    className="input-email-form-vender"
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="cont-nombre-form-vender">
                                <label className="label-form-vender" htmlFor="name">Mensaje</label>
                                <textarea
                                    required
                                    className="textarea-form-vender"
                                    value={mensaje}
                                    name="msj"
                                    onChange={(e) => setMensaje(e.target.value)}
                                    onInput={autoResizeTextarea}
                                    style={{ overflow: 'hidden', fontSize: '16px' }}  // Ajusta el tamaño de fuente
                                />
                            </div>

                            <div className='btn-enviar-contacto'>                                
                                <button
                                    variant="outlined"
                                    type="submit"
                                    className='btn-form-vender'
                                    >
                                    Enviar
                                </button>                                
                            </div>
                        </form>
                    </div>
                </div>                
            </main>
        </div>
    )
}

export default FormularioQuieroVender