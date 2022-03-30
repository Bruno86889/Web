const sections = document.querySelectorAll(".section")

sections.forEach((val,key)=>{
    sections[key].addEventListener("click", () =>{
       sections[key].nextElementSibling.classList.toggle("hide")
    })
})