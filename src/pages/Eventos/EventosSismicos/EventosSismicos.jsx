import React, { useEffect, useState } from "react";

const EventosSismicos = () => {
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/test/eventos-todos")
            .then((res) => res.json())
            .then((data) => setEventos(data))
            .catch((err) => console.error("Error al obtener eventos:", err));
    }, []);

    return (
        <div className="max-w-4xl mx-auto mt-28 px-4">
            <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">Eventos Sísmicos (Test)</h2>
            {eventos.length === 0 && (
                <p className="text-gray-500 text-center">No hay eventos.</p>
            )}
            {eventos.map((evento) => (
                <div
                    key={evento.id}
                    className="bg-white rounded-lg shadow-md mb-8 p-6 border border-gray-200"
                >
                    <h3 className="text-xl font-semibold text-red-500 mb-2">
                        Evento #{evento.id}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                        <p><span className="font-semibold">Fecha/Hora:</span> {evento.fechaHoraOcurrencia}</p>
                        <p><span className="font-semibold">Magnitud:</span> {evento.valorMagnitud}</p>
                        <p><span className="font-semibold">Hipocentro:</span> {evento.latitudHipocentro}, {evento.longitudHipocentro}</p>
                        <p><span className="font-semibold">Epicentro:</span> {evento.latitudEpicentro}, {evento.longitudEpicentro}</p>
                    </div>
                    <p className="mb-4">
                        <span className="font-semibold text-blue-700">Estado actual:</span>{" "}
                        <span className="text-blue-700">{evento.estado_actual || "Sin estado"}</span>
                    </p>
                    <div>
                        <span className="font-semibold">Cambios de estado:</span>
                        <ul className="mt-2 space-y-2">
                            {evento.cambios_estado.map((cambio, idx) => (
                                <li
                                    key={idx}
                                    className="bg-gray-100 rounded p-3 text-sm"
                                >
                                    <div>
                                        <span className="font-semibold">Nombre:</span> {cambio.nombre || "N/A"}
                                        {" | "}
                                        <span className="font-semibold">Ámbito:</span> {cambio.ambito || "N/A"}
                                    </div>
                                    <div>
                                        <span className="font-semibold">Inicio:</span> {cambio.fecha_inicio}
                                        {" | "}
                                        <span className="font-semibold">Fin:</span> {cambio.fecha_fin}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EventosSismicos;