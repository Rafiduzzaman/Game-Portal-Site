function toggleDiv() {
  var div = document.getElementById("hiddenDiv");
  div.classList.toggle("hidden");

  var button = document.querySelector(".more");
  var buttonText = button.firstChild;
  var icon = button.querySelector(".icon");

  if (buttonText.nodeValue === "More") {
    buttonText.nodeValue = "Less";
    icon.src = "/images/up.png";
  } else {
    buttonText.nodeValue = "More";
    icon.src = "/images/down.png";
  }
}
