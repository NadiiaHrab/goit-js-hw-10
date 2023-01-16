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
import {Spinner} from 'spin.js';
import makeFilmsMarkup from './filmsListMarkupTempl';


const  opts = {
  lines: 13, // The number of lines to draw
  length: 38, // The length of each line
  width: 17, // The line thickness
  radius: 45, // The radius of the inner circle
  scale: 1, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 1, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: 'grey', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};

new Spinner(opts)
    .spin(document.getElementById('trending__collection'));


const ul = document.querySelector('#trending__collection');
const btn = document.querySelector('#btn-youT');

const BASE_URL = 'https://api.themoviedb.org/3/';
const TRENDING = 'trending/movie/week';
const API_KEY = '1d8f1c2313e3ed4d118cc85bb96261b9';



getFetchTrending().then(() => { 


  window.scrollTo({ top: 0, behavior: 'smooth' });

})



function getFetchTrending() {
  return fetch(
    `${BASE_URL}${TRENDING}?api_key=${API_KEY}&language=en-US&&include_adult=false`
  )
    .then(response => response.json())
    .then(data => {
      // console.log(data);
       data.total_results;
      // console.log(data.total_results);
      // console.log(data.results);
      return data.results;
    }).then(renderFilmsMarkup)
    .catch(error => console.log(error));
}

function renderFilmsMarkup(films) {
  ul.innerHTML = makeFilmsMarkup(films);
}




  

// function getFetchYouTueb() {
//   return fetch(
//     `${BASE_URL}movie/${id}/videos?api_key=${API_KEY}&language=en-US&include_adult=false`
//   )
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       //  data.total_results;
//       // console.log(data.total_results);
//       // console.log(data.results);
//       return data.results;
//     })
//     .catch(error => console.log(error));
// }
// btn.addEventListener('click', (e) => {
// getFetchYouTueb()
// });


