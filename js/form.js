document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "543543310308";

  let cliente = document.querySelector("#cliente").value;
  let dirección = document.querySelector("#dirección").value;
  let piso = document.querySelector("#piso").value;
  let celular = document.querySelector("#celular").value;
  let email = document.querySelector("#email").value;
  let infoadicional = document.querySelector("#infoadicional").value;
  let fecha = document.querySelector("#fecha").value;
  let hora = document.querySelector("#hora").value;
  let localidad = document.querySelector("#localidad").value;
  let cliente1 = document.querySelector("#cliente1").value;
  let dirección1 = document.querySelector("#dirección1").value;
  let piso1 = document.querySelector("#piso1").value;
  let celular1 = document.querySelector("#celular1").value;
  let email1 = document.querySelector("#email1").value;
  let infoadicional1 = document.querySelector("#infoadicional1").value;
  let localidad1 = document.querySelector("#localidad1").value;
  let servicio = document.querySelector("#servicio").value;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
  *_FLASH PACK_*%0A
  *Low Cost*%0A%0A
  *Origen del Envío*%0A%0A
  *Nombre y Apellido / Empresa*%0A
    ${cliente}%0A
    *Dirección*%0A
    ${dirección}%0A
    *Piso - Dpto. / Manzana - Lote*%0A
    ${piso}%0A
    *Telefono Celular*%0A
    ${celular}%0A
    *E-mail*%0A
    ${email}%0A
    *Info Adicional / Entre Calles*%0A
    ${infoadicional}%0A
		*Indica la fecha de tu reserva*%0A
		${fecha}%0A
		*Indica la hora de tu reserva*%0A
		${hora}%0A
		*Localidad de Origen*%0A
    ${localidad}%0A%0A

  *Destino del Envío*%0A%0A
    *Nombre y Apellido / Empresa*%0A
    ${cliente1}%0A
    *Dirección*%0A
    ${dirección1}%0A
    *Piso - Dpto. / Manzana - Lote*%0A
    ${piso1}%0A
    *Telefono Celular*%0A
    ${celular1}%0A
    *E-mail*%0A
    ${email1}%0A
    *Info Adicional / Entre Calles*%0A
    ${infoadicional1}%0A
    *Localidad de Destino*%0A
    ${localidad1}%0A
		*¿Cuál es el radio en Kms?*%0A
		${servicio}`;

  if (cliente === "" || fecha === "" || hora === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;

  window.open(url);
});
