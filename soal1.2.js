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
cekharikerja("senin").then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error.message)
})
