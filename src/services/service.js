let getPokemonTypes = async () => {

    let url = "https://pokeapi.co/api/v2/type";
    const options = { method: "GET" };

    await fetch(url, options)
    .then((response) => response.json())
    .then((response) => (data = response))
    .catch((err) => console.error(err));

    return data;
};

let buildTableAllTypes = async () => {
    // let $tableAllTypes = document.getElementById('tableAllTypes');
    let typesList = document.querySelector('#typesList')
    let typeItem;

    let response = await getPokemonTypes();

    response.results.forEach((type) => {
        typeItem = document.createElement('li')
        typeItem.appendChild(document.createTextNode(type.name))

        typesList.appendChild(typeItem)
    })
}
