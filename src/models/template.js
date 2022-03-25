import { listPosts } from "./localStorage.js"

export class Template{
    static headerMainTemplate(imgUrl, username){
        const header = document.querySelector("div#user")
        
        header.innerHTML = `
            <img src="${imgUrl}" />
            <h4>${username}</h4>
        `
    }

    static postTemplate(imgUrl, username){
        const ul           = document.querySelector("ul")
        ul.innerHTML       = ""

        for(let i = 0; i < listPosts.length; i++){

            const li = document.createElement("li")

            li.innerHTML       = `
                <img src="${imgUrl}" />
                
                <div>
                    <h4>${username}</h4>
                    <article>${listPosts[i].post}</article>
                </div>
            `
            ul.appendChild(li)
        }
    }
}