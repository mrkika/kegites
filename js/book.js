let currentIndex = 0;
const cards = document.querySelectorAll('.chapter-card');
const chapterNumber = document.getElementById('chapter-number');

function showCard(index) {
  cards.forEach(card => card.style.display = 'none');
  cards[index].style.display = 'block';
  chapterNumber.textContent = `Chapter ${index + 1}`;
}

function nextCard() {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    showCard(currentIndex);
  }
}

function prevCard() {
  if (currentIndex > 0) {
    currentIndex--;
    showCard(currentIndex);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  showCard(currentIndex);
});


function contactAdmin() {
  window.open("https://wa.me/2348137992319", "_blank");
}

function navigate(url) {
  window.location.href = url;
}

document.addEventListener('DOMContentLoaded', () => {
  renderChapter(currentChapter);

  document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const chapters = document.querySelectorAll('.chapter');
  const continueButton = document.getElementById('continueButton');

  // Scroll to bookmarked chapter on load
  const bookmarked = localStorage.getItem('bookmarkedChapter');
  if (bookmarked) {
    const el = document.getElementById(bookmarked);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  // Show "Continue" only if bookmarked chapter exists
  if (!bookmarked) continueButton.style.display = 'none';

  // Save bookmark when user reads a chapter
  chapters.forEach(chapter => {
    chapter.addEventListener('click', () => {
      localStorage.setItem('bookmarkedChapter', chapter.id);
    });
  });

  // Button jump to saved chapter
  continueButton.addEventListener('click', () => {
    if (bookmarked) {
      const el = document.getElementById(bookmarked);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.getElementById('quoteForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const institution = document.getElementById('institution').value.trim();
  const quote = document.getElementById('quote').value.trim();

  const message = `Quotation Submission:
Name: ${name}
Institution: ${institution}
Quote: "${quote}"`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappNumber = '2348137992319'; // replace with your number

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, '_blank');
});


document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");

  if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  }

  // If you have an overlay or want to close sidebar on click outside (optional)
  // const overlay = document.querySelector(".overlay");
  // overlay.addEventListener("click", () => {
  //   sidebar.classList.remove("active");
  // });
});
