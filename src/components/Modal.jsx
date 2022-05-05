import React, { useEffect, useState } from "react";
import Mensaje from "../components/Mensaje";
import cerrarSVG from "../img/cerrar.svg";

const Modal = (props) => {
  const { setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar } =
    props;

  const [nombre, setNombre] = useState("");
  const [gasto, setGasto] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setNombre(gastoEditar.nombre);
      setGasto(gastoEditar.gasto);
      setCategoria(gastoEditar.categoria);
    }
  }, []);

  const handleCerrarModal = () => {
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, gasto, categoria].includes("") || gasto < 0) {
      setMensaje("todos los campos son obligatorios o el gasto es invalido");

      setTimeout(() => {
        setMensaje("");
      }, 2500);

      return;
    }
    setMensaje("");

    guardarGasto({ nombre, gasto, categoria });
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={cerrarSVG} alt="cerrar" onClick={handleCerrarModal} />
      </div>

      <form
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
        onSubmit={handleSubmit}
      >
        <legend>Nuevo Gasto</legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

        <div className="campo">
          <label htmlFor="nombre">Nombre del Gasto</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Agrega el nombre del gasto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="gasto">Gasto</label>
          <input
            type="number"
            name="gasto"
            id="gasto"
            placeholder="Agrega valor del gasto"
            value={gasto}
            onChange={(e) => setGasto(Number(e.target.value))}
          />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select
            name="categoria"
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="gastosVarios">Gastos Varios</option>
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
