// Wait for the entire page to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  
  // ========== Background Image Slideshow ==========
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    const backgroundImages = [
      'https://i.pinimg.com/736x/22/12/d1/2212d129fa7839fd210452cdc0093e41.jpg',
      'https://i.pinimg.com/736x/e7/af/c7/e7afc7833290f90f46deb42a86174006.jpg',
      'https://i.pinimg.com/1200x/57/3d/53/573d53be153e7fedfc9a8f8a8bc7de23.jpg',
      'https://i.pinimg.com/736x/83/c2/64/83c26481faef7bb53cf66754db1a574b.jpg',
      'https://i.pinimg.com/736x/21/c0/ed/21c0ed4d6bdb2bcd1b908050d0699442.jpg'
    ];
    
    let currentImageIndex = 0;
    
    // Set initial background image
    aboutSection.style.backgroundImage = `linear-gradient(rgba(30, 30, 45, 0.7), rgba(30, 30, 45, 0.7)), url('${backgroundImages[currentImageIndex]}')`;
    
    // Function to change background image with smooth transition
    function changeBackgroundImage() {
      currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
      
      // Create a temporary image to preload
      const tempImage = new Image();
      tempImage.src = backgroundImages[currentImageIndex];
      tempImage.onload = function() {
        // Change background after image is loaded
        aboutSection.style.backgroundImage = `linear-gradient(rgba(30, 30, 45, 0.7), rgba(30, 30, 45, 0.7)), url('${backgroundImages[currentImageIndex]}')`;
      };
    }
    
    // Start the slideshow after preloader is hidden
    setTimeout(() => {
      // Change image every 5 seconds
      setInterval(changeBackgroundImage, 5000);
    }, 4000); // Start after preloader disappears
  }

  // ========== Splash Screen Logic ==========
  const preloader = document.getElementById('preloader');
  if (preloader) {
    // Hide the preloader after 4 seconds
    setTimeout(() => {
      preloader.classList.add('hidden');
    }, 4000);
  }

  // ========== Modal Logic ==========
  const modal = document.getElementById("project-modal");
  const openBtn = document.getElementById("show-project-btn");
  const closeBtn = document.querySelector(".close-button");

  if (modal && openBtn && closeBtn) {
    openBtn.addEventListener("click", () => {
      modal.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  // ========== Scroll Animation Logic ==========
  const nameElement = document.querySelector('.my-name-animation');
  const domainElement = document.querySelector('.my-domain-animation');
  const aboutParagraphs = document.querySelectorAll('.about-text p');

  function handleScrollAnimations() {
    if (window.scrollY > 50) {
      if (nameElement) {
        nameElement.style.opacity = '1';
        nameElement.style.transform = 'translateY(0)';
      }
      if (domainElement) {
        domainElement.style.opacity = '1';
        domainElement.style.transform = 'translateY(0)';
      }
      aboutParagraphs.forEach((paragraph) => {
        paragraph.classList.add('in-view');
      });
    }
  }

  window.addEventListener('scroll', handleScrollAnimations);
  handleScrollAnimations(); // Trigger on load
  
  // Initialize tooltips for Bootstrap 5
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });
});
