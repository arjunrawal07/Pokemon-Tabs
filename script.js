const baseURL = "https://pokeapi.co/api/v2/pokemon/1";

let bulbasaur = document.querySelector(".buttonB");

let image = document.querySelector(".pokeImage");

let h1 = document.querySelector("h1");

let showPokemon = (e) => {

fetch(baseURL)
    .then(res => res.json())
    .then(res => {
        console.log("success",res)
        image.setAttribute("src", res.sprites.front_default)
        h1.appendChild(image);
    })
    
    .catch(err => console.log("Oops! Pokeball unavailable. Try again!", err));


}
bulbasaur.addEventListener("click", showPokemon)
