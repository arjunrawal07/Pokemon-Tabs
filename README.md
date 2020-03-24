# Project-3-UI-Pattern

# # Pokémon Tabs = Gotta' Read Them All!

Welcome to the Pokémon Tabs!

This site mimicks a UI pattern for tabs.

The Pokémon displays four tabs that, when clicked, show information about four different Pokémon. Kind of like a Pokédex!

This site accesses data from the Pokémon API, a repository of information about Pokémon including abilities, moves, images, stats, and more!

The Pokémon API is structured like an object, with key-value pairs that store the information on each Pokémon.

Access the Pokémon API with the following URL:
[https://pokeapi.co/api/v2/pokemon/]

At the end of the URL insert a number to access a specific Pokémon. For example, to access Bulbasaur's information, store Bulbasaur's URL in the Pokémon object:

    ```
    name: "Bulbasaur",
    bio: "insert bio here",
    url: "https://pokeapi.co/api/v2/pokemon/1"
    ```

Each time the user clicks a tab, the website pulls data from the PokéAPI, specifically at the respecitve URL for each Pokémon when the user clicks its tab. The data pulled from the API includes the following for each Pokémon:

- front image
- back image
- primary abilities
- primary moves

Click each tab at the top to learn more about Bulbasaur, Squirtle, Charmander, and Beedrill!
