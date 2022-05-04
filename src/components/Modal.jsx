import React, { useState } from "react";
import cerrarSVG from "../img/cerrar.svg";

const Modal = ({ setModal, animarModal, setAnimarModal }) => {
  const handleCerrarModal = () => {
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={cerrarSVG} alt="cerrar" onClick={handleCerrarModal} />
      </div>

      <form className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
        <legend>Nuevo Gasto</legend>

        <div className="campo">
          <label htmlFor="nombre">Nombre del Gasto</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Agrega el nombre del gasto"
          />
        </div>

        <div className="campo">
          <label htmlFor="gasto">Gasto</label>
          <input
            type="number"
            name="gasto"
            id="gasto"
            placeholder="Agrega valor del gasto"
          />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select name="categoria" id="categoria">
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="gastos-varios">Gastos Varios</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
            <option value="oscios">Oscios</option>
          </select>
        </div>

        <input type="submit" value="Agregar" />
      </form>
    </div>
  );
};

export default Modal;
