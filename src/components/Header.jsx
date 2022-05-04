import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";

const Header = (props) => {
  const {
    presupuesto,
    setPresupuesto,
    isPresupuestoValid,
    setIsPresupuestoValid,
    gastos,
  } = props;

  return (
    <header>
      <h1>Planificador de Gastos</h1>
      {isPresupuestoValid ? (
        <ControlPresupuesto gastos={gastos} presupuesto={presupuesto} />
      ) : (
        <NuevoPresupuesto
          setIsPresupuestoValid={setIsPresupuestoValid}
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
        />
      )}
    </header>
  );
};

export default Header;
