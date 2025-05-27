import React from 'react';
import imagen from '../../assets/sismo.png';

const Inicio = () => {
    return (
        <div className="relative h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
            {/* Imagen centrada detrás */}
            <img
                src={imagen}
                alt="Imagen de fondo"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 z-0"
            />

            {/* Contenido encima */}
            <div className="z-10 text-center px-6">
                <h1 className="text-4xl font-bold text-gray-800">
                    Bienvenido a la Aplicación de Red de Sismos
                </h1>
                <p className="mt-5 text-lg text-gray-700">
                    Esta aplicación te permite registrar y consultar resultados de manera sencilla.
                </p>
            </div>
        </div>
    );
};

export default Inicio;
