let angka_1,angka_2,hasil;

document.getElementById("button_jumlah").onclick = function(){
  angka_1 = document.getElementById("angka_1").valueAsNumber;
  console.log(typeof angka_1);
  angka_2 = document.getElementById("angka_2").valueAsNumber;
  
  hasil = parseFloat(angka_1) + angka_2;
  
  console.log(typeof hasil);
  
  document.getElementById("hasil").textContent = hasil;
}