function verificar() {
    let listaid = ["1098765468", "1098723432", "1890231234"];
    let listaNombres = ["juan", "pedro", "argemiro"];

    let numeroUsuario = document.getElementById("cadenaAdn").value;

    for (let idUsuario of listaid) {
        let coincidencias = 0;
        let totalDigitos = idUsuario.length;

        for (let i = 0; i < idUsuario.length; i++) {
            if (idUsuario[i] === numeroUsuario[i]) {
                coincidencias++;
            }
        }

        let porcentajeCoincidencia = (coincidencias / totalDigitos) * 100;

        let indice = listaid.indexOf(idUsuario);
        let nombre = listaNombres[indice];

        console.log(`Porcentaje de coincidencia con ${nombre}: ${porcentajeCoincidencia.toFixed(2)}%`);
        document.getElementById("resultado").innerHTML = `Porcentaje de coincidencia con ${nombre}: ${porcentajeCoincidencia.toFixed(2)}%`;
    }
}
