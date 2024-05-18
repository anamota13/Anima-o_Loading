document.addEventListener("DOMContentLoaded", () => {
  const loadElement = document.querySelector(".loading .load");
  const continueButton = document.getElementById("continue-button");

  loadElement.addEventListener("animationiteration", () => {
    continueButton.style.display = "block";
    loadElement.style.display = "none";
  });
});
