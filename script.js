// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      const menuToggle = document.querySelector('.menu-toggle');
      const navbar = document.querySelector('.navbar');

      menuToggle.addEventListener('click', function () {
        const isOpen = navbar.classList.toggle('menu-open');
        menuToggle.setAttribute('aria-expanded', isOpen);
        menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
      });

      document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function () {
          navbar.classList.remove('menu-open');
          menuToggle.setAttribute('aria-expanded', 'false');
          menuToggle.setAttribute('aria-label', 'Open navigation');
        });
      });
    });
  });
  
  // Greeting animation
  const greetings = ["Hi There,", "Hello,", "Welcome,"];
  let greetingIndex = 0;
  
  function changeGreeting() {
    const greetingElement = document.querySelector('.tl-t');
    greetingElement.textContent = greetings[greetingIndex];
    greetingIndex = (greetingIndex + 1) % greetings.length;
  }
  
  // Change greeting every 2 seconds
  setInterval(changeGreeting, 2000);
  