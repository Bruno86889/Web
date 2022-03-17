var drag = document.getElementById("drag")
var drop = document.getElementById("drop")


drag.addEventListener(
    "dragstart", (e) => {
        console.log(e.target);
        e.dataTransfer.setData("text/plain", getComputedStyle(drag).getPropertyValue("background-color"))
        e.dataTransfer.dropEffect = "copy"
    })

drop.addEventListener("dragover", (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = "move"
})
drop.addEventListener("drop", (e) => {
    e.preventDefault()
    var bg = e.dataTransfer.getData("text")

    drop.style.backgroundColor = bg
})