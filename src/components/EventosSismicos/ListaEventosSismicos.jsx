import { useState } from 'react';
import EventoSismicoCard from './EventoSismicoCard'; // Import the new card component

const ListaEventosSismicos = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseCard = () => {
    setSelectedEvent(null);
  };

  return (
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
                    {new Date(event.fechaHoraOcurrencia).toLocaleString()}
                  </td>
                  <td className="py-3 px-6 text-left">{event.valorMagnitud}</td>
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
  );
};

export default ListaEventosSismicos;