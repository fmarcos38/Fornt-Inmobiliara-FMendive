import React from 'react';
import './styles.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


function Redes() {
    return (
        <div className="sidebar">
            <a href='https://www.instagram.com/florm.bienesraices/'>
                <InstagramIcon className='iconosRedes'/>
            </a>
            <a href='http://api.whatsapp.com/send?phone=2234422665'>
                <WhatsAppIcon className='iconosRedes'/>
            </a>
        </div>
    )
}

export default Redes