document.getElementById('ilyaForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('submitterName').value.trim();
  const school = document.getElementById('schoolName').value.trim();
  const ilya = document.getElementById('ilyaName').value.trim();
  const note = document.getElementById('ilyaNote').value.trim();

  const message = `New Ilya Submission:
Name: ${name}
Institution: ${school}
Ilya Name: ${ilya}
Note: ${note}`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappNumber = '2348137992319'; // Replace with your actual number

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, '_blank');
});