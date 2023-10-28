let getUser = JSON.parse(localStorage.getItem("user"))
console.log(getUser);


const sendLocal = () => {

    let usuario = document.getElementById("usuario")
    let email = document.getElementById("email")
    let password = document.getElementById("password")

    let usuarioValor = usuario.value
    let emailValor = email.value
    let passwordValor = password.value

    let user = {
        usuario: usuarioValor,
        email: emailValor,
        password: passwordValor
    }

    const allUser = [...getUser, user]
    console.log(allUser);


/* 
    var objetoRegistro = JSON.stringify(allUser);
    localStorage.setItem("user", objetoRegistro); */
}


