const textElement = document.getElementById('text');
const cursorElement = document.getElementById('cursor');
const userInput = document.getElementById('userInput');
const changeTextBtn = document.getElementById('changeText');

let textArray = ['Welcome to Auto Text Generator!', 'Learn JS!'];
let index = 0;
let textIndex = 0;
let isDeleting = false;
let speed = 150;

// Function to type text
function autoText() {
  let currentText = textArray[textIndex];

  textElement.innerHTML =
    currentText.slice(0, index) + '<span id="cursor">|</span>';

  if (!isDeleting) {
    index++;
  } else {
    index--;
  }

  if (index > currentText.length) {
    isDeleting = true;
    setTimeout(autoText, 1000);
  } else if (index === 0 && isDeleting) {
    isDeleting = false;
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(autoText, 500);
  } else {
    setTimeout(autoText, speed);
  }
}

// Function to change text
changeTextBtn.addEventListener('click', () => {
  const newText = userInput.value.trim();
  if (newText) {
    textArray.push(newText);
    userInput.value = '';
  }
});

autoText();
