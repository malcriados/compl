if (localStorage.getItem("accesoValido") !== "true") {
    // Si no está validado, redirige de nuevo a la página de login
    window.location.href = "loginps.html"; // Cambia por la página donde está tu formulario
  } else {
    // Opcional: limpiar el acceso para no mantenerlo siempre activo
    localStorage.removeItem("accesoValido");
  }