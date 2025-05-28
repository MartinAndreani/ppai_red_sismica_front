import { useState } from 'react';

const IMG_GENERICA = 'https://images.pagina12.com.ar/styles/focal_3_2_470x313/public/2025-04/932550-mdz_0.jpg?h=99d542d8&itok=Z0H8lITH';

const EventoSismicoCard = ({ event, onClose }) => {
  const [selectedAction, setSelectedAction] = useState('');

  const handleActionChange = (e) => {
    setSelectedAction(e.target.value);
  };

  const handleConfirmAction = () => {
    if (selectedAction) {
      console.log(`Acción confirmada para el evento ${event.fechaHoraOcurrencia}: ${selectedAction}`);
      alert(`Acción "${selectedAction}" confirmada para el evento.`);
    } else {
      alert('Por favor, selecciona una acción primero.');
    }
  };

  if (!event) {
    return null; 
  }

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Detalles del Evento Sísmico</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-700">Información Principal</h3>
            <p className="mb-2">
              <span className="font-medium">Fecha y Hora:</span>{' '}
              {new Date(event.fechaHoraOcurrencia).toLocaleString()}
            </p>
            <p className="mb-2">
              <span className="font-medium">Magnitud:</span> {event.valorMagnitud}
            </p>
            <p className="mb-2">
              <span className="font-medium">Epicentro:</span> ({event.latitudEpicentro},{' '}
              {event.longitudEpicentro})
            </p>
            <p className="mb-2">
              <span className="font-medium">Hipocentro:</span> ({event.latitudHipocentro},{' '}
              {event.longitudHipocentro})
            </p>
            <p className="mb-2">
              <span className="font-medium">Alcance:</span> {event.alcanceSismo}
            </p>
            <p className="mb-2">
              <span className="font-medium">Clasificación:</span> {event.clasificacionSismo}
            </p>
            <p className="mb-2">
              <span className="font-medium">Origen de Generación:</span> {event.origenDeGeneracion}
            </p>
          </div>

          <div className="flex justify-center items-center">
            <img src={IMG_GENERICA} alt="Generic Seismic Event" className="rounded-lg shadow-md max-w-full h-auto" />
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-gray-700">Series Temporales por Estación</h3>
          {event.serieTemporal && event.serieTemporal.length > 0 ? (
            event.serieTemporal.map((serie, serieIndex) => (
              <div key={serieIndex} className="bg-gray-50 p-4 rounded-md shadow-sm mb-4">
                <h4 className="font-medium text-lg mb-2 text-indigo-700">
                  Estación: {serie.estacionSismologica}
                </h4>
                {serie.muestras && serie.muestras.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm bg-white border border-gray-200">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="py-2 px-4 border-b text-left">Instante</th>
                          <th className="py-2 px-4 border-b text-left">Velocidad Onda (m/s)</th>
                          <th className="py-2 px-4 border-b text-left">Frecuencia Onda (Hz)</th>
                          <th className="py-2 px-4 border-b text-left">Longitud Onda (m)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {serie.muestras.map((muestra, muestraIndex) => (
                          <tr key={muestraIndex} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-2 px-4">
                              {new Date(muestra.instanteTiempo).toLocaleTimeString()}
                            </td>
                            <td className="py-2 px-4">{muestra.velocidadOnda}</td>
                            <td className="py-2 px-4">{muestra.frecuenciaOnda}</td>
                            <td className="py-2 px-4">{muestra.longitudOnda}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-gray-500">No hay muestras para esta estación.</p>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500">No hay series temporales asociadas a este evento.</p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t pt-4 mt-6">
          <div className="flex gap-4">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md">
              Visualizar Mapa
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg shadow-md">
              Modificar Datos
            </button>
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="event-action" className="font-medium text-gray-700">
              Acción:
            </label>
            <select
              id="event-action"
              value={selectedAction}
              onChange={handleActionChange}
              className="block w-full sm:w-auto p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Seleccionar una acción</option>
              <option value="Confirmar evento">Confirmar evento</option>
              <option value="Rechazar evento">Rechazar evento</option>
              <option value="Solicitar revisión a experto">Solicitar revisión a experto</option>
            </select>
            <button
              onClick={handleConfirmAction}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg shadow-md"
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventoSismicoCard;