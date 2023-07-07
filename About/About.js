// mobmenu
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('mobmenu').addEventListener('click', () => {
    document.getElementById('menu').style.display = 'block';
  });

  document.querySelector('#menu .exit').addEventListener('click', () => {
    document.getElementById('menu').style.display = 'none';
  });

  const menuItems = document.querySelectorAll('#menu .menu_item a');
  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      document.getElementById('menu').style.display = 'none';
    });
  });
});
