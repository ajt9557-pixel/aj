document.addEventListener("DOMContentLoaded", function () {
  const goToConverterBtn = document.getElementById('goToConverterBtn');
  const nameInput = document.getElementById('name');
  const h1 = document.getElementById('h1');

  goToConverterBtn.addEventListener('click', goNext);

  function goNext() {
    let name = nameInput.value.trim();

    if (!name) {
      h1.textContent = "Please enter your name first!";
      return;
    }

    localStorage.setItem("name", name);
 
  window.location.href = "converter.html"; 
  }
  
});

