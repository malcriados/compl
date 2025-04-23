const pages = [
  [
    { title: "Actividad 1", content: "Actividad 01" },
    { title: "Actividad 2", content: "Actividad 02" }
  ],
  [
    { title: "Actividad 3", content: "Actividad 03" },
    { title: "Actividad 4", content: "Actividad 04" }
  ]
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