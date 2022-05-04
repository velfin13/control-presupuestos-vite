import React, { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = (props) => {
  const { presupuesto, setPresupuesto, setIsPresupuestoValid } = props;
  const [mensajeError, setMensajeError] = useState("");

  const handlePresupuesto = (e) => {
    e.preventDefault();

    if (!presupuesto || presupuesto < 0) {
      setMensajeError("valor invalido");
      setIsPresupuestoValid(false);
      return;
    }
    setIsPresupuestoValid(true);
    setMensajeError("");
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario" onSubmit={handlePresupuesto}>
        <div className="campo">
          <label htmlFor="presupuesto">Definir Presupuesto</label>
          <input
            type="number"
            className="nuevo-presupuesto"
            placeholder="Agrega tu presupuesto"
            id="presupuesto"
            value={presupuesto}
            name="presupuesto"
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
        </div>

        <input type="submit" value="Agregar" />
        {mensajeError && <Mensaje tipo="error">{mensajeError}</Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
