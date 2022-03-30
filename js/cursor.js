const cursor = document.getElementsByClassName("cursor")[0]

window.addEventListener("mousemove",(e)=>{

    cursor.style.top = e.clientY + "px"
    cursor.style.left = e.clientX + "px"
    if(e.target.className == "expand"){
        cursor.animate({"width":"100px","height":"100px"},{duration:2000})
    }else{
        cursor.animate({"width":"20px","height":"20px"},{duration:1000})
    }
})