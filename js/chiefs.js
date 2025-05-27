// Sidebar toggle from home.js will be used here as well

// Search and filter chiefs table
document.getElementById('searchInput').addEventListener('input', function() {
  const filter = this.value.toLowerCase();
  const rows = document.querySelectorAll('.chiefs-row');
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(filter) ? '' : 'none';
  });
});

// Submit form handler
  document.getElementById('chiefoForm').addEventListener('submit', function(e) {
    e.preventDefault();

  const requesterName = document.getElementById('requesterName').value.trim();
  const chiefoName = document.getElementById('chiefoName').value.trim();
  const chiefoIlya = document.getElementById('chiefoIlya').value.trim();
  const chiefoNumenclature = document.getElementById('chiefoNumenclature').value.trim();
  const yearCoronation = document.getElementById('yearCoronation').value.trim();
  const predecessor = document.getElementById('predecessor').value.trim() || 'N/A';
  const successor = document.getElementById('successor').value.trim() || 'N/A';

  if (!requesterName || !chiefoName || !chiefoIlya || !chiefoNumenclature || !yearCoronation) {
    alert('Please fill in all required fields.');
  return;
    }

  const message = `Request for Chiefo Entry:

  Requester: ${requesterName}
  Chiefo Name: ${chiefoName}
  Ilya: ${chiefoIlya}
  Numenclature: ${chiefoNumenclature}
  Year of Coronation: ${yearCoronation}
  Predecessor: ${predecessor}
  Successor: ${successor}`;

  const phoneNumber = '234XXXXXXXXXX'; // Replace with your WhatsApp number like 2348012345678
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Redirect to WhatsApp
  window.location.href = whatsappUrl;
  });
