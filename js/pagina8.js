document.querySelectorAll('.plus-btn').forEach(button => {
    button.addEventListener('click', () => {
        const cardText = button.parentElement.querySelector('p').textContent;
        alert(`Has seleccionado: ${cardText}`);
    });
});
