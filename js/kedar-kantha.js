 

    // DOM elements
    const uniqueMenuIcon = document.getElementById('unique-menu-icon');
    const uniquePopup = document.getElementById('unique-popup');
    const uniqueHamburgerIcon = document.getElementById('unique-hamburger-icon');
    const uniqueCloseIcon = document.getElementById('unique-close-icon');

    // Initial popup state
    let isPopupOpen = false;

    // Toggle popup and icons
    uniqueMenuIcon.addEventListener('click', () => {
        isPopupOpen = !isPopupOpen;

        if (isPopupOpen) {
            // Show the popup with smooth transition and change to the close icon
            uniquePopup.classList.remove('hidden');
            setTimeout(() => {
                uniquePopup.classList.add('open');
            }, 10); // Delay to trigger transition

            uniqueHamburgerIcon.classList.add('opacity-0', 'transform', 'scale-90');
            setTimeout(() => {
                uniqueHamburgerIcon.classList.add('hidden');
                uniqueCloseIcon.classList.remove('hidden');
                uniqueCloseIcon.classList.remove('opacity-0', 'transform', 'scale-90');
            }, 300);
        } else {
            // Hide the popup with smooth transition and switch back to the hamburger icon
            uniquePopup.classList.remove('open');
            setTimeout(() => {
                uniquePopup.classList.add('hidden');
            }, 500); // Delay matches the CSS transition duration

            uniqueCloseIcon.classList.add('opacity-0', 'transform', 'scale-90');
            setTimeout(() => {
                uniqueCloseIcon.classList.add('hidden');
                uniqueHamburgerIcon.classList.remove('hidden');
                uniqueHamburgerIcon.classList.remove('opacity-0', 'transform', 'scale-90');
            }, 300);
        }
    });



     // DOM elements
     const uniqueMenuIconmobile = document.getElementById('unique-menu-icon-mobile');
     const uniquePopupmobile = document.getElementById('unique-popup-mobile');
     const uniqueHamburgerIconmobile = document.getElementById('unique-hamburger-icon-mobile');
     const uniqueCloseIconmobile = document.getElementById('unique-close-icon-mobile');
 
     // Initial popup state
     let isPopupOpenmobile = false;
 
     // Toggle popup and icons
     uniqueMenuIconmobile.addEventListener('click', () => {
         isPopupOpenmobile = !isPopupOpenmobile;
 
         if (isPopupOpenmobile) {
             // Show the popup with smooth transition and change to the close icon
             uniquePopupmobile.classList.remove('hidden');
             setTimeout(() => {
                 uniquePopupmobile.classList.add('open');
             }, 10); // Delay to trigger transition
 
             uniqueHamburgerIconmobile.classList.add('opacity-0', 'transform', 'scale-90');
             setTimeout(() => {
                 uniqueHamburgerIconmobile.classList.add('hidden');
                 uniqueCloseIconmobile.classList.remove('hidden');
                 uniqueCloseIconmobile.classList.remove('opacity-0', 'transform', 'scale-90');
             }, 300);
         } else {
             // Hide the popup with smooth transition and switch back to the hamburger icon
             uniquePopupmobile.classList.remove('open');
             setTimeout(() => {
                 uniquePopupmobile.classList.add('hidden');
             }, 500); // Delay matches the CSS transition duration
 
             uniqueCloseIconmobile.classList.add('opacity-0', 'transform', 'scale-90');
             setTimeout(() => {
                 uniqueCloseIconmobile.classList.add('hidden');
                 uniqueHamburgerIconmobile.classList.remove('hidden');
                 uniqueHamburgerIconmobile.classList.remove('opacity-0', 'transform', 'scale-90');
             }, 300);
         }
     });
   
   
   
   
   




        //sidebar******************************************************************************************************

        document.addEventListener("DOMContentLoaded", function() {
          const sections = document.querySelectorAll(".content-section");
          const links = document.querySelectorAll(".sidebar-link");
        
          // Function to clear the active class
          function removeActiveClasses() {
            links.forEach(link => {
              link.classList.remove("active");
            });
          }
        
          // Function to add active class to the visible section link
          function addActiveClassToLink(id) {
            removeActiveClasses();
            const activeLink = document.querySelector(`.sidebar-link[href="#${id}"]`);
            if (activeLink) {
              activeLink.classList.add("active");
            }
          }
        
          // Function to handle scroll and highlight the active section
          function onScroll() {
            let currentSection = "";
        
            sections.forEach(section => {
              const sectionTop = section.offsetTop;
              const sectionHeight = section.clientHeight;
        
              if (pageYOffset >= sectionTop - sectionHeight / 3 && pageYOffset < sectionTop + sectionHeight / 3) {
                currentSection = section.getAttribute("id");
              }
            });
        
            if (currentSection) {
              addActiveClassToLink(currentSection);
            }
          }
        
          // Listen for scroll events
          window.addEventListener("scroll", onScroll);
        
          // Smooth scrolling for sidebar links
          links.forEach(link => {
            link.addEventListener("click", function(e) {
              e.preventDefault();
              const targetSection = document.querySelector(this.getAttribute("href"));
              window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
              });
            });
          });
        
          // Set active class on load
          onScroll(); 
        });
        



        document.addEventListener('DOMContentLoaded', function () {
          const menuButton = document.querySelector('.sidebar-menu-popup-icon');
          const menuIcon = document.querySelector('.menu-icon');
          const closeIcon = document.querySelector('.close-icon');
          const sidebarPopup = document.querySelector('.sidebar-menu-popup');
      
          menuButton.addEventListener('click', function () {
              // Toggle active state
              menuButton.classList.toggle('active');
              sidebarPopup.classList.toggle('active');
              
              // Toggle icons
              if (menuButton.classList.contains('active')) {
                  closeIcon.classList.remove('hidden');
                  menuIcon.classList.add('hidden');
              } else {
                  closeIcon.classList.add('hidden');
                  menuIcon.classList.remove('hidden');
              }
          });
      });
      





      document.addEventListener('DOMContentLoaded', function () {
        const mapImageTrigger = document.querySelector('.map-image-trigger');
        const mapPopup = document.querySelector('.map-image-popup');
        const closePopupButton = document.querySelector('.map-popup-close-btn');
    
        // Open popup when image is clicked
        mapImageTrigger.addEventListener('click', function () {
            mapPopup.classList.add('active');
            mapPopup.classList.remove('hidden'); // Show the popup
        });
    
        // Close popup when clicking the close button
        closePopupButton.addEventListener('click', function () {
            mapPopup.classList.remove('active');
            setTimeout(() => {
                mapPopup.classList.add('hidden'); // Hide the popup after transition
            }, 300); // Timeout matches the transition duration
        });
    });
    



    const accordionButtons = document.querySelectorAll('#brief-Itinerary-accordion button');

accordionButtons.forEach((accordionButton, index) => {
  accordionButton.addEventListener('click', () => {
    const accordionContent = document.getElementById(`accordionContent${index + 1}`);
    const accordionIcon = document.getElementById(`accordionIcon${index + 1}`);
    
    // Close all accordions
    accordionButtons.forEach((button, idx) => {
      const content = document.getElementById(`accordionContent${idx + 1}`);
      const icon = document.getElementById(`accordionIcon${idx + 1}`);
      
      if (idx !== index) {
        content.style.maxHeight = null; // Collapse the accordion
        icon.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" style="width:20px">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>`;
      }
    });
    
    // Toggle the clicked accordion
    if (accordionContent.style.maxHeight) {
      accordionContent.style.maxHeight = null; // Collapse
      accordionIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" style="width:20px">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>`;
    } else {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'; // Expand
      accordionIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FF931F" class="size-6" style="width:20px">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
        </svg>`;
    }
  });
});



const accordionButtons2 = document.querySelectorAll('#brief-Itinerary-accordion-dun #accordionButton');

accordionButtons2.forEach((accordionButton2, index) => {
  accordionButton2.addEventListener('click', () => {
    const accordionContent2 = document.getElementById(`accordionContentdun${index + 1}`);
    const accordionIcon2 = document.getElementById(`accordionIcondun${index + 1}`);
    
    // Close all accordions
    accordionButtons2.forEach((button, idx) => {
      const content2 = document.getElementById(`accordionContentdun${idx + 1}`);
      const icon2 = document.getElementById(`accordionIcondun${idx + 1}`);
      
      if (idx !== index) {
        content2.style.maxHeight = null; // Collapse the accordion
        icon2.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" style="width:20px">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>`;
      }
    });
    
    // Toggle the clicked accordion
    if (accordionContent2.style.maxHeight) {
      accordionContent2.style.maxHeight = null; // Collapse
      accordionIcon2.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" style="width:20px">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>`;
    } else {
      accordionContent2.style.maxHeight = accordionContent2.scrollHeight + 'px'; // Expand
      accordionIcon2.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FF931F" class="size-6" style="width:20px">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
        </svg>`;
    }
  });
});






const accordionButtonsfaq = document.querySelectorAll('#brief-Itinerary-accordion-faq #faq-button');

accordionButtonsfaq.forEach((accordionButton, index) => {
  accordionButton.addEventListener('click', () => {
    const accordionContentfaq = document.getElementById(`accordionContentfaq${index + 1}`);
    const accordionIconfaq = document.getElementById(`accordionIconfaq${index + 1}`);
    
    // Close all accordions
    accordionButtonsfaq.forEach((button, idx) => {
      const contentfaq = document.getElementById(`accordionContentfaq${idx + 1}`);
      const iconfaq = document.getElementById(`accordionIconfaq${idx + 1}`);
      if (idx !== index) {
        contentfaq.style.maxHeight = null; // Collapse the accordion
        iconfaq.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" style="width:20px">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>`;
      }
    });
    
    // Toggle the clicked accordion
    if (accordionContentfaq.style.maxHeight) {
      accordionContentfaq.style.maxHeight = null; // Collapse
      accordionIconfaq.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" style="width:20px">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>`;
    } else {
      accordionContentfaq.style.maxHeight = accordionContentfaq.scrollHeight + 'px'; // Expand
      accordionIconfaq.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FF931F" class="size-6" style="width:20px">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
        </svg>`;
    }
  });
});


  // Select all accordion headers
  const headers = document.querySelectorAll('.date-batches-header');

  headers.forEach((header) => {
    header.addEventListener('click', function() {
      const content = this.nextElementSibling; // Find the associated content div
      const svgIcon = this.querySelector('.date-batches-svg'); // Find the SVG icon within the header

      // Toggle the content visibility and height for smooth transition
      if (content.style.maxHeight) {
        content.style.maxHeight = null; // Collapse the accordion
        svgIcon.classList.remove('rotate-180'); // Reset the SVG rotation
      } else {
        content.style.maxHeight = content.scrollHeight + 'px'; // Expand the accordion
        svgIcon.classList.add('rotate-180'); // Rotate the SVG
      }
    });
  });




  const accordionButtonstrek = document.querySelectorAll('#brief-Itinerary-accordion-trek button[id^="trek-button"]');

accordionButtonstrek.forEach((accordionButton, index) => {
  accordionButton.addEventListener('click', () => {
    const accordionContenttrek = document.getElementById(`accordionContenttrek${index + 1}`);
    const accordionIcontrek = document.getElementById(`accordionIcontrek${index + 1}`);
    
    // Close all accordions except the clicked one
    accordionButtonstrek.forEach((button, idx) => {
      const contenttrek = document.getElementById(`accordionContenttrek${idx + 1}`);
      const icontrek = document.getElementById(`accordionIcontrek${idx + 1}`);
      
      if (idx !== index) {
        contenttrek.style.maxHeight = null; // Collapse the accordion
        icontrek.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" style="width:20px">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>`;
      }
    });

    // Toggle the clicked accordion
    if (accordionContenttrek.style.maxHeight) {
      accordionContenttrek.style.maxHeight = null; // Collapse
      accordionIcontrek.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentcolor" class="size-6" style="width:20px">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>`;
    } else {
      accordionContenttrek.style.maxHeight = accordionContenttrek.scrollHeight + 'px'; // Expand
      accordionIcontrek.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FF931F" class="size-6" style="width:20px">
          <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
        </svg>`;
    }
  });
});






// read more read less button functionality in inclusion and exclusions 

function toggleContent() {
  const readMoreContent = document.querySelectorAll('.read-more-content');
  const toggleBtnText = document.getElementById('toggleBtnText');  // Only target the text span

  readMoreContent.forEach(content => {
      content.classList.toggle('hidden');
  });

  if (toggleBtnText.textContent === 'Read More') {
      toggleBtnText.textContent = 'Read Less';
  } else {
      toggleBtnText.textContent = 'Read More';
  }
}











    //review section owl crousel 

    $(document).ready(function () {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 50, // Increased margin for more space between items
            nav: true,
            navText: [''], // Custom navigation text (left/right arrows)
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    });









    //fit nutrition else 4 popups in one 

    // Get buttons and popups
    const fitBtn = document.getElementById("fitBtn");
    const nutritionBtn = document.getElementById("nutritionBtn");
    const thingsBtn = document.getElementById("thingsBtn");
    const safetyBtn = document.getElementById("safetyBtn");

    // Get popups
    const fitBox = document.getElementById("fit-box");
    const nutritionBox = document.getElementById("nutrition-box");
    const thingsBox = document.getElementById("things-box");
    const safetyBox = document.getElementById("safety-box");

    // Get close buttons
    const closeFit = document.getElementById("closeFit");
    const closeNutrition = document.getElementById("closeNutrition");
    const closeThings = document.getElementById("closeThings");
    const closeSafety = document.getElementById("closeSafety");

    // Show popup functions
    fitBtn.onclick = () => fitBox.style.display = 'block';
    nutritionBtn.onclick = () => nutritionBox.style.display = 'block';
    thingsBtn.onclick = () => thingsBox.style.display = 'block';
    safetyBtn.onclick = () => safetyBox.style.display = 'block';

    // Close popup functions
    closeFit.onclick = () => fitBox.style.display = 'none';
    closeNutrition.onclick = () => nutritionBox.style.display = 'none';
    closeThings.onclick = () => thingsBox.style.display = 'none';
    closeSafety.onclick = () => safetyBox.style.display = 'none';

    // Close popups by clicking outside
    window.onclick = (event) => {
        if (event.target === fitBox) fitBox.style.display = 'none';
        if (event.target === nutritionBox) nutritionBox.style.display = 'none';
        if (event.target === thingsBox) thingsBox.style.display = 'none';
        if (event.target === safetyBox) safetyBox.style.display = 'none';
    }






    // contact us button scroll effect 
    document.querySelector('.btn').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default anchor click behavior

        const targetId = this.getAttribute('href'); // Get the target section ID
        const targetElement = document.querySelector(targetId); // Get the target element

        // Scroll to the target element
        targetElement.scrollIntoView({
            behavior: 'smooth', // Smooth scroll animation
            block: 'start' // Aligns the top of the target element with the top of the viewport
        });
    });










    //sidebar hide effect

    window.addEventListener('scroll', function () {
        var alternativeTreksSection = document.getElementById('alternative-treks-section');
        var sidebar = document.querySelector('.sidebar');

        var rect = alternativeTreksSection.getBoundingClientRect();
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;

        // Check if the bottom of the "Alternative Treks" section is above the viewport
        if (rect.bottom <= windowHeight) {
            sidebar.classList.add('sidebarmenuhidden1'); // Hide sidebar after scrolling past the section
        } else {
            sidebar.classList.remove('sidebarmenuhidden1'); // Show sidebar when within or above the section
        }
    });



 // Create an IntersectionObserver instance
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          const animationClass = entry.target.getAttribute('data-animation');
          entry.target.classList.add(animationClass); // Add animation class when in view
          observer.unobserve(entry.target); // Stop observing once the animation is triggered
      }
  });
});

// Observe all elements with the 'fade-scroll' class
document.querySelectorAll('.fade-scroll').forEach(el => {
  observer.observe(el);
});








