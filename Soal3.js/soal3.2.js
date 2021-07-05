// program mencari buku dan lokasi lemari buku di perpustakaan

const library = (book) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const dataBook = require ("./libraryBook.js") //mengambil data buku perputakaan
            if (typeof book == "string"){ // mengecek type data inputan
                const search = book.toLowerCase() // merubah gaya tulisan inputan menjadi huruf kecil semua
                let cek = dataBook.filter((e)=>{  // mengecek inputan apakah ada di data buku perpustakaan
                    return e.book.toLowerCase().includes(search) // [{book    : "Dillan 1940", bookcase: "3A.02"}]
                })
                
                if (cek.length >= 1){ // kondisi inputan terdapat di data buku perpustakaan
                    resolve (cek) // menampilkan hasil dari variabel cek 
                }else{ // kondisi inputan tidak terdapat di data buku perpustakaan
                    reject(new Error("Maaf, Buku ini tidak tersedia di perpustakaan kita"))
                }
                
            }else{  // kondisi ketika type data inputan tidak berupa string / teks
                reject (new Error("Masukan kata pencarian dengan benar"))
            }
        }, 3000);
    })
}
library("Dillan").then((result)=>{
    result.forEach(element => { // hasil variabel cek di rubah menjadi string / teks
        console.log (`${element.book} ada di lemari Buku no ${element.bookcase}`)  
    });
}).catch((error)=>{
    console.log(error.message)
})
