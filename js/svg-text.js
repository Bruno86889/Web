function mudarTexto() {
    const inp = document.querySelector("input#inp")
    const texto = document.getElementById("texto")
    var inpTexto = inp.value
    texto.textContent = inpTexto

    inp.value = ""

}