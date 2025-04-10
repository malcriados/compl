const formulario = document.getElementById('formulario');
const registro = document.getElementById ('registro');
const exito = document.getElementById ('exito');

formulario.addEventListener ('submit', async(e) => {
    e.preventDefault();

    await fetch('https://sheet.best/api/sheets/05ffed0e-a1ad-4420-b778-dc744868d58c', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            "Nombres": formulario.nombres.value,
            "Correo": formulario.correo.value,
        })

    });

    registro.classList.remove('activo');
    exito.classList.add('activo');

});


    function myFunction() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("califi");
        filter = input.value.toUpperCase();
        table = document.getElementById("calif");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }       
    }
}
