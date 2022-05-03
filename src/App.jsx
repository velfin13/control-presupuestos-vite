import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isPresupuestoValid, setIsPresupuestoValid] = useState(false);

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isPresupuestoValid={isPresupuestoValid}
        setIsPresupuestoValid={setIsPresupuestoValid}
      />
    </div>
  );
}

export default App;
