document.addEventListener('DOMContentLoaded', () => {
  // Toggle answers
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.closest('.exercise').querySelector('.answer');
      const isVisible = answer.classList.contains('visible');

      if (isVisible) {
        answer.classList.remove('visible');
        btn.textContent = 'Mostrar Resposta';
        btn.classList.remove('active');
      } else {
        answer.classList.add('visible');
        btn.textContent = 'Ocultar Resposta';
        btn.classList.add('active');
      }
    });
  });

  // Smooth entrance animation for sections
  const sections = document.querySelectorAll('.section, .exercise, .lesson-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
});
