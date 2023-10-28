let getUser = JSON.parse(localStorage.getItem("user")) || []
console.log(getUser);


const sendLocal = (e) => {


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

    if (!Array.isArray(getUser)) {
        getUser = [];
    }

    const allUser = getUser.concat(user)

    let objetoRegistro = JSON.stringify(allUser);
    localStorage.setItem("user", objetoRegistro);



}

