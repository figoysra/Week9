// Buatlah program menggunakan method fetch untuk menampilkan semua name (hanya name
// nya saja) dari REST API dibawah ini

// https://jsonplaceholder.typicode.com/users


const fetch = require('node-fetch') //  memanggil package node-fetch
fetch('https://jsonplaceholder.typicode.com/users') // mengambil data dari internet
    .then(res => res.json()) // mengecek response dari data tsb (expecting a json response)
    .then(json => {
        json.forEach(element => { 
            console.log (element.name) // memangill element nama 
        });
    })
    .catch(error=>{
        console.log("Error")
        });
