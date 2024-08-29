const getTime = () => {
  const fechaActual = new Date();

  // Obtener las partes de la fecha
  const mes = (fechaActual.getMonth() + 1).toString().padStart(2, "0"); // Se suma 1 porque los meses comienzan desde 0
  const dia = fechaActual.getDate().toString().padStart(2, "0");
  const anio = fechaActual.getFullYear().toString();
  const hora = fechaActual.getHours().toString().padStart(2, "0");
  const minutos = fechaActual.getMinutes().toString().padStart(2, "0");
  const segundos = fechaActual.getSeconds().toString().padStart(2, "0");
  const milisegundos = fechaActual
    .getMilliseconds()
    .toString()
    .padStart(3, "0");

  // Formatear la fecha en el orden deseado
  const fechaFormateada =
    dia + mes + anio + hora + minutos + segundos + milisegundos;
  const fechaCr = enCrypt(fechaFormateada);
  //if you what decrypt te date this is the function deCrypt(fechaCr)
  return fechaCr;
};
const enCrypt = (numero) => {
  const numeroStr = numero.toString();
  const digitosArray = numeroStr.split("");
  // Iterar sobre los dígitos en posición impar y avanzar a la posición par
  for (let i = 0; i < digitosArray.length - 1; i += 2) {
    const temp = digitosArray[i];
    digitosArray[i] = digitosArray[i + 1];
    digitosArray[i + 1] = temp;
  }
  // Unir el array en una cadena de texto y retornarla
  return digitosArray.join("");
};
const getId = () => {
  // Obtener la URL actual
  const url = window.location.href;

  // Extraer la parte después de "/edit/"
  const number = url.split("/edit/")[1];

  // Mostrar el número extraído
  return number;
};

export { getTime, getId };
