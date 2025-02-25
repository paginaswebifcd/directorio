//Script para el slider de imágenes
const images=document.querySelectorAll('.slider-image');
let currentImage=0;
function nextImage(){
    images[currentImage].classList.remove('active')
    currentImage=(currentImage+1)%images.length;
    images[currentImage].classList.add('active');
}
setInterval(nextImage,5000);//cambia la imagen cada 5 segundos
//Script para insertar el texto del enlace copiando el contenido href
const webLink=document.getElementById('company-web');
webLink.textContent=webLink.href; 

// Buscador index principal
function searchCategories() {
    let input = document.getElementById('search').value.toLowerCase();
    let items = document.querySelectorAll('.category-item');

    items.forEach(item => {
        let text = item.innerText.toLowerCase();
        if (text.includes(input)) {
            item.style.display = "flex"; // Cambia "block" por "flex"
            item.style.flexDirection = "column"; // Asegura que se vea bien
        } else {
            item.style.display = "none";
        }
    });
}

// Buscador diferentes categorias


function searchBusinesses() {
        let input = document.getElementById('search').value.toLowerCase();
        let businessCards = document.querySelectorAll('.business-card');
        
        businessCards.forEach(card => {
            let text = card.innerText.toLowerCase();
            if (text.includes(input)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }
    

  // JavaScript para añadir la clase 'active' poco a poco a cada categoría
  
  window.addEventListener("load", function() {
    const category= document.querySelectorAll('.category');
    let delay = 500;

    categories.forEach((category, index) => {
      // Incrementing the delay to show categories one by one
      setTimeout(() => {
        category.classList.add('active');
      }, delay);
      delay += 500; // Add 500ms delay between each category
    });
  });