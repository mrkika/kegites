document.addEventListener('DOMContentLoaded', function () {
  const preloader = document.getElementById('preloader');
  const mainContent = document.getElementById('main-content');

  // Start fade out
  preloader.classList.add('hide');

  // After fade, remove preloader and show content
  setTimeout(() => {
    preloader.style.display = 'none';
    mainContent.classList.remove('hidden');
  }, 900); // Match this to the CSS transition duration
});

function askKariability() {
  window.location.href = 'test.html'; // Will create this page next
}

function redirectToLimited() {
  window.location.href = '/history101.html';
}