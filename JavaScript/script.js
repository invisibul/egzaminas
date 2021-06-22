let alertbutton = document.getElementById('mygtukas');
alertbutton.onclick = () => {
  validateForm();
}
function validateForm() {
  let name = document.forma.vardas.value;
  let email = document.forma.pastas.value;
  if (name != 0 && email != 0) {
    alert("Prenumerata sėkminga!");
  } else {
    alert("Būtina užpildyti visus laukus!");
  }
}
console.log("asdasf");
