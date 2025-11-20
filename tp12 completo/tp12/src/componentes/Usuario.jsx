import React from "react";

export default function Usuario({ usuario }) {
  if (!usuario) return null;
  const { id, nombre, puntaje } = usuario;
  return (
    <article className="usuario-card">
      <h4 className="usuario-nombre">{nombre}</h4>
      <p className="usuario-info">Puntaje: {puntaje}</p>
      <p className="usuario-otro">ID: {id}</p>
    </article>
  );
}
