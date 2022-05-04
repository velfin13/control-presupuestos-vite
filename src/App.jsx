import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import nuevoGastoSVG from "./img/nuevo-gasto.svg";

const App = () => {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isPresupuestoValid, setIsPresupuestoValid] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const handleNuevoGasto = () => {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 300);
  };

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isPresupuestoValid={isPresupuestoValid}
        setIsPresupuestoValid={setIsPresupuestoValid}
      />

      {isPresupuestoValid && (
        <div className="nuevo-gasto">
          <img src={nuevoGastoSVG} alt="nuevo" onClick={handleNuevoGasto} />
        </div>
      )}

      {modal && <Modal setModal={setModal} animarModal={animarModal} setAnimarModal={setAnimarModal}/>}
    </div>
  );
};

export default App;
