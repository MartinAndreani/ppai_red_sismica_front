import { Routes, Route } from 'react-router-dom';
import NavBar from '../src/components/NavBar/NavBar.jsx';
import Inicio from './pages/Inicio/Inicio.jsx';
import ListaEventosSismicos from './pages/Eventos/EventosSismicosNoRevisados/ListaEventosSismicos.jsx';
import EventosSismicos from './pages/Eventos/EventosSismicos/EventosSismicos.jsx';
import {seismicData} from "./commons/Datos.js";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/eventos" element={<ListaEventosSismicos/>} />
                <Route path="/eventos-todos" element={<EventosSismicos/>}/>
            </Routes>
        </>
    );
}

export default App;