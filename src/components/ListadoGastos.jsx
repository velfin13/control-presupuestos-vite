import React from "react";
import Gasto from "./Gasto";

const ListadoGastos = (props) => {
  const { gastos, setGastoEditar, eliminarGasto, gastosFiltrados, filtro } =
    props;
  return (
    <div className="listado-gastos contenedor">
      {filtro ? (
        <>
          <h2>
            {gastosFiltrados.length
              ? `Gastos filtrados por: ${filtro}`
              : "No hay Datos"}
          </h2>
          {gastosFiltrados.map((gasto) => (
            <Gasto
              eliminarGasto={eliminarGasto}
              key={gasto.id}
              setGastoEditar={setGastoEditar}
              gasto={gasto}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{gastos.length ? "Gastos" : "No hay gastos"}</h2>
          {gastos.map((gasto) => (
            <Gasto
              eliminarGasto={eliminarGasto}
              key={gasto.id}
              setGastoEditar={setGastoEditar}
              gasto={gasto}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ListadoGastos;
