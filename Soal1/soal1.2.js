
const cekharikerja = (day) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const dataDay = ["senin","selasa","rabu","kamis","jum'at"]
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if (cek){
                resolve(cek)
            }else{
                reject(new Error("Hari ini bukan hari kerja"))
            }
        }, 3000);
    })
}
const resultharikerja = async()=>{ // mengubah function menjadi synchronous
    try {
        const result = await cekharikerja("senin") //menunda eksekusi hingga proses asynchronous selesai
        console.log(result) // menampilkan hasil sesuai kondisi
    } catch (error) {
        console.log(error.message)
    }
}
resultharikerja()