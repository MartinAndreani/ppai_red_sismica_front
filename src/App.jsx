
import Eventos from "./pages/Eventos/Eventos..jsx";

function App() {



  return (
      <div>
        <Eventos/>
      </div>
  );
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