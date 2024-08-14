//LIGHT AND DARK THEME TOGGLE FUNCTION
// Retrieve checkbox state from local storage when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('checkbox');
    const checkboxState = localStorage.getItem('checkboxState');
  
    if (checkboxState === 'checked') {
      checkbox.checked = true;
      document.body.classList.add('dark-theme');
      icon.src = "image/sun_image.png";
    }
  
    // Update local storage and toggle dark mode when checkbox state changes
    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        localStorage.setItem('checkboxState', 'checked');
        document.body.classList.add('dark-theme');
      icon.src = "image/sun_image.png";
      } else {
        localStorage.removeItem('checkboxState');
        document.body.classList.remove('dark-theme');
        icon.src = "image/moon-solid.svg";
      }
    });
  
  });