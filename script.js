const baseURL = "https://pokeapi.co/api/v2/";

let tab1 = document.querySelector(".tab1");


let showPokemon = (e) => {
    let inputValue = e.target.elements[0].value
    let fullURL = `${baseURL}pokemon/${inputValue}`;

fetch(fullURL)
    .then(res => res.json())
    .then(res => {
        let grabMainBox = document.getElementsByClassName(".mainbox");
        let pokeImg = document.querySelector(".image");
        pokeImg.setAttribute("src", res[0].url)
        grabMainBox.appendChild(pokeImg);
    })
    
    .catch(err => console.log("Oops! Pokeball unavailable. Try again!", err));


}

    // fetch(fullURL)
    //     .then(res => res.json())
    //     .then(res => {
    //         let grabBody = document.querySelector('body')
    //         let createHeader = document.createElement('h1')

    //         createHeader.innerHTML = res.name
    //         grabBody.appendChild(createHeader)
    //     })

tab1.addEventListener("click", showPokemon)
