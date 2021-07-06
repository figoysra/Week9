// Buatlah 2 program bebas dengan menggunakan promise seperti soal nomor

//program absensi kehadiran 
const Absensi = (student) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const dataStudents = ["Andi","Budi","Ari","Agus","Fandi"] // data murid 
            if (typeof student == "string"){ // digunakan untuk mengecek type data inputan
                const search = student.toLowerCase()  // gaya tulisan inputan dirubah menjadi huruf kecil semua
                let checkstudent = dataStudents.filter((e)=>{  // Mengecek inputan apakah ada di data murid
                    return e.toLowerCase() == search // = ['Ari'] => data berupa array
                })
                let str = checkstudent.join() // rubah data berupa array menjadi string atau texs => Ari

                if (checkstudent.length == 1){ // Cek banyaknya element array checkstudent == 1
                    let Absent = ["Andi"] // data absent (digunakan untuk menyimpan data absent pada hari ini) 
                    let kehadiran = Absent.filter((e)=>{ // mengecek apakah inputan sudah absent apa belum
                        return e == str // []
                    })
                    if (kehadiran.length == 0){ // kondisi inputan belum absent
                        Absent.push(str)    // menambahkan inputan ke data absent 
                        resolve ("Terimakasih") // hasil ketika berhasil absent
                    }else{  // kondisi inputan sudah absent
                        reject (new Error("Terimakasih, tapi maaf anda sudah absent kehadiran pada hari ini"))
                    }
                }else{ // kondisi terdapat banyaknya element lebih dari 1 atau 0
                    reject (new Error("Silahkan Coba Lagi atau Hubungi Call Center"))
                }
            }

            else{ //kondisi ketika inputan bertype bukan string
                reject (new Error("Masukan Nama anda Dengan Benar"))
            }
        }, 3000);
    })
}
Absensi("Ari").then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error.message)
})
