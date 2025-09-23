const quoteContent = document.getElementById('quote-content');
const quoteAuthor = document.getElementById('quote-author');
const randomBtn = document.getElementById('random-btn');
const searchBtn = document.getElementById('search-btn');
const authorInput = document.getElementById('author-input');
const searchResults = document.getElementById('search-results');

const API_BASE = 'http://localhost:5000/api/quotes';


function fadeOut(element) {
  element.style.opacity = 0;
  return new Promise(resolve => setTimeout(resolve, 200));
}


function fadeIn(element) {
  element.style.opacity = 1;
}


async function getRandomQuote() {
  await fadeOut(quoteContent);
  await fadeOut(quoteAuthor);
  quoteContent.textContent = 'Loading...';
  quoteAuthor.textContent = '';
  
  try {
    const res = await fetch(`${API_BASE}/random`);
    const data = await res.json();
    quoteContent.textContent = `"${data.content}"`;
    quoteAuthor.textContent = `- ${data.author}`;
    searchResults.innerHTML = '';
  } catch (err) {
    quoteContent.textContent = 'Failed to fetch quote.';
    quoteAuthor.textContent = '';
  }

  fadeIn(quoteContent);
  fadeIn(quoteAuthor);
}


async function searchByAuthor() {
  const author = authorInput.value.trim();
  if (!author) return;
  
  searchResults.innerHTML = 'Searching...';
  
  try {
    const res = await fetch(`${API_BASE}/author/${author}`);
    const data = await res.json();

    searchResults.innerHTML = '';
    if (data.length === 0) {
      searchResults.textContent = 'No quotes found.';
    } else {
      data.forEach(q => {
        const p = document.createElement('p');
        p.textContent = `"${q.content}" - ${q.author}`;
        searchResults.appendChild(p);
      });
    }
  } catch (err) {
    searchResults.textContent = 'Error fetching quotes.';
  }
}


randomBtn.addEventListener('click', getRandomQuote);
searchBtn.addEventListener('click', searchByAuthor);


getRandomQuote();
