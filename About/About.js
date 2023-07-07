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
  