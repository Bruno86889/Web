// const range = $("#range")
// const progress = $("#progress")

// $(document).ready(() => {
//     {
//         progress.val(range.val())

//         range.on("input", (e) => {
//             progress.val(range.val())
//         })
//     }
// })

const range = document.getElementById("range")
const progress = document.getElementById("progress")
const start = document.getElementById("start")
const end = document.getElementById("end")
const duration = 100 

var x = 0
end.textContent = seconds_to_minutes(duration)
progress.value = range.value

range.addEventListener("input",()=>{
    progress.value = range.value

    x = parseInt(range.value)
})

setInterval(()=>{
    x+=1
    progress.value = x
    range.value = x
    start.textContent = seconds_to_minutes(x)
},1000)

/**
 * 
 * @param {int} num 
 */
function seconds_to_minutes(num){
    let m = Math.floor(num/60)
    let s = num%60

    if (s < 10) {
        s = "0" + s
    }
    return `${m}:${s}`
}
