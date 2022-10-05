const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=857a69c37396d9c744c1b89f4b88e3f8&page=1';
const IMG_URL = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=857a69c37396d9c744c1b89f4b88e3f8&query="'

const form = document.querySelector('#form');
const main = document.querySelector('#main');


getMovies(API_URL);

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
   
    showMovies(data.results);
}

function showMovies(movies){
    main.innerHTML = '';

    movies.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = 
        `<img src="${IMG_URL + poster_path}" alt="${title}">
            <div class="movie-info">
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                 <h3>overview</h3>
                    <p>${overview}</p>
            </div>
        `
        main.appendChild(movieEl);
    })
} 

function getClassByRate(vote) {
    if(vote >= 8 ){
        return 'green'
    }else if(vote >= 5){
        return 'orange'
    }else{
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = document.querySelector('#search').value; 

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_URL + searchTerm);


        searchTerm.value = '';
    }else {
        window.location.reload();
    }
})

