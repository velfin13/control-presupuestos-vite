import { useEffect, useState } from "react";
import { formatearCantidadToMoneda } from "../helpers";

const ControlPresupuesto = ({ presupuesto, gastos }) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.gasto + total,
      0
    );
    const totalDisponible = presupuesto - totalGastado;

    setDisponible(totalDisponible);
    setGastado(totalGastado);
  }, [gastos]);

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>grafica</p>
      </div>

      <div className="contenido-presupuesto">
        <p>
          Presupuesto: <span>{formatearCantidadToMoneda(presupuesto)}</span>
        </p>

        <p>
          Disponible: <span>{formatearCantidadToMoneda(disponible)}</span>
        </p>

        <p>
          Gastado: <span>{formatearCantidadToMoneda(gastado)}</span>
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
