const titles = ["Game Developer", "Backend Developer", "AI Developer", "Script Writer"];
let currentTitleIndex = 0;
const titleElement = document.getElementById("dynamic-title");

function changeTitle() {
  currentTitleIndex = (currentTitleIndex + 1) % titles.length;
  titleElement.textContent = titles[currentTitleIndex];
}

// Change title every 3 seconds
setInterval(changeTitle, 3000);
