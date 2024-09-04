import React, { useRef  } from 'react';
import emailjs from 'emailjs-com';
import './styles.css';

import Button from '@mui/material/Button';


const FormularioContacto = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_s3ri20f', 'template_b41v11l', form.current, 'N02Ckz93ExVB6IuAS')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='cont-formulario'>
            <form ref={form} onSubmit={sendEmail} className='div-cont-form'>
                <h1>Formulario de contacto</h1>
                <div class="form__group field">
                    <input required class="form__field" placeholder="Name" type="text" name='user_name' />
                    <label class="form__label" for="name">Nombre y Apellido</label>
                </div>

                <div class="form__group field">
                    <input required class="form__field" placeholder="Name" type="email" name="user_email" />
                    <label class="form__label" for="name">Email</label>
                </div>

                <div class="form__group field">
                    <textarea required class="form__field textarea-form-contacto" placeholder="Name" name="message" />
                    <label class="form__label" for="name">Mensaje</label>
                </div>
                <div className='btn-enviar-contacto'>
                    <Button variant="outlined" type="submit" >Enviar</Button>
                </div>
            </form>
        </div>
    );
};

export default FormularioContacto;
