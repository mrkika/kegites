document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.querySelector('.sidebar');

  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });
});


function contactAdmin() {
  window.open("https://wa.me/2348137992319", "_blank");
}