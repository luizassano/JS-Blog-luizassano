export class Register {
    
    static getUser(event){
        event.preventDefault()

        const inputs   = event.target
        const dataForm = {}

        for(let i = 0; i < inputs.length; i++){
            const {name, value} = inputs[i]
            dataForm[name] = value
        }

        Register.createUser({username: dataForm.username, email: dataForm.email, avatarUrl: dataForm.avatar, password: dataForm.password})
    }

    static async createUser(data){
        const response = await fetch("https://api-blog-m2.herokuapp.com/user/register", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(data),
        })
        
        if(response.status === 201){
            window.alert("Usuário cadastrado com sucesso!")
            window.location.href = "../../index.html"
        
        }else if(response.status === 400){
            window.alert("Usuário não cadastrado!")
        }
        return response
    }
}