const obtenerReloj = () => {
  const fecha = new Date();
  const semana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const detalleFecha = document.querySelector("h2");
  detalleFecha.textContent = `${semana[fecha.getDay()]} ${fecha.getDate()} de ${
    meses[fecha.getMonth()]
  } del ${fecha.getFullYear()}`;

  let horas = fecha.getHours();
  let minutos = fecha.getMinutes();
  let segundos = fecha.getSeconds();

  let horario = "AM";
  if (horas >= 12) {
    horario = "PM";
  }

  if (fecha.getHours() < 10) {
    horas = "0" + horas;
  }
  if (fecha.getMinutes() < 10) {
    minutos = "0" + minutos;
  }
  if (fecha.getSeconds() < 10) {
    segundos = "0" + segundos;
  }

  const detalleHora = document.querySelector(".fs-1");
  detalleHora.textContent = `${horas} : ${minutos} : ${segundos} (${horario})`;
};

setInterval(obtenerReloj, 1000);
