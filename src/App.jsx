import { Routes, Route } from 'react-router-dom';
import NavBar from '../src/components/NavBar/NavBar.jsx';
import Inicio from './pages/Inicio/Inicio.jsx';
import RegistrarResultado from './pages/RegistrarResultado/RegistrarResultado';

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/registrar" element={<RegistrarResultado />} />
            </Routes>
        </>
    );
}

export default App;