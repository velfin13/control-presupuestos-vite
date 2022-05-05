import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ListadoGastos from "./components/ListadoGastos";
import { generarID } from "./helpers";

import nuevoGastoSVG from "./img/nuevo-gasto.svg";

const App = () => {
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem("presupuesto")) ?? 0
  );
  const [isPresupuestoValid, setIsPresupuestoValid] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState(
    localStorage.getItem("gastos")
      ? JSON.parse(localStorage.getItem("gastos"))
      : []
  );
  const [gastoEditar, setGastoEditar] = useState({});

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimarModal(true);
      }, 300);
    }
  }, [gastoEditar]);

  useEffect(() => {
    localStorage.setItem("presupuesto", presupuesto ?? 0);
  }, [presupuesto]);

  useEffect(() => {
    localStorage.setItem("gastos", JSON.stringify(gastos) ?? []);
  }, [gastos]);

  useEffect(() => {
    const presupuestoLS = localStorage.getItem("presupuesto") ?? 0;
    if (presupuestoLS > 0) {
      setIsPresupuestoValid(true);
    }
  }, []);

  const handleNuevoGasto = () => {
    setModal(true);
    setGastoEditar({});

    setTimeout(() => {
      setAnimarModal(true);
    }, 300);
  };

  const guardarGasto = (gasto) => {
    if (gasto.id) {
      /* Editar gasto */
      const gastosActualizados = gastos.map((gastoState) =>
        gastoState.id === gasto.id ? gasto : gastoState
      );
      setGastos(gastosActualizados);
    } else {
      /* Crear gasto */
      gasto.id = generarID();
      gasto.date = Date.now();
      setGastos([...gastos, gasto]);
    }

    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const eliminarGasto = (id) => {
    Swal.fire({
      title: "Estas seguro?",
      text: "Una vez eliminado no se podra recuperar!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "eliminar!",
      cancelButtonText: "cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const gastosActualizados = gastos.filter(
          (gastoState) => gastoState.id !== id
        );
        setGastos(gastosActualizados);
        Swal.fire("Eliminado!", "Eliminado sastifactoriamente.", "success");
      }
    });
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
            <ListadoGastos
              eliminarGasto={eliminarGasto}
              setGastoEditar={setGastoEditar}
              gastos={gastos}
            />
          </main>
          <div className="nuevo-gasto">
            <img src={nuevoGastoSVG} alt="nuevo" onClick={handleNuevoGasto} />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setGastoEditar={setGastoEditar}
          gastoEditar={gastoEditar}
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
