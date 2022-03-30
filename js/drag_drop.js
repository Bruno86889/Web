var drags = document.getElementsByClassName("drag")
var drop = document.getElementById("drop")

for (let i = 0; i < drags.length; i++) {
    drags[i].addEventListener(
        "dragstart", (e) => {
            console.log(e.target);
            e.dataTransfer.setData("text/plain", getComputedStyle(drags[i]).getPropertyValue("background"))
            console.log(getComputedStyle(drags[i]).getPropertyValue("background"));
            e.dataTransfer.dropEffect = "copy"
        })
}

drop.addEventListener("dragover", (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = "move"
})

drop.addEventListener("drop", (e) => {
 
    var bg = e.dataTransfer.getData("text")
    drop.style.background = bg
})