
let speech = '';
console.log(data);
data[1].forEach((charla)=>{
speech = speech + `
<article class="col">
<a href='detalle/${charla.id}'>
<div class="card" style="width: 18rem;">
<img src=${charla.imagen} class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${charla.título}</h5>  
</div>
</div>
</a>
</article>
    `          

})

document.getElementById('main').innerHTML = speech;

