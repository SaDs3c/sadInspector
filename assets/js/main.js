console.log('Script beginnings execution here.');


// Variables
let OfficialName = "Sad Inspector"
let urlLogs = [];

// Grab DOMs
const url_input = document.querySelector("[data-url-input]"); 
const attack_btn = document.querySelector("[data-attack-btn]");
const toolkit_btn = document.querySelector("[data-toolkit-btn]");
const extract_url = document.querySelector("[data-extract-url]")
const view_source = document.querySelector("[data-view-source]")
const about_us = document.querySelector("[data-about-us]")
const web_view = document.querySelector("[data-web-view]");


// Event Listeners
attack_btn.addEventListener("click", () => {
  if (url_input.value.trim() === '') {
    alert('No input given');
  } else {
    web_view.setAttribute("src", url_input.value);
  }
});
extract_url.addEventListener("click", () => {
  alert("Extract urls");
});
view_source.addEventListener("click", () => {
  alert("View Source Code");
});
toolkit_btn.addEventListener("click", () => {
  alert("Shield 🛡️");
});
about_us.addEventListener("click", openModal);



// Functions
function openModal() {
  const modal = document.getElementById('aboutModal');
  modal.style.display = 'block';
}
function closeModal() {
  const modal = document.getElementById('aboutModal');
  modal.style.display = 'none';
}


console.log('Script conclude execution here.');