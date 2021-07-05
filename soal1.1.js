const cekharikerja = (day) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const dataDay = ["senin","selasa","rabu","kamis","jum'at"] // data hari kerja
            let cek = dataDay.find((item)=>{ // mengecek inputan apakah sama dengan data hari kerja
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
const resultharikerja = async()=>{
    try {
        const result = await cekharikerja("senin") //menunggu proses pengecekan
        console.log(result) // menampilkan hasil sesuai kondisi
    } catch (error) {
        console.log(error.message)
    }
}
resultharikerja()
