function renderCountryList(countries) {

    const listEl = countries.map(country => {
        return `<li class="country__item">
    <img class="country__img" src="${country.flags.svg}" alt="flags" width="100"/>
    <p class="country__name">${country.name.official}<p/>
    <li/>`
    })
        .join('');
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

    </div>`

    })
        .join('');
};

export { renderCountryList, renderCountryCard };