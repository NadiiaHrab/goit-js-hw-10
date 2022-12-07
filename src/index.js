import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetchCountries';


const DEBOUNCE_DELAY = 300;

const inputSearch = document.querySelector('#search-box');
const listCountry = document.querySelector('.country-list');
const infoAboutCountry = document.querySelector('.country-info');

inputSearch.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY));


function onInputSearch(e) {
    e.preventDefault();

    const query = inputSearch.value.trim();
    console.log(query);

    fetchCountries(query)
        .then(countries => {
            if (countries.length > 10) {
                Notify.info("Too many matches found. Please enter a more specific name.");


            } else if (countries.length >= 2 && countries.length <= 10) {
                renderCountryList(countries);
                infoAboutCountry.innerHTML = '';

            } else if (countries.length === 1) {
                renderCountryCard(countries);
                listCountry.innerHTML = '';
            }
        })
        .catch(error => { Notify.failure("Oops, there is no country with that name") });
    
};



function renderCountryList(countries) {
    
    const listEl = countries.map(country => {
        return `<li class="country__item">
    <img class="country__img" src="${country.flags.svg}" alt="flags" width="100"/>
    <p class="country__name">${country.name.official}<p/>
    <li/>`
    })
        .join('');

    listCountry.innerHTML = listEl;
};

function renderCountryCard(countries) {
    const cardEl = countries.map(({ name, capital, population, flags, languages }) => {
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
