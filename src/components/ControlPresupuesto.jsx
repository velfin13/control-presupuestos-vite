import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Swal from "sweetalert2";
import { formatearCantidadToMoneda } from "../helpers";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = (props) => {
  const {
    presupuesto,
    gastos,
    setGastos,
    setPresupuesto,
    setIsPresupuestoValid,
  } = props;
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [procentaje, setProcentaje] = useState(0);

  const handleReset = () => {
    Swal.fire({
      title: "Estas seguro?",
      text: "Una vez reiniciado se elimina todo!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "reiniciar",
      cancelButtonText: "cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        setGastos([]);
        setPresupuesto(0);
        setIsPresupuestoValid(false);
        Swal.fire(
          "App Reiniciada!",
          "Reiniciado sastifactoriamente.",
          "success"
        );
      }
    });
  };

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
        <CircularProgressbar
          styles={buildStyles({
            pathColor: procentaje > 100 ? "#dc2626" : "#3b82f6",
            trailColor: "#f5f5f5",
            textColor: procentaje > 100 ? "#dc2626" : "#3b82f6",
          })}
          text={`${procentaje} % Gastado`}
          value={procentaje}
        />
      </div>

      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleReset}>
          Reiniciar App
        </button>
        <p>
          Presupuesto: <span>{formatearCantidadToMoneda(presupuesto)}</span>
        </p>

        <p className={`${disponible < 0 ? "negativo" : ""}`}>
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
