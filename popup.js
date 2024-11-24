document.getElementById('openPopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'block';
  });
  
  document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
  });
  
  // Fecha o popup ao clicar fora dele
  window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('popup')) {
      document.getElementById('popup').style.display = 'none';
    }
  });