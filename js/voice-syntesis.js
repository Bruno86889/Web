const input = document.getElementsByTagName("input")[0]
const button = document.getElementsByTagName("button")[0]
const speech = window.speechSynthesis
const utterance = new SpeechSynthesisUtterance()
const select = document.getElementsByTagName("select")[0]


button.onclick = e => {
    utterance.lang = select.value
    utterance.text = input.value

    if (!speech.speaking) {
        speech.speak(utterance)
    }
}