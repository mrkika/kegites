const chapters = [
  {
    title: "Chapter 1: ORIGIN OF THE CLUB",
    text: "The Kegites Club is the most popular socio-cultural club in Nigeria. Supreme Comradium can be traced to thirteen students of the then Nigerian College of Arts, Science and Technology, who gathered themselves every evening to relax after studies.The thirteen students became the executive and periodically they donated Palm Wine in turns for the consumption of the group.Not before long, history was made as they became founding members of this wonderful club “The Kegites Club”.All this occurred while they were at the Ibadan Campus before they were moved to the permanent site in Ile- Ife.The Club was founded in 1962 at the University of Ife(now Obafemi Awolowo University) by these visionary students to promote African heritage and unity.The Palm Wine Drinkers Club as they were first called; did not only come into existence by accident but by incidence. The club had its first Chief in the person of Late of Prof. Olusegun Adesina. The Club been a socio-cultural club; it was agreed that he should be called Chief as in African traditional setting. Thus, Chief Olusegun Adesina was the first Chief to be coronated in 1963. Since the formation of the club, it has undergone various kinds of transformation, for instance; the Club had its first Female Member in 1968 in the person of L.S.F Dupe Ajayi and in 1974 the Club spread to other institutions of higher learning across Nigeria with Ilya du Tractor(Federal College of Agriculture, Akure, Ondo State, Nigeria) as the first Ilya to get a Keg of Office(Accreditation) from the World Headquarters.Ile Ife, followed by University of Ibadan which is known as National Headquarters. The Club changed its name on October 1986, during the reign of Chief Anthony Uzodima Ogidi, the then world Chief, at the World Chiefsis Conference of 1986 from Palm Wine Drinkers Club to Kegites Club International and the Motto was changed from The Basis of African Peace to Unity in Diversity. From inception, Kegites Club has remained one Supreme Club with branches (Ilyasis) in almost all institutions of hiher learning both in Nigeria and other parts of the world. As at this day, there are over 100 Ilyasis in Nigeria and Overseas.Ilyasis outside Nigeria include(but not limited to) United Kingdom(Ilya du Queen), Chicago, USA(Ilya du Windy), India(Ilya du Punjab) and more.The kegites club international is one and indivisible.The supremost comradium has a special language with a peculiar dialectical parlance which every member is delighted to speak at all times and gatherings."
  },
  {
    title: "Chapter 2: THE CLUB TEST OF KARABILITY (T.O.K)",
    text: "In 1986, the group formally adopted the name 'Kegites Club'. The transition emphasized structured cultural education and fraternity."
  },
  {
    title: "Chapter 3: THE IDENTITIES OF THE CLUB",
    text: "Gyration is the rhythmic, musical session of the Kegites. Drums, songs, and palm wine are key elements of celebration."
  },
  {
    title: "Chapter 4: THE CLUB COLOURS AND ITS SIGNIFICANTS",
    text: "Each Ilya is led by a Chiefis, supported by positions like Elder, Feda, Parrot, and Drumito. Unity and order are maintained through respect."
  },
  {
    title: "Chapter 5: SOME TERMS USED IN THE KEGITES CLUB",
    text: "Slangs like 'Holy Water', 'Gyrate', 'Songito' give the club its unique voice. The gourd and keg symbolize spiritual and cultural purity."
  },
  {
    title: "Chapter 6: MEMBER TITLES/PORTIFOLIO IN KEGITE CLUB",
    text: "Over 100 Ilyasis exist in Nigeria and abroad. From Zaria to London, unity and tradition remain at the heart of every Ilya."
  },
  {
    title: "Chapter 7: Roles and Duties",
    text: "Each officer contributes uniquely. The Feda keeps records, the Songito leads songs, and the Drumito controls rhythm and beat."
  },
  {
    title: "Chapter 7: Roles and Duties",
    text: "Each officer contributes uniquely. The Feda keeps records, the Songito leads songs, and the Drumito controls rhythm and beat."
  },
  {
    title: "Chapter 7: Roles and Duties",
    text: "Each officer contributes uniquely. The Feda keeps records, the Songito leads songs, and the Drumito controls rhythm and beat."
  },
  {
    title: "Chapter 7: Roles and Duties",
    text: "Each officer contributes uniquely. The Feda keeps records, the Songito leads songs, and the Drumito controls rhythm and beat."
  },
  {
    title: "Chapter 7: Roles and Duties",
    text: "Each officer contributes uniquely. The Feda keeps records, the Songito leads songs, and the Drumito controls rhythm and beat."
  },
  {
    title: "Chapter 7: Roles and Duties",
    text: "Each officer contributes uniquely. The Feda keeps records, the Songito leads songs, and the Drumito controls rhythm and beat."
  },
  {
    title: "Chapter 7: Roles and Duties",
    text: "Each officer contributes uniquely. The Feda keeps records, the Songito leads songs, and the Drumito controls rhythm and beat."
  },
  {
    title: "Chapter 8: Today and Beyond",
    text: "Modern Kegites are using tech and social media to spread awareness while still upholding ancestral values of brotherhood and culture."
  }
];

let currentChapter = 0;

function renderChapter(index) {
  const content = document.getElementById('chapter-content');
  const number = document.getElementById('chapter-number');
  const chapter = chapters[index];
  content.innerHTML = `<h2>${chapter.title}</h2><p>${chapter.text}</p>`;
  number.textContent = `Chapter ${index + 1}`;
}

function nextChapter() {
  if (currentChapter < chapters.length - 1) {
    currentChapter++;
    renderChapter(currentChapter);
  }
}

function prevChapter() {
  if (currentChapter > 0) {
    currentChapter--;
    renderChapter(currentChapter);
  }
}

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