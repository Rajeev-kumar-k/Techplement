const quoteContent = document.getElementById('quote-content');
const quoteAuthor = document.getElementById('quote-author');
const randomBtn = document.getElementById('random-btn');
const searchBtn = document.getElementById('search-btn');
const authorInput = document.getElementById('author-input');
const searchResults = document.getElementById('search-results');

const API_BASE = 'http://localhost:5000/api/quotes';

// Function to fetch random quote
async function getRandomQuote() {
  const res = await fetch(`${API_BASE}/random`);
  const data = await res.json();
  quoteContent.textContent = `"${data.content}"`;
  quoteAuthor.textContent = `- ${data.author}`;
  searchResults.innerHTML = '';
}

// Function to search by author
async function searchByAuthor() {
  const author = authorInput.value.trim();
  if (!author) return;
  
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
}

// Event listeners
randomBtn.addEventListener('click', getRandomQuote);
searchBtn.addEventListener('click', searchByAuthor);

// Load random quote on page load
getRandomQuote();
