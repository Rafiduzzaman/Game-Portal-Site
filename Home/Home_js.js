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


document.addEventListener("DOMContentLoaded", function () {
  var sponsorData = [
    {
        name: 'Ubisoft',
        imageSrc: '/images/ubisoft.png',
        description: 'A prominent French video game company known for developing, publishing, and distributing a wide range of popular video games. The company was founded in 1986 by the Guillemot family and has since become one of the largest and most influential players in the gaming industry.',
        additionalDescription: 'Ubisoft has studios located worldwide, including in Montreal, Toronto, Paris, Milan, and Shanghai.'
    },
    {
        name: 'Intel',
        imageSrc: '/images/intel.png',
        description: 'Intel is a multinational technology company renowned for designing and manufacturing a wide range of semiconductor chips, processors, and other hardware components for computers and various electronic devices.',
        additionalDescription: "Intel's influence extends beyond the consumer and enterprise computing markets."
    }
];

// Get the container element
var container = document.querySelector('.r1');

// Create sponsor div dynamically for each sponsor in the data
sponsorData.forEach(function(sponsor) {
    // Create the main sponsor div
    var sponsorDiv = document.createElement('div');
    sponsorDiv.className = 'sponsor';

    // Create the image element
    var image = document.createElement('img');
    image.src = sponsor.imageSrc;
    image.alt = '';

    // Create the description div
    var descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'desc_4';

    // Create the name paragraph
    var nameParagraph = document.createElement('p');
    nameParagraph.className = 'name';
    nameParagraph.textContent = sponsor.name;

    // Create the description paragraph
    var descriptionParagraph = document.createElement('p');
    descriptionParagraph.className = 'designation';
    descriptionParagraph.textContent = sponsor.description;

    // Create the additional description paragraph
    var additionalDescriptionParagraph = document.createElement('p');
    additionalDescriptionParagraph.className = 'add_desc';
    additionalDescriptionParagraph.textContent = sponsor.additionalDescription;

    // Append elements to the sponsor div
    descriptionDiv.appendChild(nameParagraph);
    descriptionDiv.appendChild(descriptionParagraph);
    descriptionDiv.appendChild(additionalDescriptionParagraph);

    sponsorDiv.appendChild(image);
    sponsorDiv.appendChild(descriptionDiv);

    // Append the sponsor div to the container
    container.appendChild(sponsorDiv);
});
});

// JavaScript code
document.addEventListener("DOMContentLoaded", function () {
  // Sponsor data
  var sponsorData = [
      {
          name: 'Nvidia',
          imageSrc: '/images/nvidia.png',
          description: 'A leading technology company that specializes in designing and manufacturing graphics processing units (GPUs), system-on-a-chip units (SoCs), and other related hardware and software solutions.',
          additionalDescription: "NVIDIA's innovations and technologies have made a significant impact on the gaming industry, scientific research, AI development, and other computationally intensive fields."
      },
      {
          name: 'Logitech',
          imageSrc: '/images/logitech.png',
          description: 'Logitech is a Swiss company that specializes in computer peripherals and accessories. It was founded in 1981 and has since become one of the leading manufacturers of keyboards, mice, webcams, speakers, and other computer accessories.',
          additionalDescription: 'Logitech is a well-respected brand in the computer peripherals industry, providing a wide range of products that cater to different needs and preferences.'
      }
  ];

  // Get the container element
  var container = document.getElementById('hiddenDiv');

  // Create sponsor div dynamically for each sponsor in the data
  sponsorData.forEach(function(sponsor) {
      // Create the main sponsor div
      var sponsorDiv = document.createElement('div');
      sponsorDiv.className = 'sponsor';

      // Create the image element
      var image = document.createElement('img');
      image.src = sponsor.imageSrc;
      image.alt = '';

      // Create the description div
      var descriptionDiv = document.createElement('div');
      descriptionDiv.className = 'desc_4';

      // Create the name paragraph
      var nameParagraph = document.createElement('p');
      nameParagraph.className = 'name';
      nameParagraph.textContent = sponsor.name;

      // Create the description paragraph
      var descriptionParagraph = document.createElement('p');
      descriptionParagraph.className = 'designation';
      descriptionParagraph.textContent = sponsor.description;

      // Create the additional description paragraph
      var additionalDescriptionParagraph = document.createElement('p');
      additionalDescriptionParagraph.className = 'add_desc';
      additionalDescriptionParagraph.textContent = sponsor.additionalDescription;

      // Append elements to the sponsor div
      descriptionDiv.appendChild(nameParagraph);
      descriptionDiv.appendChild(descriptionParagraph);
      descriptionDiv.appendChild(additionalDescriptionParagraph);

      sponsorDiv.appendChild(image);
      sponsorDiv.appendChild(descriptionDiv);

      // Append the sponsor div to the container
      container.appendChild(sponsorDiv);
  });

  
});
