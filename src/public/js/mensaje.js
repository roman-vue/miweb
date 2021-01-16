document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    let telefono = "573022370040";
  
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let email = document.querySelector("#email").value;
    let mensaje = document.querySelector("#mensaje").value;
    let resp = document.querySelector("#respuesta");
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          *_Roman Calderin-Web_*%0A
          *Reservas*%0A%0A
          *¿Cuál es tu nombre?*%0A
          ${nombre} ${apellido}  %0A
          *Correo Electronico*%0A
          ${email}%0A
          *Tu Mensaje*%0A
          ${mensaje}%0A
          `;
  
    if (nombre === "" || apellido === "" || email === "") {
      resp.classList.add("fail");
      resp.innerHTML = `Faltan algunos datos, ${nombre}`;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Se ha enviado tu mensaje, ${nombre}`;
  
    window.open(url);
  });