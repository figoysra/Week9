// Buatlah sambungan program menggunakan then catch dan juga try catch untuk mengecek hari kerja
// dari kode Asynchronous dibawah dan jelaskan penggunaan then catch dan try catch dengan
// memberikan komentar di bawahnya:

// Synchronous = perintah dieksekusi satu persatu sesuai urutan kode yang anda tuliskan
// Asynchronous = hasil eksekusi atau output tidak selalu berdasarkan urutan kode,
// tetapi berdasarkan waktu proses

const cekharikerja = (day) =>{
    return new Promise((resolve,reject)=>{ //sebuah janji keberhasilan dan kegagalan sebuah async
        setTimeout(() => {
            const dataDay = ["senin","selasa","rabu","kamis","jum'at"] // data hari kerja
            let cek = dataDay.find((item)=>{ // mengecek inputan apakah sama dengan salah satu data hari kerja
                return item === day // senin
            })
            if (cek){ // kondisi ketika inputan terdapat di data hari kerja 
                resolve(cek)
            }else{
                reject(new Error("Hari ini bukan hari kerja")) // kondisi ketika inputan tidak terdapat di data hari kerja
            }
        }, 3000); 
    })
}

cekharikerja("senin").then((result)=>{ //menangkap ketika benar /resolve
    console.log(result)
}).catch((error)=>{ // menangkap ketika error / reject 
    console.log(error.message)
})
