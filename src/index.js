// import './css/styles.css';
// import debounce from 'lodash.debounce';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import API from './fetchCountries';
// import { renderCountryList, renderCountryCard } from "./render-function";



// const DEBOUNCE_DELAY = 300;

// const inputSearch = document.querySelector('#search-box');
// const listCountry = document.querySelector('.country-list');
// const cardCountry = document.querySelector('.country-info');

// inputSearch.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY));


// function onInputSearch(e) {
//     e.preventDefault();

//     const query = inputSearch.value.trim();
    
    

//     API.fetchCountries(query)
//         .then(onfetchSearch)
//         .catch(onfetchError); 
// };

// function onfetchSearch(countries) {

//      if (countries.length > 10) {
                
//                 Notify.info("Too many matches found. Please enter a more specific name.");
//                 onClearRender();

//             } else if (countries.length >= 2 && countries.length <= 10) {

//                 renderList(countries);
//                 cardCountry.innerHTML = '';
        
//             } else if (countries.length === 1) {
                
//                 renderCard(countries);
//                 listCountry.innerHTML = '';
//     }
// };


// function renderList(countries) {
//     const list = renderCountryList(countries);
//     listCountry.insertAdjacentHTML('beforeend', list);
// }

// function renderCard(countries) {
//     const card = renderCountryCard(countries);
//     cardCountry.insertAdjacentHTML('beforeend', card);
    
// }

// function onfetchError(error) {
//     Notify.failure("Oops, there is no country with that name");
//     onClearRender();
    
// }

// function onClearRender() {
//     listCountry.innerHTML = '';
//     cardCountry.innerHTML = '';
// };



// filmoteka------------------------





import makeFilmsMarkup from './filmsListMarkupTempl';
const ul = document.querySelector('.trending__collection');

const BASE_URL = 'https://api.themoviedb.org/3/';
const TRENDING = 'trending/movie/week';
const API_KEY = '1d8f1c2313e3ed4d118cc85bb96261b9';

getFetchTrending()
  .then(renderFilmsMarkup)
  .tnet(result => result.total)
        .catch((error) => console.log(error));

function getFetchTrending() {
       return fetch(`${BASE_URL}${TRENDING}?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`)
        .then(response =>
        response.json()
        )
         .then(data => {
           console.log(data.results);
         })
}

function renderFilmsMarkup(films) {
  ul.innerHTML = makeFilmsMarkup(films);
}



// function renderTrendingCard(films) {

//     const cardEl = films.map(film => {
//         return `<li class="trending__item">
//     <img class=" card__img" src="https://www.themoviedb.org/t/p/w500${film.poster_path}"
//       onerror="this.onerror=null;this.src='https://subscribenow.com.au/time/asia/Solo/Content/Images/noCover.gif'" loading="lazy"
//       alt="${film.title}" title="${film.title}" data-id="${film.id}" width="280"/>
// <h3 class="card__title">${film.title}</h3>
// <div class="card-field">
//     <p class="text__vote">${film.release_date}</p>
//     <p class="text__vote">${film.genre_ids}</p>
// </div>

// </li>`
        
//     }).join('');

//     ul.insertAdjacentHTML('beforeend', cardEl);


//     // return cardEl;
// };
