const fetch = require('node-fetch');

const getPerson = id => {
return fetch(`https://swapi.dev/api/people/${id}`, {})
    .then(response => response.json())
// .then(person => console.log(person))
}

const getHomeWorld = person => {
    const homeWorld = person.homeworld;
    return fetch(homeWorld)
    .then(response => response.json())
    // .then(json => console.log(json))
}

const getFilm = person => {
    console.log(person.films);
    const film = Promise.all(person.films.map(url => fetch(url).then(res => res.json())));
    return film
        .then(result => console.log(result));
}

getPerson(1)
    .then(response => getHomeWorld(response)
    .then((response2) => console.log(response2)))

getPerson(1)
    .then(response => getFilm(response))
    .then(response2 => console.log(response2))
