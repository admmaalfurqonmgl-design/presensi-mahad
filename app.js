const API = "https://script.google.com/macros/s/AKfycbx0VgtB87_Neim02g2TUaPpzGCeFN-KQNhXwONpBtdTObrORm4RsNGP8IJAgJfd03w/exec"

let namaUser=""

function login(){

fetch(API,{
method:"POST",
body:JSON.stringify({

action:"login",
username:document.getElementById("username").value,
password:document.getElementById("password").value

})

})

.then(r=>r.json())
.then(res=>{

if(res.status){

namaUser=res.nama

document.getElementById("login").style.display="none"

document.getElementById("menu").style.display="block"

document.getElementById("namaUser").innerText=res.nama

}

else{

alert("Login gagal")

}

})

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
