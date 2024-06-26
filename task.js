// task.js

document.addEventListener("DOMContentLoaded", () => {
  const arrowKey = document.querySelector(".arrow-key");
  const threadContent = document.querySelector(".box-thread-content");
  arrowKey.addEventListener("click", () => {
    if (
      threadContent.style.display === "none" ||
      threadContent.style.display === ""
    ) {
      threadContent.style.display = "block";
      arrowKey.innerHTML = "&#9650;";
    } else {
      threadContent.style.display = "none";
      arrowKey.innerHTML = "&#9660;";
    }
  });
});
function toggleSAContent() {
  const saContent = document.querySelector(".sa-content");
  saContent.classList.toggle("hidden");
  const arrow = document.querySelector(".intro .arrow-key");
  arrow.textContent = arrow.textContent === "▼" ? "▲" : "▼";
}

function toggleSecondContent() {
  const secondContent = document.querySelector(".second-content");
  secondContent.classList.toggle("hidden");
  const arrow = document.querySelector(".SA-second-box .arrow-key");
  arrow.textContent = arrow.textContent === "▼" ? "▲" : "▼";
}
