import { useEffect, useState } from "react";
import api from "./api";

function App() {
    const [mensaje, setMensaje] = useState("");

    useEffect(() => {
        api.get("/api/hola")
            .then((res) => {
                setMensaje(res.data.mensaje); // Guarda el mensaje recibido
            })
            .catch((err) => {
                console.error("Error al llamar a la API:", err);
                setMensaje("Error al conectar con el backend.");
            });
    }, []);

    return (
        <div style={{ padding: "2rem", fontFamily: "Arial" }}>
            <h1>Frontend React + FastAPI</h1>
            <p>Mensaje desde el backend:</p>
            <strong>{mensaje}</strong>
        </div>
    );
}

export default App;
