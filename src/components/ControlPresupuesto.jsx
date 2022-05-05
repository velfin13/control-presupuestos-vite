import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { formatearCantidadToMoneda } from "../helpers";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({ presupuesto, gastos }) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [procentaje, setProcentaje] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.gasto + total,
      0
    );
    const totalDisponible = presupuesto - totalGastado;

    //calcular porcentaje gastado
    const nuevoPorcentaje = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(2);
    setProcentaje(nuevoPorcentaje);

    setDisponible(totalDisponible);
    setGastado(totalGastado);
  }, [gastos]);

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar styles={buildStyles({pathColor:"#3b83d6",trailColor:"#f5f5f5"})} text={`${procentaje} % Gastado`} value={procentaje} />
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
