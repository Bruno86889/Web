const range = $("#range")
const progress = $("#progress")

$(document).ready(() => {
    {
        progress.val(range.val())

        range.on("input", (e) => {
            progress.val(range.val())
        })
    }
})