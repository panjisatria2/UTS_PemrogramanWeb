document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute('href'));
    
    // Scroll ke elemen target dengan efek halus
    if (target) {
      // Cek apakah browser mendukung smooth scrolling
      if ('scrollBehavior' in document.documentElement.style) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      } else {
        // Fallback untuk browser yang tidak mendukung smooth scrolling
        const targetPosition = target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth' // Ini akan berfungsi di sebagian besar browser modern
        });
      }
    }
  });
});

window.addEventListener('resize', function() {
  console.log('Window resized to: ' + window.innerWidth + 'x' + window.innerHeight);
});