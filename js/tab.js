const tab = $(".tab")
const btns = $(".tab-btn")
var current = 0

$.each(btns, (i, v) => {
    $(v).click((e) => {
        btns.removeClass("active")
        $(e.target).toggleClass("active")
        current = i

        tab.each((i, el) => {
            $(el).removeClass("active")
            if (i == current) {
                $(el).toggleClass("active")
            }
        })
    })
})
