const btnSave = document.getElementById-("--btnUser_saveImage")
const imageUrl = document.getElementById("imageInputLocate")
const inputImage = document.getElementById("imageLogin")

btnSave.onclick(()=>{
const inputImagen = inputImage.value

imageUrl.src = inputImagen;
imageUrl.alt = inputImage;

    swal.fire({
        icon: "success",
        title: "Exito",
        text: "Imagen editada!",
        customClass: {
          popup: 'colored-toast'
        },
      })
})