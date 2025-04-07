document.querySelectorAll('sello-mas').forEach(button => {
    button.addEventListener('click', () => {
        const cardText = button.parentElement.querySelector('p').textContent;
        alert(`Has seleccionado: ${cardText}`);
    });
});
