const cont = $(".toast-container")

const btn = $("button")

btn.click(() => {
    let toast = $("<span></span>")

    toast.addClass("toast")
    toast.text("Olá, você não deveria estar aqui")

    toast.appendTo(cont)

    setInterval(() => {
        toast.remove()
        delete toast
    }, 3900)

})