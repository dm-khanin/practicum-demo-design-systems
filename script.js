const btn = document.querySelector('.switch-theme-btn');
const page = document.querySelector('.page');

btn.addEventListener('click', function() {
  page.classList.toggle('page_theme_dark');
});
