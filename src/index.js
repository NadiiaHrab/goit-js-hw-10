import './css/styles.css';

const DEBOUNCE_DELAY = 300;



import API from './fetchCountries';

const inputSearch = document.querySelector('#search-box');
const listCountry = document.querySelector('.country-list');
const infoAboutCountry = document.querySelector('.country-info');

inputSearch.addEventListener('input', onInputSearch);


function onInputSearch(e) {
    e.preventDefault();


}



// function renderCountryList(name) {
//   const markup = listCountryCard(name);
//   listCountry.innerHTML = markup;
// }


//     function fetchCountries(name) {
//         const urlAPI = `https://restcountries.com/v3.1/name/${name}`
//         fetch(urlAPI)
//             .then(response => response.json())
//             .then(({list})=> {
//                 render(list)
//                     .catch(error => console.log(error));
//     })
//     }

// function render(list) {
//     listCountry.innerHTML = '';
//     list.forEach(({name}) => {
//         const listEl = `<li>
//         <p class="country-name"${name}<p/>
//        <li/>;
//        ` 
//         listCountry.insertAdjacentHTML('beforeend', listEl);
//     }); 
    
//     }


