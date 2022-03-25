import { Data } from "../models/localStorage.js"
import { Template } from "../models/template.js"

export class UserLogin{
    static API_URL      = "https://api-blog-m2.herokuapp.com/"
    static token = ""

    static getUser(event){
        event.preventDefault()

        const inputs   = event.target
        const dataForm = {}

        for(let i = 0; i < inputs.length; i++){
            const {name, value} = inputs[i]
            dataForm[name] = value
        }         
        UserLogin.login({email: dataForm.email, password: dataForm.password})
        
        return dataForm
    }

    static async login(data){
        const response = await fetch(`${this.API_URL}user/login`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(data)
        })

        const responseData = await response.json()

        if(response.status === 200){
            window.location.href = "src/pages/mainPage.html"  
            Data.localStorageDataLogin(responseData)  
        }
    }

    static async user(){
        const getPermission = localStorage.getItem("dataLogin")
        const permission    = JSON.parse(getPermission)

        const response = await fetch(`${this.API_URL}user/${permission.userId}`, {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${permission.token}`
            }
        })

        const responseData = await response.json()
        
        Template.headerMainTemplate(responseData.avatarUrl, responseData.username)
    }
}