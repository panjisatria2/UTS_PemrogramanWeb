// kode untuk mengisi form
const registrationForm = document.getElementById('registration-form');

registrationForm.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const major = document.getElementById('major').value;

    if (!name || !email || !phone || !major) {
        console.error('Harap isi semua kolom yang diperlukan.');
        return;
    }

    alert("data telah terkirim")

    registrationForm.reset();
});

// untuk kode ini untuk smooth scroling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
      
  window.addEventListener('resize', function() {
    console.log('Window resized to: ' + window.innerWidth + 'x' + window.innerHeight);
  });