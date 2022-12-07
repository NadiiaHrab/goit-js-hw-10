
// function onInputSearch(e) {
//     e.preventDefault();
//     // const query = inputSearch.value;
//     // console.log(query);

//     // fetchCountries({ name: inputSearch.value });

//     // const urlAPI = `https://restcountries.com/v3.1/name/${name}`;

//     fetch('https://restcountries.com/v3.1/name/name')
//         .then(response => {
//             response.json();
//         })
//         .then(name => {
//             console.log(name);
//     })
// };


 


// function renderCountryList(name) {
    // name.forEach(({name, flags}) => {
    //     const listEl = `<li class="country__item">
    // <img class="country__img" src="${flags.svg}" alt="flags" width="100"/>
    // <p class="country__name">${name.official}<p/>
    // <li/>`
        
    //     listCountry.insertAdjacentHTML('beforeend', listEl);
    // });

//     const listEl = name.map(({ name, flags }) => {
//         return `<li class="country__item">
//     <img class="country__img" src="${flags.svg}" alt="flags" width="100"/>
//     <p class="country__name">${name.official}<p/>
//     <li/>`
//     });

//     listCountry.insertAdjacentHTML('beforeend', listEl.join(''));
// }

// function renderCountryCard({ name, capital, population, flags, languages }) {
//     return 
//     `<div class="country-card">
//     <img class="country-card__img" src="${flags.svg}" alt="flags"/>
//     <p class="country-card__name">${name.official}<p/>
    
//     <div class="about-country">
//     <p class="about-country__text">Capital: ${capital}</p>
//     <p class="about-country__text">Population: ${population}</p>
//     <p class="about-country__text">language: ${languages}</p>
//     </div>

//     <div/>`


// };
