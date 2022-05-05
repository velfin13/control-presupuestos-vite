import { useEffect } from "react";

const Filtro = ({ filtro, setFiltro }) => {
  return (
    <div className="filtros contenedor sombra">
      <form>
        <div className="campo">
          <label htmlFor="filtro">Filtrar Gastos</label>
          <select name="filtro" id="filtro" value={filtro} onChange={e=>setFiltro(e.target.value)}>
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="gastosVarios">Gastos Varios</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
            <option value="oscios">Oscios</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filtro;
