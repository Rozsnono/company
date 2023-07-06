import React from 'react';
import Logo from '../assets/logo-dark.png';
import Image from 'next/image'

import "../app/globals.css"
import "../styles/404.css"

import 'primeicons/primeicons.css';
import { BrowserRouter, Link } from 'react-router-dom';

export default function NoPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <Image
                src={Logo}
                alt="PasTeal Logo"
                className="dark"
                width={600}
                priority
            />
            <div className="flex-1 error">
                <p className="text-2xl text-center">404 | Az oldal nem található</p>
                <button onClick={()=>window.location.href = "/"} className='btn-1 text-center'><span><i className='pi pi-home' /> Vissza a főoldalra!</span></button>
                <p className="text-2xl  error"><a href="/"></a></p>
            </div>
        </div>

    );
}