document.addEventListener('DOMContentLoaded', () => {
  
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav');

  navToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  const allLinks = document.querySelectorAll('a[href^="#"]');

  allLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });

      
      nav.classList.remove('active');
    });
  });

  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

 
  const fadeInElements = document.querySelectorAll(
    '.section-title, .resume-item, .skill-item, .project-card'
  );
  fadeInElements.forEach(el => observer.observe(el));

  
  const contactForm = document.querySelector('.contact-form form');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

 
    console.log({ name, email, subject, message });

 
    alert('Thank you for your message! I will get back to you soon.');

    contactForm.reset();
  });


  function toggleTheme() {
    document.body.classList.toggle('light-theme');
  }


});
