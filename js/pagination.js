const pages = document.getElementsByClassName("pages")[0]
const urls = ["item1", "item2", "item3"]

for(let i = 0; i< urls.length;i++){
    let link = document.createElement("a")
    let page = document.createElement("li")

    link.innerText = i + 1
    link.href = urls[i]

    page.appendChild(link)
    pages.appendChild(page)

}