var char, px = 0
const root = document.querySelector(":root")
const inp = document.getElementsByTagName("input")[0]

var minWidth = getComputedStyle(root).getPropertyValue("--bar-width")

inp.addEventListener("input", (e) => {
    char = inp.value.length
    if (char > 9) {
        inp.style.width = "fit-content"
    } else {
        inp.style.width = minWidth
    }
})