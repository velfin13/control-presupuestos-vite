import React from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import { formatearFecha } from "../helpers";

import ahorroSVG from "../img/icono_ahorro.svg";
import comidaSVG from "../img/icono_comida.svg";
import gastosSVG from "../img/icono_gastos.svg";
import ocioSVG from "../img/icono_ocio.svg";
import saludSVG from "../img/icono_salud.svg";
import suscripcionesSVG from "../img/icono_suscripciones.svg";

import "react-swipeable-list/dist/styles.css";

const diccionarioIconos = {
  ahorro: ahorroSVG,
  comida: comidaSVG,
  gastosVarios: gastosSVG,
  salud: saludSVG,
  suscripciones: suscripcionesSVG,
  oscios: ocioSVG,
};

const Gasto = ({ gasto, setGastoEditar ,eliminarGasto}) => {
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(gasto)}>Editar</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => eliminarGasto(gasto.id)}>Eliminar</SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={diccionarioIconos[gasto.categoria]} alt="icono" />
            <div className="descripcion-gasto">
              <p className="categoria">{gasto.categoria}</p>
              <p className="nombre-gasto">{gasto.nombre}</p>
              <p className="fecha-gasto">
                Agregado el: <span>{formatearFecha(gasto.date)}</span>
              </p>
            </div>
          </div>

          <p className="cantidad-gasto">$ {gasto.gasto}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Gasto;
