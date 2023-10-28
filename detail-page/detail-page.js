let containerTitle = document.getElementById("titleContainer")
let mainDeatil = document.getElementById("mainDeatil")


let titleDetail = document.createElement("h1")
titleDetail.className = "title-speaker"
titleDetail.innerText = "Charla Programacion"

containerTitle.append(titleDetail)

let descriptionContainer = document.createElement("div")
descriptionContainer.className = "description-container"
descriptionContainer.innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim neque, explicabo ad aperiam omnis libero ut voluptatibus minus deserunt nobis perferendis non nihil deleniti voluptate, error voluptas sequi quas? Voluptatem"

mainDeatil.append(descriptionContainer)

let imgDetail = document.createElement("div")
imgDetail.className = "detail-img"
imgDetail.innerHTML = `
<img src="../img/2.jpg" alt="Site de rolling code">
`
mainDeatil.append(imgDetail)



let timeSpeach = document.createElement("div")
timeSpeach.className = "time-speach"
timeSpeach.innerText = "Hora 20:00"

mainDeatil.append(timeSpeach)

let speaker = document.createElement("div")
speaker.className = "speaker"
speaker.innerText = "Pia Lopez"

mainDeatil.append(speaker)

let registrer = document.createElement("button")
registrer.className = "button-registrer"
registrer.innerText = "Registrarse"
mainDeatil.append(registrer)




