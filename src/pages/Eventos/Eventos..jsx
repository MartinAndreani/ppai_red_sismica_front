import ListaEventosSismicos from './components/EventosSismicos/ListaEventosSismicos';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';

const Eventos = () => {
    // DATOS GENNERICOS

    const seismicData = [
        {
            fechaHoraOcurrencia: '2025-05-27T10:30:00Z',
            valorMagnitud: 4.5,
            latitudHipocentro: -33.5,
            longitudHipocentro: -71.0,
            latitudEpicentro: -33.4,
            longitudEpicentro: -70.8,
            alcanceSismo: 'Local',
            clasificacionSismo: 'Tectónico',
            origenDeGeneracion: 'Natural',
            serieTemporal: [
                {
                    estacionSismologica: 'Estación A',
                    muestras: [
                        { instanteTiempo: '2025-05-27T10:30:00Z', velocidadOnda: 3000.0, frecuenciaOnda: 50.0, longitudOnda: 60.0 },
                        { instanteTiempo: '2025-05-27T10:30:10Z', velocidadOnda: 3100.0, frecuenciaOnda: 52.0, longitudOnda: 58.0 },
                    ],
                },
                {
                    estacionSismologica: 'Estación B',
                    muestras: [
                        { instanteTiempo: '2025-05-27T10:30:05Z', velocidadOnda: 2800.0, frecuenciaOnda: 48.0, longitudOnda: 55.0 },
                    ],
                },
            ],
            cambiosEstado: [
                { fechaCambio: '2025-05-27T10:35:00Z', nuevoEstado: 'Detectado' },
                { fechaCambio: '2025-05-27T10:40:00Z', nuevoEstado: 'En Análisis' },
            ],
        },
        {
            fechaHoraOcurrencia: '2025-05-26T20:15:00Z',
            valorMagnitud: 6.2,
            latitudHipocentro: -30.0,
            longitudHipocentro: -72.0,
            latitudEpicentro: -29.8,
            longitudEpicentro: -71.5,
            alcanceSismo: 'Regional',
            clasificacionSismo: 'Volcánico',
            origenDeGeneracion: 'Natural',
            serieTemporal: [],
            cambiosEstado: [],
        },
        {
            fechaHoraOcurrencia: '2025-05-25T05:00:00Z',
            valorMagnitud: 3.1,
            latitudHipocentro: -35.2,
            longitudHipocentro: -70.5,
            latitudEpicentro: -35.1,
            longitudEpicentro: -70.4,
            alcanceSismo: 'Local',
            clasificacionSismo: 'Tectónico',
            origenDeGeneracion: 'Antropogénico',
            serieTemporal: [
                {
                    estacionSismologica: 'Estación C',
                    muestras: [
                        { instanteTiempo: '2025-05-25T05:00:00Z', velocidadOnda: 2500.0, frecuenciaOnda: 40.0, longitudOnda: 62.0 },
                    ],
                },
            ],
            cambiosEstado: [],
        },
    ];
    return (
        <BrowserRouter>
            <div className="App">
                <Link to="/eventos">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md">
                        Ir de compras
                    </button>
                </Link>

                <Routes>
                    <Route path="/eventos" element={<ListaEventosSismicos events={seismicData} />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default Eventos;