const pages = [
  [
    { title: "Actividad 05", content: "Capturar la información detallada sobre EL PROCESADOR (CPU) del equipo utilizando el ADMINISTRADOR DE TAREAS de Windows. Posteriormente, pegar dicha información en el cuaderno. <br><br> <b>Fecha de Entrega:</b> 14-05-25"}
  ],
  [
    { title: "Actividad 04", content: "Capturar la información detallada sobre la TARJETA GRÁFICA (GPU) del equipo utilizando el ADMINISTRADOR DE TAREAS de Windows. Posteriormente, pegar dicha información en el cuaderno. <br><br> <b>Fecha de Entrega:</b> 14-05-25"}
  ],
  [
    { title: "Actividad 03", content: "Ejecutar el comando DXDIAG desde el Símbolo del sistema de Windows (CMD) para obtener un reporte detallado de las características del equipo. Capturar la información generada y pegar en el cuaderno correspondiente. <br><br> <b>Fecha de Entrega:</b> 30-04-25" },
  ],
  [
    { title: "Actividad 02", content: "Capturar la información detallada sobre la MEMORIA RAM y el almacenamiento (DISCO) del equipo utilizando el ADMINISTRADOR DE TAREAS de Windows. Posteriormente, pegar dicha información en el cuaderno. <br><br> <b>Fecha de Entrega:</b> 23-04-25"}
  ],
  [
    { title: "Actividad 01", content: "Elaborar un resumen o un organizador gráfico correspondiente a cada una de las fichas pendientes en el cuaderno, con el fin de complementar la información faltante de manera clara y estructurada. <br><br> <b>Fecha de Entrega:</b> SIGUIENTE SESIÓN" },
  ],
];

let currentPage = 0;

function renderPosts() {
  const postsContainer = document.getElementById('posts');
  postsContainer.innerHTML = '';
  pages[currentPage].forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    postDiv.innerHTML = `<h2 id="tit">${post.title}</h2><p id="cont">${post.content}</p>`;
    postsContainer.appendChild(postDiv);
  });
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    renderPosts();
  }
}

function previousPage() {
  if (currentPage > 0) {
    currentPage--;
    renderPosts();
  }
}

function goBack() {
  window.history.back();
}

// Inicializar con la primera página
renderPosts();