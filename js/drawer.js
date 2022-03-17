const cv = document.getElementById("canvas")
const colorPicker = document.getElementById("color")
const ctx = cv.getContext("2d")
const range = document.getElementById("range")
const fill = document.getElementById("fill")
const text = document.getElementById("text")

var color = "#000000"
var active = false
var width = getComputedStyle(range).width

/**
 * 
 * @param {Event} e 
 */
range.addEventListener("click",(e)=>{
    var amount = e.clientX
    text.textContent = amount + "px"
    fill.style.width = amount + "px"
})

colorPicker.onchange = (e)=>{
    ctx.strokeStyle = colorPicker.value
}
/**
 * 
 * @param {MouseEvent} e 
 */
cv.onmousemove = (e) => {

    var moveX = e.movementX
    var moveY = e.movementY

    drawLine(e)
}

cv.onmousedown = () => {
    active = true
    ctx.beginPath()
}
cv.onmouseup = () => {
    active = false
    ctx.closePath()
}

/**
 * 
 * @param {MouseEvent} e 
 */
function drawLine(e) {
    if (active) {
        let x = e.clientX - 5
        let y = e.clientY - 5

        ctx.lineTo(x, y)
        ctx.stroke()
    }
}