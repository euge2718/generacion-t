import React from "react";
import "./App.css";
import Grilla from "./componentes/Grilla";
import { usuarios } from "./data/usuarios"; // <-- nuevo import

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h2>TP12 — Gestión y listado de usuarios</h2>
        <p className="subtitle">Adaptación realizada por Eidann Gutierrez</p>
      </header>

      <main>
        <Grilla usuarios={usuarios} /> {/* <-- pasar datos */}
      </main>

      <footer className="app-footer">
        <small>Adaptado por Eidann Gutierrez</small>
      </footer>
    </div>
  );
}

export default App;

