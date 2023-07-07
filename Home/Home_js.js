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

// moreless
function toggleDiv() {
  if (window.matchMedia('(max-width: 768px)').matches) {
    const div = document.getElementById('hiddenDiv');
    div.classList.toggle('hidden');

    const button = document.querySelector('.more');
    const buttonText = button.firstChild;
    const icon = button.querySelector('.icon');

    if (buttonText.nodeValue === 'More') {
      buttonText.nodeValue = 'Less';
      icon.src = '/images/up.png';
    } else {
      buttonText.nodeValue = 'More';
      icon.src = '/images/down.png';
    }
  }
}
toggleDiv();