import React from 'react';
import Logo from '../assets/logo-dark.png';
import Image from 'next/image'
export default function Under() {
    return (
        <div>
            <Image
                src={Logo}
                alt="PasTeal Logo"
                className="dark"
                width={600}
                priority
            />
            <p className="text-2xl text-center">Az oldal fejlesztés alatt áll <br /> Megértésüket köszönjük</p>
        </div>
        
    );
}