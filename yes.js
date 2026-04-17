
function getRandomPosition() {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * -500; 
    return [x, y];
  }
  function showSurprise() {
    document.getElementById("loveImage").style.display = "none";
    document.getElementById("poem").style.display = "block";
}
  
  var stringsArray = ["yummss", "💙", "🎊🎊"];
  function getRandomString() {
    var randomIndex = Math.floor(Math.random() * stringsArray.length);
    return stringsArray[randomIndex];
  }

  var numInstances = 25;
  
  
  var container = document.getElementById('pleases-container');
  
  
  for (var i = 0; i < numInstances; i++) {
    var please = document.createElement('h3');
    please.textContent = getRandomString();
    please.classList.add('please');
    container.appendChild(please);
  
    var position = getRandomPosition();
    please.style.left = position[0] + 'px';
    please.style.top = position[1] + 'px';
  
    
    please.animate(
      [
        { transform: 'translateY(' + position[1] + 'px)' },
        { transform: 'translateY(' + window.innerHeight + 'px)' }
      ],
      {
        duration: 5000, 
        easing: 'linear', 
        fill: 'forwards' 
      }
    );
  }
  const audio = document.getElementById("voiceNote");

document.body.addEventListener("click", () => {
  audio.play();
}, { once: true });
function submitForm() {
    var form = document.getElementById('confessionForm');
    var formData = new FormData(form);
  
    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      alert('Same to you'); 
      form.reset(); 
    })
    .catch(error => {
      console.error('There was a problem with your submission:', error.message);
      alert('There was a problem with your submission. Please try again.'); // Display error message
    });
  }
  
  
