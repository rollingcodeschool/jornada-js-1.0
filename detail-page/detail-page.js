let containerTitle = document.getElementById("titleContainer")
let mainDeatil = document.getElementById("mainDeatil")


const ruta = window.location.search
const urlPArams = new URLSearchParams(ruta)


const id = urlPArams.get('id')
console.log(id);

const charla = data[1][id-1]
console.log(charla);


let titleDetail = document.createElement("h1")
titleDetail.className = "title-speaker"
titleDetail.innerText = `${charla.título}`

containerTitle.append(titleDetail)

let descriptionContainer = document.createElement("div")
descriptionContainer.className = "description-container"
descriptionContainer.innerText = `${charla.descripción}`

mainDeatil.append(descriptionContainer)

let imgDetail = document.createElement("div")
imgDetail.className = "detail-img"
imgDetail.innerHTML = `
<img src="${charla.imagen}" alt="">

`
mainDeatil.append(imgDetail)

let timeSpeach = document.createElement("div")
timeSpeach.className = "time-speach"
timeSpeach.innerText = `${charla.hora}`

mainDeatil.append(timeSpeach)

let speaker = document.createElement("div")
speaker.className = "speaker"
speaker.innerText = `${charla.orador}`

mainDeatil.append(speaker)

let registrer = document.createElement("button")
registrer.className = "button-registrer"
registrer.innerText = "Registrarse"
mainDeatil.append(registrer)


