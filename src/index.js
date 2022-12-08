import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import API from './fetchCountries';
import { renderCountryList, renderCountryCard } from "./render-function";



const DEBOUNCE_DELAY = 300;

const inputSearch = document.querySelector('#search-box');
const listCountry = document.querySelector('.country-list');
const cardCountry = document.querySelector('.country-info');

inputSearch.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY));


function onInputSearch(e) {
    e.preventDefault();

    const query = inputSearch.value.trim();
    

    API.fetchCountries(query)
        .then(countries => {

            if (countries.length > 10) {
                Notify.info("Too many matches found. Please enter a more specific name.");
                clearInputValue();

            } else if (countries.length >= 2 && countries.length <= 10) {

                renderList(countries);
                cardCountry.innerHTML = '';
        
            } else if (countries.length === 1) {
                
                renderCard(countries);
                listCountry.innerHTML = '';
            }
        })
        .catch(error => {
            Notify.failure("Oops, there is no country with that name");
            clearInputValue();
        });
    
};

function renderList(countries) {
    const list = renderCountryList(countries);
    listCountry.innerHTML = list;
}

function renderCard(countries) {
    const card = renderCountryCard(countries);
    cardCountry.innerHTML = card;
    
}

function clearInputValue() {
    listCountry.innerHTML = '';
    cardCountry.innerHTML = '';
};
