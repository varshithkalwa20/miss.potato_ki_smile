// Function to generate a random position at the top of the page
function getRandomPosition() {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * -500; // Start from above the viewport
  return [x, y];
}

var stringsArray = ["Plzz", "🥺🥺", "😭😭"];
function getRandomString() {
  var randomIndex = Math.floor(Math.random() * stringsArray.length);
  return stringsArray[randomIndex];
}

// Number of instances of "please"
var numInstances = 30;

// Get the container where "please" elements will be added
var container = document.getElementById('pleases-container');

// Create and move instances of "please"
for (var i = 0; i < numInstances; i++) {
  var please = document.createElement('h3');
  please.textContent = getRandomString();
  please.classList.add('please');
  container.appendChild(please);

  // Set initial random position
  var position = getRandomPosition();
  please.style.left = position[0] + 'px';
  please.style.top = position[1] + 'px';

  // Apply animation to move "please" downwards
  please.animate(
    [
      { transform: 'translateY(' + position[1] + 'px)' },
      { transform: 'translateY(' + window.innerHeight + 'px)' }
    ],
    {
      duration: 5000, // Animation duration (5 seconds)
      easing: 'linear', // Linear easing
      fill: 'forwards' // Keep the final state of the animation
    }
  );
}
