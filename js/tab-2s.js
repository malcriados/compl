const data = [
  { nombre: "03 - DISPOSITIVOS DE ALMACENAMIENTO", fecha: "16/04", url:"www.google.com" },
  { nombre: "02 - LA MEMORIA RAM", fecha: "02/04", url:"www.google.com" },
  { nombre: "01 - EL ORDENADOR Y SUS COMPONENTES", fecha: "26/03", url:"www.google.com" },
];

const rowsPerPage = 4;
let currentPage = 1;
let filteredData = [...data];

function renderTable() {
  const tableBody = document.querySelector("#fileTable tbody");
  tableBody.innerHTML = "";

  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const pageData = filteredData.slice(start, end);

  pageData.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.nombre}</td>
      <td>${item.fecha}</td>
      <td><a class="btn" href=${item.url} class="btn descarga">Descargar</a></td>
    `;
    tableBody.appendChild(row);
  });

  document.getElementById("prevBtn").disabled = currentPage === 1;
  document.getElementById("nextBtn").disabled = end >= filteredData.length;
}

function changePage(direction) {
  currentPage += direction;
  renderTable();
}

function descargarTexto(texto) {
  const blob = new Blob([texto], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = texto.replace(/\s/g, "_") + ".txt";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  filteredData = data.filter(item =>
    item.nombre.toLowerCase().includes(query)
  );
  currentPage = 1;
  renderTable();
});

renderTable();