let pokemon = [ 
        {
          name: "Bulbasaur",
          bio: "Bulbasaur resembles a small, squatting dinosaur that walks on four legs, but bears three claws on each of its feet and has no tail. It also has large, red eyes and very sharp teeth. Its skin is a light, turquoise color with dark, green spots. It has three claws on all four of its legs. Its most notable feature, however, is the aforementioned bulb on its back, which according to its entry in the Pokédex, was planted there at birth. Bulbasaur has a 'bulb' on its back that grows steadily larger as it matures. This bulb contains a seed which uses photosynthesis to supply Bulbasaur with energy. Its bulb is also used to store the energy that the seed absorbs, which can be used when it is necessary. It is assumed that when a Bulbasaur collects enough energy in its bulb, it will evolve into an Ivysaur. Bulbasaur often rests in bright places so its bulb can absorb sunlight. It can be seen napping in bright sunlight. While it sleeps, the seed on its back catches the rays and uses the energy to grow.",
          url: "https://pokeapi.co/api/v2/pokemon/1"

        },
        {
          name: "Squirtle",
          bio: "Squirtle is a small, light-blue Pokémon with an appearance similar to a turtle. With its aerodynamic shape and grooved surface, Squirtle's shell helps it wade through the water very quickly. It also offers protection in battle. Like turtles, Squirtle has a shell that covers its body with holes that allow its limbs, tail, and head to be exposed. Unlike a turtle, Squirtle is ordinarily bipedal. Its shell is highly sturdy, and it can hide within its shell to protect itself from physical attacks. Squirtle is usually well behaved, yet it has an underlying rebellious streak. It likes to be open with only a limited number of people and won’t advertise its secrets. It prefers to stay within a close knit group, but can still enjoy making new friends. Other Pokémon may regard it as difficult and hard to get along with, but only if they have previously gotten on its bad side.",
          url: "https://pokeapi.co/api/v2/pokemon/7"

        },
        {
          name: "Charmander",
          bio: "Charmander is a small, bipedal, dinosaur-like Pokémon. Most of its body is colored orange, while its underbelly is a pale light-yellow color. Charmander, like its evolved forms, has a flame that constantly burns on the end of its tail. However, If the flame on Charmander's tail goes out, Charmander is known to die. The power of its flame attacks can be gauged by the size of the flame on its tail. Charmander is easily the most mild-mannered and well-behaved of its evolution line. Its feelings and emotions can be read by the flame on the tip of its tail. It flares up in a fury when Charmander is angry. If it growls that means it's angry or is about to attack.",
          url: "https://pokeapi.co/api/v2/pokemon/4"
        },
        {
          name: "Beedrill",
          bio: "Beedrill is an insect-like Pokémon with the appearance of a very large wasp. However, unlike a wasp, Beedrill only has four limbs, with the front-most limbs featuring two large, lance-like stingers. A third stinger is located on its tail end. The shiny version of a Beedrill is a light green color with blue eyes instead of red. They are aggressive Pokémon and collectively attack at the people. Beedrill are extremely territorial and will attack anyone who gets too close to their hive. Stay far away from a Beedrill nest. These territorial Pokémon will swarm any intruder in a furious attack. Beedrill has the ability Swarm, which increases any Bug-type attacks by 1.5 if the user's HP drops below 1/3 its max amount. According to the Pokédex, Beedrill can fly at great speeds and can attack in swarms. Additionally, its three stingers all secrete a toxic poison, with the stinger on its tail being the most venomous. Beedrill is the final evolution of Weedle and evolves from Kakuna at level 10. Beedrill gains a Mega Evolution in Omega Ruby and Alpha Sapphire.",
          url: "https://pokeapi.co/api/v2/pokemon/15"

        }
      ];
//Bios borrowed from: https://pokemon.fandom.com/wiki/

let pokemonDivs = document.querySelector(".tab");
let pokeText = document.querySelector(".pokeText")
let image = document.querySelector(".pokeImage");

for (let i = 0; i < pokemon.length; i++){
    let button = document.createElement("button");
    pokemonDivs.appendChild(button);
    button.classList = "more-info";
    button.innerHTML = pokemon[i].name;
    let biography = document.createElement("biography")
    biography.innerText = pokemon[i].bio;


let showPokemon = function (e){
    e.preventDefault();    
    fetch(pokemon[i].url)
    .then(res => res.json())
    .then(res => {
        image.setAttribute("src", res.sprites.front_default)
    })
    .catch(err => console.log("Oops! Pokeball unavailable. Try again!", err));
    pokeText.textContent = biography.innerText

}

button.addEventListener("click", showPokemon)

}









// let bulbasaur = document.querySelector(".buttonB");
// let squirtle = document.querySelector(".buttonS");
// let charmander = document.querySelector(".buttonC");
// let beedrill = document.querySelector(".buttonBee");

// let b = document.querySelector(".text");


// let showBulbasaur = (e) => {
// e.preventDefault();

// fetch(bURL)
//     .then(res => res.json())
//     .then(res => {
//         image.setAttribute("src", res.sprites.front_default)
//     })
//     .catch(err => console.log("Oops! Pokeball unavailable. Try again!", err));
//     b.textContent = pokemon[0].bio
// }

// let showSquirtle = (e) => {
//     e.preventDefault();
// fetch(sURL)
//         .then(res => res.json())
//         .then(res => {
//             image.setAttribute("src", res.sprites.front_default)
//         })
//         .catch(err => console.log("Oops! Pokeball unavailable. Try again!", err));
//         b.textContent = pokemon[1].bio
//     }

// let showCharmander = (e) => {
//     e.preventDefault();
//     fetch(cURL)
//         .then(res => res.json())
//         .then(res => {
//             image.setAttribute("src", res.sprites.front_default)
//         })
//         .catch(err => console.log("Oops! Pokeball unavailable. Try again!", err));
//         b.textContent = pokemon[2].bio

//     }

// let showBeedrill = (e) => {
//     e.preventDefault();
//     fetch(beeURL)
//         .then(res => res.json())
//         .then(res => {
//             image.setAttribute("src", res.sprites.front_default)
//         })
//         .catch(err => console.log("Oops! Pokeball unavailable. Try again!", err));
//         b.textContent = pokemon[3].bio


//     }

// bulbasaur.addEventListener("click", showBulbasaur)
// squirtle.addEventListener("click", showSquirtle)
// charmander.addEventListener("click", showCharmander)
// beedrill.addEventListener("click", showBeedrill)
