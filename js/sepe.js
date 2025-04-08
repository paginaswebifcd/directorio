window.addEventListener('DOMContentLoaded', () => {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
  
    // Mostrar la primera imagen
    img1.classList.remove('hidden');
    setTimeout(() => {
      img1.classList.add('show');
    }, 100);
  
    // Mostrar la segunda imagen después de 2.5 segundos
    setTimeout(() => {
      img2.classList.remove('hidden');
      setTimeout(() => {
        img2.classList.add('show');
      }, 100);
    }, 2500);
  });
  