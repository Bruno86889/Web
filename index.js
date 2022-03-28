const dirname = "./Projetos/"
        const list = document.createElement("ul")
        const dataFilePath = "./assets/json/projects.json"

        // as
        fetch(dataFilePath,{method: "get"}).then(text =>{
            text.text().then(data =>{
                const projects = JSON.parse(data)
                
                for(let index = 0; index < Object.keys(projects).length;index++){
                    var item = document.createElement("li")
                    var link = document.createElement("a")
                    link.href = dirname + projects[index].filename
                    link.text = projects[index].name
                    item.appendChild(link)
                    list.appendChild(item)
                    document.body.appendChild(list)
                }
            })
        })