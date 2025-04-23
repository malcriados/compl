const data = [
  { nombre: "04 - LA PLACA BASE", fecha: "23/04", url:"https://drive.google.com/uc?id=1wWWLBLWKxSERPz9PZ6YQheKM3hjEirXs&export=download" },
  { nombre: "03 - DISPOSITIVOS DE ALMACENAMIENTO", fecha: "16/04", url:"https://drive.google.com/uc?id=1_yXCba5hV2DExsgmxrdAx0HddrFw3gz_&export=download" },
  { nombre: "02 - LA MEMORIA RAM", fecha: "02/04", url:"https://drive.google.com/uc?id=15TsMH7cHZ2Xh_WY-aY8hFAWOXtvsI3Rn&export=download" },
  { nombre: "01 - EL ORDENADOR Y SUS COMPONENTES", fecha: "26/03", url:"https://drive.google.com/uc?id=1y7URhW6dx16D3DXnIcSECgZZHXOVae_9&export=download" },
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