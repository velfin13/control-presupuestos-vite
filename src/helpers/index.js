export const generarID = () => {
  const randon = Math.random().toString(36).substr(2);
  const fecha = Date.now().toString(36);
  return randon + fecha;
};

export const formatearFecha = (fecha) => {
  const fechaNueva = new Date(fecha);
  const opciones = { year: "numeric", month: "long", day: "2-digit" };

  return fechaNueva.toLocaleDateString("es-ES", opciones);
};

export const formatearCantidadToMoneda = (cantidad = 0) => {
  return cantidad.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};