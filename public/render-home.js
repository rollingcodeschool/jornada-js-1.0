
let speech = '';
console.log(data);
data[1].forEach((charla)=>{
speech = speech + `
       <article class='card m-4 bg-danger'>
         <figure class=''>
           <img class='img-fluid w-100' src="${charla.imagen}" alt="">
         </figure>
         
         <h3>${charla.título}</h3>
         <h3>${charla.descripción}</h3>
         <h3>${charla.orador}</h3>
     </article>
    `          

})

document.getElementById('main').innerHTML = speech;

