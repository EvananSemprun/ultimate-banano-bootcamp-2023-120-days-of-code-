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