const path = "../assets/img/"

$(document).ready(() => {
    $.getJSON("../assets/json/persons.json").then((data, status) => {
        $.each(Object.keys(data), (i) => {
            var li = $("<li></li>", {
                class: "commit",
                value: i
            })
            $("<img />", {
                class: "icon",
                src: path + data[i].avatar
            }).appendTo(li)
            $("<h3></h3>", { text: data[i].name }).appendTo(li)
            $("<h4></h4>", { text: data[i].age }).appendTo(li)

            var commits = $("<ul></ul>", { class: "person-commits" })


            $.each(Object.keys(data[i].commits), (ind) => {
                $("<p></p>", {
                    text: data[i].commits[ind]
                }).appendTo(commits)
            })

            commits.appendTo(li)

            li.appendTo($("ul.commit-list"))
        })
    })
})