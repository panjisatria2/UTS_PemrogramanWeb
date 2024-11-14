document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {

      if ('scrollBehavior' in document.documentElement.style) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      } else {

        const targetPosition = target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth' 
        });
      }
    }
  });
});
