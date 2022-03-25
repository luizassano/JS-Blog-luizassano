import { Register } from "./controllers/register.js";
import { UserLogin } from "./controllers/userLogin.js";
import { Posts } from "./controllers/posts.js";
import { Data } from "./models/localStorage.js";

const btn    = document.querySelector("body")
const logOut = document.querySelector("a#logOut")

if(btn.id === "loginBody"){
    btn.addEventListener("submit", UserLogin.getUser)

}else if(btn.id === "registerBody"){
    btn.addEventListener("submit", Register.getUser)

}else if(btn.id === "mainPageBody"){
    btn.addEventListener("submit", Posts.getPost)    
    logOut.addEventListener("click", Data.logOut)  
    UserLogin.user()
}