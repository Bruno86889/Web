var pages = $(".pages")
var urls = ["item1", "item2", "item3"]
var page, link

$.each(urls, (ind, val) => {
    link = $("<a></a>", {
        text: ind + 1,
        href: val
    })
    page = $("<li></li>")

    page.append(link)

    pages.append(page)
})