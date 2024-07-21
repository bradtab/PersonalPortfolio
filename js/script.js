document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const overlay = document.querySelector('.overlay');
  
    // Show loader on page load
    document.body.classList.add('loading');
  
    // Hide loader once the page is fully loaded
    window.addEventListener('load', () => {
      document.body.classList.remove('loading');
      loader.style.display = 'none';
    });

  // Social Buttons Event Listeners
  const socialButtons = [
    { id: 'twitterButton', url: 'https://twitter.com/Bradtab05' },
    { id: 'linkedinButton', url: 'https://linkedin.com' },
    { id: 'githubButton', url: 'https://github.com/bradtab' },
    { id: 'facebookButton', url: 'https://facebook.com/bradley.tabone.5' },
    { id: 'instagramButton', url: 'https://instagram.com/bradleytabone_13' },
  ];

  socialButtons.forEach(button => {
    const btn = document.getElementById(button.id);
    if (btn) {
      btn.addEventListener('click', () => window.open(button.url, '_blank'));
    }
  });

  // Scroll Animation for Transition
  const sections = document.querySelectorAll('section');
    let currentSectionIndex = 0;

    function scrollToSection(index) {
        if (index < 0 || index >= sections.length) return;
        sections[index].scrollIntoView({ behavior: 'smooth' });
        currentSectionIndex = index;
    }

    window.addEventListener('wheel', (event) => {
        if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
            scrollToSection(currentSectionIndex + 1);
        } else if (event.deltaY < 0 && currentSectionIndex > 0) {
            scrollToSection(currentSectionIndex - 1);
        }
    });

    const navbarLinks = document.querySelectorAll('nav button');
    navbarLinks.forEach((link, index) => {
        link.addEventListener('click', () => scrollToSection(index));
    });
});