import { useEffect, useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ListadoGastos from "./components/ListadoGastos";
import { generarID } from "./helpers";

import nuevoGastoSVG from "./img/nuevo-gasto.svg";

const App = () => {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isPresupuestoValid, setIsPresupuestoValid] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([]);
  const [gastoEditar, setGastoEditar] = useState({});

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimarModal(true);
      }, 300);
    }
  }, [gastoEditar]);

  const handleNuevoGasto = () => {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 300);
  };

  const guardarGasto = (gasto) => {
    gasto.id = generarID();
    gasto.date = Date.now();
    setGastos([...gastos, gasto]);

    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    <div className={modal ? "fijar" : null}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isPresupuestoValid={isPresupuestoValid}
        setIsPresupuestoValid={setIsPresupuestoValid}
      />

      {isPresupuestoValid && (
        <>
          <main>
            <ListadoGastos setGastoEditar={setGastoEditar} gastos={gastos} />
          </main>
          <div className="nuevo-gasto">
            <img src={nuevoGastoSVG} alt="nuevo" onClick={handleNuevoGasto} />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
        />
      )}
    </div>
  );
};

export default App;
