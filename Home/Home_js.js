// mobmenu
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("mobmenu").addEventListener("click", function () {
    document.getElementById("menu").style.display = "block";
  });

  document.querySelector("#menu .exit").addEventListener("click", function () {
    document.getElementById("menu").style.display = "none";
  });

  var menuItems = document.querySelectorAll("#menu .menu_item a");
  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      document.getElementById("menu").style.display = "none";
    });
  });
});

// moreless
function toggleDiv() {
  if (window.matchMedia("(max-width: 768px)").matches) {
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
}

