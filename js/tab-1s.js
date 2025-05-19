const data = [
  { nombre: "07 - EL PROCESADOR", fecha: "18/05", url:"https://drive.google.com/uc?id=1YId2C1zrkS1z2AB4OpKdOf29Qgv31SrG&export=download" },
  { nombre: "06 - FUENTE DE PODER", fecha: "05/05", url:"https://drive.google.com/uc?id=1SXxN0IQGCXrwdnABx62tUXFHgfq8veb9&export=download" },
  { nombre: "05 - TARJETA GRÁFICA", fecha: "05/05", url:"https://drive.google.com/uc?id=1YSDupxdSyHXE0jilXiSL7X-9mbNcMUgH&export=download" },
  { nombre: "04 - LA PLACA BASE", fecha: "21/04", url:"https://drive.google.com/uc?id=1fsHb8RL82drf37lF67R01qDYkY8EZWh2&export=download" },
  { nombre: "03 - DISPOSITIVOS DE ALMACENAMIENTO", fecha: "14/04", url:"https://drive.google.com/uc?id=1wNN0boNgA6_9MRCkDGu4Lq4y3IA7OJt7&export=download" },
  { nombre: "02 - LA MEMORIA RAM", fecha: "14/04", url:"https://drive.google.com/uc?id=1OJunvj40oLdjF51ozHPSQx-uEUKiZ9WG&export=download" },
  { nombre: "01 - EL ORDENADOR Y SUS COMPONENTES", fecha: "31/03", url:"https://drive.google.com/uc?id=1Ko8brVDeVOGUpGW11uu1I1VeqFIEKDcL&export=download" },
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