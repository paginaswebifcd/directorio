document.addEventListener('DOMContentLoaded', () => {
  const logoCircle = document.querySelector('.logo-circle');

  logoCircle.addEventListener('mouseover', () => {
      logoCircle.style.transform = 'scale(1.05)';
      logoCircle.style.transition = 'transform 0.3s ease';
  });

  logoCircle.addEventListener('mouseout', () => {
      logoCircle.style.transform = 'scale(1)';
  });
});