export const listPosts = []

export class Data{

    static localStorageDataLogin(data){
        localStorage.setItem("dataLogin", JSON.stringify(data))
    }

    static localStorageDataPost(data){
        listPosts.unshift(data)
        localStorage.setItem("dataPost", JSON.stringify(listPosts))
    }

    static logOut(){
        localStorage.removeItem("dataUser")
        localStorage.removeItem("dataLogin")
    }
}