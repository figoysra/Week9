const getmonth = (callback) =>{
    setTimeout(() => {
        let error = false // data error
        let month = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
        if(!error){ //mengecek apakah error atau tidak
            callback(null,month) // menampilkan null dan bulan 
        }
        else{ // kondisi ketika error
            callback(new Error("Sorry Data Not Found",[]))
        }
    }, 1000);
}
getmonth((param1,param2)=>{
    if (param1== null) { // mengecek parameter 1 == null 
        cek = param2.map((e)=>{ // membuat array baru dari data month
            return e
        })
        console.log(cek) //menampilkan array baru
    }else{ // kondisi param 1 bukan null
        console.log(param1.message)  //menampilkan pesan error 
    }
})

