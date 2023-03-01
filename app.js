window.addEventListener('DOMContentLoaded', (event) => {
  

const moviesSection = document.querySelector('#movies');

// function to render movie details
function renderMovies(movies) {
  moviesSection.innerHTML = '';

  movies.forEach(movie => {
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');

    const posterEl = document.createElement('img');
posterEl.setAttribute('src', `./posters/${movie.poster}`);
posterEl.setAttribute('alt', `${movie.title} poster`);
movieEl.appendChild(posterEl);


    const titleEl = document.createElement('h2');
    titleEl.textContent = movie.title;
    movieEl.appendChild(titleEl);

    const yearEl = document.createElement('p');
    yearEl.textContent = movie.year;
    movieEl.appendChild(yearEl);

    const ratingEl = document.createElement('p');
    ratingEl.textContent = movie.averageRating;
    movieEl.appendChild(ratingEl);
    

    moviesSection.appendChild(movieEl);
  });
}

// function to fetch movie data and render it on the page
function fetchAndRenderMovies(category) {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const movies = data[category];
      renderMovies(movies);
    });
}

// add event listeners to each navigation link
const comingSoonLink = document.querySelector('#coming-soon');
comingSoonLink.addEventListener('click', () => fetchAndRenderMovies('coming-soon'));

const moviesInTheatersLink = document.querySelector('#movies-in-theaters');
moviesInTheatersLink.addEventListener('click', () => fetchAndRenderMovies('movies-in-theaters'));

const topRatedIndianLink = document.querySelector('#top-rated-indian');
topRatedIndianLink.addEventListener('click', () => fetchAndRenderMovies('top-rated-indian'));

const topRatedMoviesLink = document.querySelector('#top-rated-movies');
topRatedMoviesLink.addEventListener('click', () => fetchAndRenderMovies('top-rated-movies'));

const favoritesLink = document.querySelector('#favorites');
favoritesLink.addEventListener('click', () => fetchAndRenderMovies('favorites'));
});
