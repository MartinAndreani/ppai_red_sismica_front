import { useState, useEffect } from 'react';
import EventoSismicoCard from './EventoSismicoCard';

const ListaEventosSismicos = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/api/eventos')
      .then(res => res.json())
      .then(data => {
        // Si el backend retorna un string JSON, parsear dos veces
        const eventos = typeof data === 'string' ? JSON.parse(data) : data;
        setEvents(eventos);
        setLoading(false);
      })
      .catch(err => {
        setError('Error al cargar los eventos sísmicos');
        setLoading(false);
      });
  }, []);

  const handleSelectClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseCard = () => {
    setSelectedEvent(null);
  };

  if (loading) {
    return <div className="text-center mt-8">Cargando eventos sísmicos...</div>;
  }

  if (error) {
    return <div className="text-center mt-8 text-red-600">{error}</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Eventos Sísmicos Recientes</h1>

        {events && events.length > 0 ? (
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
                <tr>
                  <th className="py-3 px-6 text-left">Fecha y Hora</th>
                  <th className="py-3 px-6 text-left">Magnitud</th>
                  <th className="py-3 px-6 text-left">Epicentro (Lat, Lon)</th>
                  <th className="py-3 px-6 text-left">Hipocentro (Lat, Lon)</th>
                  <th className="py-3 px-6 text-center">Acciones</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {events.map((event, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-200 hover:bg-gray-100 ${
                      selectedEvent === event ? 'bg-blue-100' : ''
                    }`}
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      {new Date(event.fechaHora).toLocaleString()}
                    </td>
                    <td className="py-3 px-6 text-left">{event.magnitud}</td>
                    <td className="py-3 px-6 text-left">
                      ({event.latitudEpicentro}, {event.longitudEpicentro})
                    </td>
                    <td className="py-3 px-6 text-left">
                      ({event.latitudHipocentro}, {event.longitudHipocentro})
                    </td>
                    <td className="py-3 px-6 text-center">
                      <button
                        onClick={() => handleSelectClick(event)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Seleccionar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-8">No hay eventos sísmicos para mostrar.</p>
        )}

        {selectedEvent && (
          <EventoSismicoCard event={selectedEvent} onClose={handleCloseCard} />
        )}
      </div>
    </div>
  );
};

export default ListaEventosSismicos;