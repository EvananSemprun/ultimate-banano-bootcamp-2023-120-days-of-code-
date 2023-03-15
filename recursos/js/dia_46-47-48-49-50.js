window.addEventListener('resize', function(event){
    adjustCardHeight();
  });
  
  function adjustCardHeight() {
    var cards = document.querySelectorAll('.card');
    var maxHeight = 0;
    
    cards.forEach(function(card) {
      card.style.height = 'auto';
      
      if (card.offsetHeight > maxHeight) {
        maxHeight = card.offsetHeight;
      }
    });
    
    cards.forEach(function(card) {
      card.style.height = maxHeight + 'px';
    });
  }
  
  adjustCardHeight();

  //---------------
  var bar = document.querySelector('.bar');
  var button = document.querySelector('.bh');
  var percent = document.querySelector('.percent');
  
  // Define el porcentaje de progreso inicial y la cantidad a incrementar por ciclo
  var progress = 0;
  var increment = 5;
  
  // Función para actualizar la barra de progreso y el porcentaje
  function updateProgress() {
    progress += increment;
    if (progress > 90) {
      progress = 90;
    }
    bar.style.width = progress + '%';
    percent.textContent = progress + '%';
    if (progress < 100) {
      setTimeout(updateProgress, 500);
    } else {
      button.disabled = false;
    }
  }
  
  // Función para iniciar el progreso
  function startProgress() {
    progress = 0;
    button.disabled = true;
    updateProgress();
  }