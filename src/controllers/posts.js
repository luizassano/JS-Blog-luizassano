import { Data } from "../models/localStorage.js"
import { Template } from "../models/template.js"

export class Posts{
    static API_URL = "https://api-blog-m2.herokuapp.com/"
    
    static getPost(event){
        event.preventDefault()

        const value = document.querySelector("textarea").value

        Posts.toPost({content: value})
    }

    static async toPost(data){
        const getUser = localStorage.getItem("dataLogin")
        const user    = JSON.parse(getUser)
        
        const response = await fetch(`${this.API_URL}post`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}` 
            },
            "body": JSON.stringify(data)
        })

        const responseData = await response.json() 

        Data.localStorageDataPost(responseData)

        Posts.authorization()

        return responseData
    }

    static async authorization(){
        const getUser = localStorage.getItem("dataLogin")
        const user    = JSON.parse(getUser)

        const response = await fetch(`${this.API_URL}user/${user.userId}`, {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}` 
            },
        })

        const responseData = await response.json()
        
        Template.postTemplate(responseData.avatarUrl, responseData.username)
    }

    static async updatePost(){
        const item  = localStorage.getItem("dataLogin")
        const userId = JSON.parse(item).userId
        const token  = JSON.parse(item).token

        const response = await fetch(`${this.API_URL}post/${userId}`, {
            "method": "PATCH",
            "headers": {
                "Authorization": `Bearer ${token}`
            }
        })
    }

    static async deletePost(){
        const item  = localStorage.getItem("dataLogin")
        const userId = JSON.parse(item).userId
        const token  = JSON.parse(item).token

        const response = await fetch(`${this.API_URL}post/${userId}`, {
            "method": "PATCH",
            "headers": {
                "Authorization": `Bearer ${token}`
            }
        })
    }
}