const e=document.querySelector("#search-box");document.querySelector(".country-list"),document.querySelector(".country-info");e.addEventListener("input",(function(e){e.preventDefault(),fetch("https://restcountries.com/v3.1/name/name").then((e=>{e.json()})).then((e=>{console.log(e)}))}));
//# sourceMappingURL=index.f8b70b6d.js.map
