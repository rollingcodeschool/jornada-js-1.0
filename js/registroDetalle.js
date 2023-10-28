import dataConf from "../db.json" assert {type:'json'};
function agregarCharla (id){
    const user = JSON.parse(localStorage.getItem("user")) || null; 
    if(user  !== null && user?.usuarioValido){
       const charlas =  dataConf.charlas?.map(charla => {
        if(charla.id == parseInt(id)){
            charla.asistentes.push(user)
        }
          return charla; 
        } )
        localStorage.setItem("listEvents" , JSON.stringify(charlas)); 
    }
}

export {
    agregarCharla
}