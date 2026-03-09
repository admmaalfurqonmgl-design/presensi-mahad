const API = "https://script.google.com/macros/s/AKfycbzKW7xI2PnGTxRQjme_tR3vQUKl25jlFnEpDm2UG6NuHwJZG84Wqs86YD9nybYfN27r/exec"

let namaUser=""

function login(){

let user = document.getElementById("username").value
let pass = document.getElementById("password").value

fetch(API,{
method:"POST",
body:JSON.stringify({
action:"login",
username:user,
password:pass
})
})
.then(r=>r.json())
.then(res=>{

if(res.status){

namaUser = res.nama

localStorage.setItem("nama",res.nama)

window.location="dashboard.html"

}
else{

alert("Login gagal")

}

})

}

function presensi(jenis){

alert("Presensi "+jenis)

}

function izin(){

alert("Izin berhasil dikirim")

}

function presensiKelas(){

alert("Presensi kelas")

}
