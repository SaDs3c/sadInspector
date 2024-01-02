// Add these functions to handle the modal
function openModal() {
  const modal = document.getElementById('aboutModal');
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('aboutModal');
  modal.style.display = 'none';
}

// ... your existing JavaScript ...

// Add a listener to the "About Us" menu item
document.querySelector('a[href="#AboutUs"]').addEventListener('click', openModal);
