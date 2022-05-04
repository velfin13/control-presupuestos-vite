import React from "react";
import { formatearFecha } from "../helpers";

import ahorroSVG from "../img/icono_ahorro.svg";
import casaSVG from "../img/icono_casa.svg";
import comidaSVG from "../img/icono_comida.svg";
import gastosSVG from "../img/icono_gastos.svg";
import ocioSVG from "../img/icono_ocio.svg";
import saludSVG from "../img/icono_salud.svg";
import suscripcionesSVG from "../img/icono_suscripciones.svg";

const diccionarioIconos = {
  ahorro: ahorroSVG,
  comida: comidaSVG,
  gastosVarios: gastosSVG,
  salud: saludSVG,
  suscripciones: suscripcionesSVG,
  oscios: ocioSVG,
};

const Gasto = ({ gasto }) => {
  return (
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
  );
};

export default Gasto;
