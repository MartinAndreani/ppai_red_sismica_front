import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="w-full fixed top-0 left-0 z-50 shadow-md p-1 flex items-center justify-between bg-white">
            <img src={logo} alt="Logo" className="max-h-20" />

            <div className="absolute left-1/2 transform -translate-x-1/2">
                <ul className="flex flex-row gap-20 text-xl text-red-500 font-sans">
                    <li>
                        <Link to="/" className="hover:text-red-700">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/eventos" className="hover:text-red-700">Eventos sísmicos</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;