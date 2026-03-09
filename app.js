const API = "https://script.google.com/macros/s/AKfycbzKW7xI2PnGTxRQjme_tR3vQUKl25jlFnEpDm2UG6NuHwJZG84Wqs86YD9nybYfN27r/exec"

let namaUser=""

function login(){

let user = document.getElementById("username").value
let pass = document.getElementById("password").value

if(user && pass){

localStorage.setItem("user",user)

window.location="dashboard.html"

}
else{

alert("Isi username dan password")

}

}

function presensi(jenis){

navigator.geolocation.getCurrentPosition(pos=>{

fetch(API,{
method:"POST",
body:JSON.stringify({

action:"presensi",
nama:namaUser,
jenis:jenis,
jam:new Date().toLocaleTimeString(),
lat:pos.coords.latitude,
lng:pos.coords.longitude

})

})

alert("Presensi berhasil")

})

}

function izin(){

let jenis = prompt("Jenis izin")

let ket = prompt("Keterangan")

fetch(API,{
method:"POST",
body:JSON.stringify({

action:"izin",
nama:namaUser,
jenis:jenis,
keterangan:ket

})

})

alert("Izin terkirim")

}

function presensiKelas(){

let mk = prompt("Mata Kuliah")

let judul = prompt("Judul Pembelajaran")

let status = prompt("Status hadir/izin/sakit/alpha")

fetch(API,{
method:"POST",
body:JSON.stringify({

action:"kelas",
mk:mk,
judul:judul,
nama:namaUser,
status:status,
dosen:namaUser

})

})

alert("Presensi kelas tersimpan")


}

.then(res=>{

if(res.status){

alert("Presensi berhasil\n"+res.statusPresensi+"\n"+res.keterangan)

}

else{

alert(res.message)

}

})



