  $(document).ready(function(){
    $(".blogs-section-carousel").owlCarousel({
      loop: true, // Infinite loop
      margin: 10,
      nav: true, // Enable Next/Prev buttons
      dots: true, // Enable pagination dots
      navText: [
          `<button id="reviewnavbtn-prev" class="bg-orange border-orange hover-svg-review hover:bg-white hovertextorange px-3 py-2 rounded-full" style="border:1px solid #ff931f" >
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.79297 2L2.50008 7.29289C2.10955 7.68342 2.10955 8.31658 2.50008 8.70711L7.79297 14"
                class="" stroke="white" stroke-width="2" stroke-linecap="round" />
            </svg>
          </button>`,
          `<button id="reviewnavbtn-next" class="bg-orange border-orange hover-svg-review hover:bg-white hovertextorange px-3 py-2 rounded-full" style="border:1px solid #ff931f">
            <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.125 15.25L7.875 8.5L1.125 1.75" class="" stroke="white" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </button>`
        ],
        navContainer: '.owl-nav-blog-section', // Specifies where to place the nav buttons
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1024: {
          items: 3
        }
      }
    });
  });
