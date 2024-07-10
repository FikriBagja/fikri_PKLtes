let sub = document.getElementById("sub");
sub.style.border = "none";
sub.style.padding = "10px";

function masuk() {
  sub.style.background = "blue";
  sub.style.color = "white";
}

function keluar() {
  sub.style.background = "";
  sub.style.color = "black";
}

function tampilkanKotak() {
  const elemenbentuk = document.getElementById("bentuk");
  elemenbentuk.style.display = "block";
}

let bentukArray = [
  { backgroundColor: "gray", borderRadius: "0" },
  { borderRadius: "50%" },
  { borderRadius: "0" },
  { borderRadius: "50%" },
];

let i = 0;
function ubahbentuk() {
  let warna1 = document.getElementById("warna1").value;
  let warna2 = document.getElementById("warna2").value;
  let warna3 = document.getElementById("warna3").value;

  bentukArray[1].backgroundColor = warna1;
  bentukArray[2].backgroundColor = warna2;
  bentukArray[3].backgroundColor = warna3;

  i = (i + 1) % bentukArray.length;
  const elemenbentuk = document.getElementById("bentuk");
  const bentukBerikutnya = bentukArray[i];
  elemenbentuk.style.backgroundColor = bentukBerikutnya.backgroundColor;
  elemenbentuk.style.borderRadius = bentukBerikutnya.borderRadius;
}