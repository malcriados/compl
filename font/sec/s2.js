function fun() {
  let inputUser = document.getElementById("username").value.trim();
  let inputPswd = document.getElementById("validate").value;
  let mensaje = document.getElementById("mensaje");

  // Lista de 25 usuarios y contraseñas
  const usuarios = {
    "segundo": "lidersegundo",
    "3": "4",
    "user03": "pass03",
    "user04": "pass04",
    "user05": "pass05",
    "user06": "pass06",
    "user07": "pass07",
    "user08": "pass08",
    "user09": "pass09",
    "user10": "pass10",
    "user11": "pass11",
    "user12": "pass12",
    "user13": "pass13",
    "user14": "pass14",
    "user15": "pass15",
    "user16": "pass16",
    "user17": "pass17",
    "user18": "pass18",
    "user19": "pass19",
    "user20": "pass20",
    "user21": "pass21",
    "user22": "pass22",
    "user23": "pass23",
    "user24": "pass24",
    "user25": "pass25"
  };

  if (usuarios.hasOwnProperty(inputUser)) {
    if (usuarios[inputUser] === inputPswd) {
      mensaje.textContent = "";
      localStorage.setItem("accesoValido", "true");
      window.location.href = "2SECUNDARIA.html";
    } else {
      mensaje.textContent = "Contraseña incorrecta";
    }
  } else {
    mensaje.textContent = "Usuario incorrecto";
  }
}