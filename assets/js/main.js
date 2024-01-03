const input = document.getElementById("input") // take url
const attackBtn = document.getElementById("attackBtn")

function openModal() {
  const modal = document.getElementById('aboutModal');
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('aboutModal');
  modal.style.display = 'none';
}

document.querySelector('a[href="#AboutUs"]').addEventListener('click', openModal);

function pInput() {
     var rd = document.getElementById("rd")
     rd.setAttribute("src", input.value);
}