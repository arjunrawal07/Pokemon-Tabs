const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

fetch(baseUrl)
    .then(res => res.json())
    .then(res => {
        console.log("success", res)
    })
    .catch(err => console.log("Oops! Pokeball unavailable. Try again!", err));


