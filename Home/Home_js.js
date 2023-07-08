

// mobmenu
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('Jp');

  function handleButton() {
    if (window.matchMedia('(max-width: 768px)').matches) {
      button.textContent = 'Join Gamers Summit 2015';
    } else {
      button.textContent = 'SEE THE WHOLE PROGRAM';
    }
  }

  // Initial check on page load
  handleButton();

  // Add event listener for window resize
  window.addEventListener('resize', handleButton);

  
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

document.addEventListener('DOMContentLoaded', () => {
  const sponsorData = [
    {
      name: 'Ubisoft',
      imageSrc: '/images/ubisoft.png',
      description: 'Ubisoft is a video game developer and publisher',
      additionalDescription: 'Ubisoft has studios located worldwide, including in Montreal, Toronto, Paris, Milan, and Shanghai.',
    },
    {
      name: 'Intel',
      imageSrc: '/images/intel.png',
      description: 'Intel is a semiconductor company',
      additionalDescription: "Intel's influence extends beyond the consumer and enterprise computing markets.",
    },
  ];
  const container = document.querySelector('.r1');

  sponsorData.forEach((sponsor) => {
    const sponsorDiv = document.createElement('div');
    sponsorDiv.className = 'sponsor';

    const image = document.createElement('img');
    image.src = sponsor.imageSrc;
    image.alt = '';

    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'desc_4';

    const nameParagraph = document.createElement('p');
    nameParagraph.className = 'name';
    nameParagraph.textContent = sponsor.name;

    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.className = 'designation';
    descriptionParagraph.textContent = sponsor.description;

    const additionalDescriptionParagraph = document.createElement('p');
    additionalDescriptionParagraph.className = 'add_desc';
    additionalDescriptionParagraph.textContent = sponsor.additionalDescription;

    descriptionDiv.appendChild(nameParagraph);
    descriptionDiv.appendChild(descriptionParagraph);
    descriptionDiv.appendChild(additionalDescriptionParagraph);

    sponsorDiv.appendChild(image);
    sponsorDiv.appendChild(descriptionDiv);

    container.appendChild(sponsorDiv);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const sponsorData = [
    {
      name: 'Nvidia',
      imageSrc: '/images/nvidia.png',
      description: 'Nvidia is a graphics processing unit (GPU) manufacturer',
      additionalDescription: "NVIDIA's innovations and technologies have made a significant impact on the gaming industry, scientific research, AI development, and other computationally intensive fields.",
    },
    {
      name: 'Logitech',
      imageSrc: '/images/logitech.png',
      description: 'Logitech is a computer peripheral and accessories company',
      additionalDescription: 'Logitech is a well-respected brand in the computer peripherals industry, providing a wide range of products that cater to different needs and preferences.',
    },
  ];

  const container = document.getElementById('hiddenDiv');

  sponsorData.forEach((sponsor) => {
    const sponsorDiv = document.createElement('div');
    sponsorDiv.className = 'sponsor';

    const image = document.createElement('img');
    image.src = sponsor.imageSrc;
    image.alt = '';

    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'desc_4';

    const nameParagraph = document.createElement('p');
    nameParagraph.className = 'name';
    nameParagraph.textContent = sponsor.name;

    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.className = 'designation';
    descriptionParagraph.textContent = sponsor.description;

    const additionalDescriptionParagraph = document.createElement('p');
    additionalDescriptionParagraph.className = 'add_desc';
    additionalDescriptionParagraph.textContent = sponsor.additionalDescription;

    descriptionDiv.appendChild(nameParagraph);
    descriptionDiv.appendChild(descriptionParagraph);
    descriptionDiv.appendChild(additionalDescriptionParagraph);

    sponsorDiv.appendChild(image);
    sponsorDiv.appendChild(descriptionDiv);

    container.appendChild(sponsorDiv);
  });
});
