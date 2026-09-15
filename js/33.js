// API promises

const boton = document.querySelector("#boton");
boton.addEventListener("click", function () {
  Notification.requestPermission().then((resultado) =>
    console.log(`El resultado e ${resultado}`),
  );
});

if (Notification.permission == "granted") {
  new Notification("esta es una notificacion", {
    icon: "img/likedin-portada.jpg",
    body: "Codigo con Juan",
  });
}
