function getPokemonTypes() {
    //https://pokeapi.co/api/v2/type
    fetch('https://pokeapi.co/api/v2/type')
        .then(response => response.json())
        .then(data => console.log(data));
}