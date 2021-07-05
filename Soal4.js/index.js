const fetch = require('node-fetch') //  memanggil package node-fetch
fetch('https://jsonplaceholder.typicode.com/users') // mengambil data dari internet
    .then(res => res.json()) // mengecek response dari data tsb
    .then(json => {
        json.forEach(element => { 
            console.log (element.name) // memangill element nama 
        });
    });
