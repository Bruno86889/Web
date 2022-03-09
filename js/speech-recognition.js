var colors = {
    amarelo: "yellow",
    vermelho: "red",
    azul: "blue",
    preto: "black",
    rosa: "pink",
    roxo: "purple",
    laranja: "orange",
    branco: "white",
    marrom: "brown",
    dourado: "gold",
    prateado: "silver",
    verde: "green",
    violeta: "violet",
    cinza: "gray"
}

const recognition = new webkitSpeechRecognition()
const speechList = new webkitSpeechGrammarList()
const s_btn = document.getElementsByTagName("button")[0]
const output = document.getElementById("result")

// speechList.addFromString(grammar)
recognition.grammar = speechList
// Linguagem do reconehcimento de voz, se não especificado, será o mesmo que a de <html lang>
recognition.lang = "pt-br"

// Controla se apenas retornará um resultado ou se ficará esperando mais resultados
recognition.continuous = false

// Controla se vai retornar resultados que não sejam o resultado final da análise de voz
recognition.interimResults = false

// Controla o número máximo de resultados obtidos pela análise de voz
recognition.maxAlternatives = 1

s_btn.onclick = function () {
    recognition.start()
    console.log("Gravação Iniciada!");
}

recognition.onspeechend = function () {
    recognition.stop()
    console.log("Gravação Encerrada!");
}

recognition.onresult = function (e) {
    var color = e.results[0][0].transcript
    color = color.toLowerCase().replace("?", "")
    var a = ""

    for (let x = 0; x < Object.keys(colors).length; x++) {
        if (color.includes(Object.keys(colors)[x])) {
            document.body.style.backgroundColor = colors[Object.keys(colors)[x]]
            break
        }
    }
    output.textContent = color
}