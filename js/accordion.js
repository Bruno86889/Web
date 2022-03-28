$(document).ready(()=>{
    $(".section").click((e)=>{
        
        $(e.target).siblings(".hide").toggle()
    })
})
