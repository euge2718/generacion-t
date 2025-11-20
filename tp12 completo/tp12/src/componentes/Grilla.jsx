import React from "react";
import Usuario from "./Usuario";

export default function Grilla({ usuarios = [] }) {
  return (
    <section className="grilla">
      <h3>Listado de usuarios</h3>
      <div className="cards">
        {usuarios.length === 0 ? (
          <p>No hay usuarios cargados aún.</p>
        ) : (
          usuarios.map((u) => <Usuario key={u.id} usuario={u} />)
        )}
      </div>
    </section>
  );
}
