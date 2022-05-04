const ControlPresupuesto = ({ presupuesto }) => {

  const formatearCantidad = (cantidad = 0) => {
    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>grafica</p>
      </div>

      <div className="contenido-presupuesto">
        <p>
          Presupuesto: <span>{formatearCantidad(presupuesto)}</span>
        </p>

        <p>
          Disponible: <span>{0}</span>
        </p>

        <p>
          Gastado: <span>{0}</span>
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
