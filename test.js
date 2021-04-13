const fetch = require('node-fetch');

fetch('https://swapi.dev/api/people/1')
    .then(response => response.json())
    .then(person => console.log(person));

    Promise.all(promises)
        .then((result) => {

        })
