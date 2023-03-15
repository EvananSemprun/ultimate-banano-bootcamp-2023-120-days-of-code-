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
  var i = 0;
  function move1() {
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBar");
      var width = 0;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 90) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width  + "%";
        }
      }
    }
  }

  function move2() {
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBarc");
      var width = 0;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 65) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width  + "%";
        }
      }
    }
  }

  function move3() {
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBarj");
      var width = 0;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 50) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width  + "%";
        }
      }
    }
  }

  