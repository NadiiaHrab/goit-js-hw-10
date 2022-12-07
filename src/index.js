import './css/styles.css';
import fetchCountries from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const inputSearch = document.querySelector('#search-box');
const listCountry = document.querySelector('.country-list');
const infoAboutCountry = document.querySelector('.country-info');

inputSearch.addEventListener('input', onInputSearch);


function onInputSearch(e) {
    e.preventDefault();
    const query = inputSearch.value;
    
    
};


function renderCountryList(name) {
    
    const listEl = name.map(({ name, flags }) => {
    return `<li class="country__item">
    <img class="country__img" src="${flags.svg}" alt="flags" width="100"/>
    <p class="country__name">${name.official}<p/>
    <li/>`
    });

    listCountry.insertAdjacentHTML('beforeend', listEl.join(''));
}

function renderCountryCard(name) {
    const cardEl = name.map(({ name, capital, population, flags, languages }) => {
        return
         `<div class="country-card">
    <img class="country-card__img" src="${flags.svg}" alt="flags"/>
    <p class="country-card__name">${name.official}<p/>
    
    <div class="about-country">
    <p class="about-country__text">Capital: ${capital}</p>
    <p class="about-country__text">Population: ${population}</p>
    <p class="about-country__text">language: ${languages}</p>
    </div>

    <div/>`

    });
    
    infoAboutCountry.insertAdjacentHTML('beforeend', cardEl.join(''));
};
