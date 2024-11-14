// Mendapatkan elemen form pendaftaran
const registrationForm = document.getElementById('registration-form');

// Menambahkan event listener untuk menangani submit form
registrationForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah pengiriman form default

    // Mengambil nilai dari input form
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const major = document.getElementById('major').value;

    // Validasi dasar input form
    if (!name || !email || !phone || !major) {
        console.error('Harap isi semua kolom yang diperlukan.');
        return;
    }

    alert("data telah terkirim")

    // Reset form setelah pengiriman
    registrationForm.reset();
});

// Smooth scrolling for navigation links
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
      
