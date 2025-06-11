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