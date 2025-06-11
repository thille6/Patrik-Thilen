// Markera aktiv meny automatiskt baserat på sidans filnamn
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('.nav-link');
  const path = window.location.pathname.split('/').pop();

  links.forEach(link => {
    // Ta bort aktiv klass först
    link.classList.remove('active');
    // Om href matchar filnamnet, lägg till aktiv klass
    if(link.getAttribute('href') === path || (path === "" && link.getAttribute('href') === "index.html")) {
      link.classList.add('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            // Lägg till/ta bort active-klass på overlay och body
            const menuOverlay = document.querySelector('.menu-overlay');
            if (menuOverlay) {
                menuOverlay.classList.toggle('active');
            }
            document.body.classList.toggle('menu-active');
        });

        // Close menu when a nav link is clicked
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                // Ta bort active-klass från overlay och body när en länk klickas
                const menuOverlay = document.querySelector('.menu-overlay');
                if (menuOverlay) {
                    menuOverlay.classList.remove('active');
                }
                document.body.classList.remove('menu-active');
            });
        });
    }
});