const texts = ["Difficulty", "State", "Duration", "Month"];
let index = 0;
const rotatingText = document.getElementById("rotatingText");

setInterval(() => {
  rotatingText.style.animation = "none"; // Stop current animation

  // Fade out and slide up current text
  rotatingText.classList.add("opacity-0", "-translate-y-4");

  setTimeout(() => {
    index = (index + 1) % texts.length; // Update to next text
    rotatingText.textContent = texts[index]; // Set new text

    // Reset and animate fade in and slide up for new text
    rotatingText.classList.remove("opacity-0", "-translate-y-4");
    rotatingText.classList.add("opacity-100", "translate-y-0");

    rotatingText.style.animation = "slideUp 1s ease-in-out"; // Trigger sliding animation
  }, 500); // Time delay to match the animation
}, 3000); // Change text every 3 seconds







const images = [
  "/src/images/home/banner-image-5.webp",
  "/src/images/home/banner-image-1.webp",
  "/src/images/home/banner-image-3.webp",
  "/src/images/home/banner-image-4.webp"
];

const texts1 = [
  "Trek Beyond The Ordinary",
  "The Next Adventure Awaits",
  "The Ultimate Escape Awaits",
  "Unleash Your Inner Explorer",
  "Embrace the Spirit Of Adventure",
  "Go Beyond The Map"
  
];

let index1 = 0;

const bannerImage = document.getElementById("bannerImage");
const bannerText = document.getElementById("bannerText");

setInterval(() => {
  // Fade out the current image (set opacity to 0.5 instead of 0)
  bannerImage.classList.remove("fade-in-banner");
  bannerImage.classList.add("fade-to-half");

  // Slide out the current text
  bannerText.classList.remove("slide-up");
  bannerText.classList.add("slide-down");

  setTimeout(() => {
    // Update the image and text after the fade and slide animations
    index1 = (index1 + 1) % images.length;
    bannerImage.src = images[index1];
    bannerText.textContent = texts1[index1];

    // Fade in the new image
    bannerImage.classList.remove("fade-to-half");
    bannerImage.classList.add("fade-in-banner");

    // Slide in the new text
    bannerText.classList.remove("slide-down");
    bannerText.classList.add("slide-up");
  }, 500); // Match this duration with CSS animation duration

}, 3000); // Change every 3 seconds










const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const items = Array.from(carousel.children);
const totalItems = items.length;
let currentIndex = 0;
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;

// Get the visible number of items based on the screen size
function getVisibleItems() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 650) {
        return 1; // Show 1 item for small screens
    } else if (screenWidth >= 650 && screenWidth <= 1100) {
        return 2; // Show 2 items for medium screens
    } else {
        return 4; // Show 3 items for larger screens
    }
}

// Update carousel position and center the visible items
function updateCarouselPosition() {
    const visibleItems = getVisibleItems();
    const itemWidth = carousel.clientWidth / visibleItems;
    const offset = (carousel.clientWidth - visibleItems * itemWidth) / 2; // To center the items
    const newTransform = `translateX(${offset - currentIndex * itemWidth}px)`;
    carousel.style.transition = 'transform 0.5s ease'; // Smooth sliding effect
    carousel.style.transform = newTransform;
    updateButtonStates(visibleItems);
}

// Update button states (enable/disable based on the current index)
function updateButtonStates(visibleItems) {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= totalItems - visibleItems;
}

// Handle next button click
nextBtn.addEventListener('click', () => {
    const visibleItems = getVisibleItems();
    if (currentIndex < totalItems - visibleItems) {
        currentIndex++;
        updateCarouselPosition();
    }
});

// Handle previous button click
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarouselPosition();
    }
});

// Touch start event
carousel.addEventListener('touchstart', touchStart);
carousel.addEventListener('touchmove', touchMove);
carousel.addEventListener('touchend', touchEnd);

// Functions to handle touch events
function touchStart(event) {
    isDragging = true;
    startPos = getPositionX(event);
    carousel.style.transition = ''; // Stop the smooth transition when dragging
    animationID = requestAnimationFrame(animation);
}

function touchMove(event) {
    if (isDragging) {
        const currentPosition = getPositionX(event);
        currentTranslate = prevTranslate + currentPosition - startPos;
    }
}

function touchEnd() {
    isDragging = false;
    cancelAnimationFrame(animationID);
    
    const visibleItems = getVisibleItems();
    const itemWidth = carousel.clientWidth / visibleItems;
    const movedBy = currentTranslate - prevTranslate;

    // Determine the new currentIndex based on swipe distance
    if (movedBy < -itemWidth / 3 && currentIndex < totalItems - visibleItems) {
        currentIndex++;
    }
    if (movedBy > itemWidth / 3 && currentIndex > 0) {
        currentIndex--;
    }

    updateCarouselPosition();
    prevTranslate = currentTranslate = -currentIndex * itemWidth;
}

// Utility functions for touch event handling
function getPositionX(event) {
    return event.touches[0].clientX;
}

function animation() {
    setCarouselPosition();
    if (isDragging) requestAnimationFrame(animation);
}

function setCarouselPosition() {
    carousel.style.transform = `translateX(${currentTranslate}px)`;
}

// Handle window resizing
window.addEventListener('resize', updateCarouselPosition);

// Initialize carousel position and button states
updateCarouselPosition();





    const aboutUsImages = document.querySelectorAll('.about-us-carousel-image');
    const aboutUsDots = document.querySelectorAll('.about-us-dot');
    const aboutUsCarouselInner = document.querySelector('.about-us-carousel-inner');
    let aboutUsCurrentIndex = 0;
    let aboutUsInterval;
    
    // Function to update the carousel's position
    function aboutUsUpdateCarousel() {
        const offset = -aboutUsCurrentIndex * 100;
        aboutUsCarouselInner.style.transform = `translateX(${offset}%)`;
    
        aboutUsDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === aboutUsCurrentIndex);
        });
    }
    
    // Function to handle auto-sliding
    function aboutUsAutoSlide() {
        aboutUsCurrentIndex = (aboutUsCurrentIndex + 1) % aboutUsImages.length;
        aboutUsUpdateCarousel();
    }
    
    // Initialize auto-slide
    aboutUsInterval = setInterval(aboutUsAutoSlide, 3000);
    
    // Event listeners for dots
    aboutUsDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(aboutUsInterval); // Stop auto-sliding
    
            aboutUsCurrentIndex = index;
            aboutUsUpdateCarousel();
    
            // Re-enable auto-sliding after a delay (e.g., 5 seconds)
            aboutUsInterval = setTimeout(() => {
                aboutUsInterval = setInterval(aboutUsAutoSlide, 3000);
            }, 5000);
        });
    });
    

    


    const carousel2 = document.getElementById('carousel2');
const prevBtn2 = document.getElementById('prevBtn2');
const nextBtn2 = document.getElementById('nextBtn2');
const items2 = Array.from(carousel2.children);
const totalItems2 = items2.length;
let currentIndex2 = 0;
let isDragging2 = false;
let startPos2 = 0;
let currentTranslate2 = 0;
let prevTranslate2 = 0;
let animationID2;

// Get the visible number of items based on the screen size
function getVisibleItems2() {
    const screenWidth2 = window.innerWidth;
    if (screenWidth2 < 650) {
        return 1; // Show 1 item for small screens
    } else if (screenWidth2 >= 650 && screenWidth2 <= 1100) {
        return 2; // Show 2 items for medium screens
    } else {
        return 4; // Show 4 items for larger screens
    }
}

// Update carousel position
function updateCarouselPosition2() {
    const visibleItems2 = getVisibleItems2();
    const itemWidth2 = carousel2.clientWidth / visibleItems2;
    const offset2 = (carousel2.clientWidth - visibleItems2 * itemWidth2) / 2; // To center the items
    const newTransform2 = `translateX(${offset2 - currentIndex2 * itemWidth2}px)`;
    carousel2.style.transition = 'transform 0.5s ease'; // Smooth sliding effect
    carousel2.style.transform = newTransform2;
    updateButtonStates2(visibleItems2);
}

// Update button states (enable/disable based on the current index)
function updateButtonStates2(visibleItems2) {
    prevBtn2.disabled = currentIndex2 === 0;
    nextBtn2.disabled = currentIndex2 >= totalItems2 - visibleItems2;

    // Update styles based on button state
    if (prevBtn2.disabled) {
        prevBtn2.classList.remove('bg-orange');
        prevBtn2.classList.add('bg-white');
        prevBtn2.querySelector('path').classList.replace('white-stroke', 'orange-stroke');
    } else {
        prevBtn2.classList.add('bg-orange');
        prevBtn2.classList.remove('bg-white');
        prevBtn2.querySelector('path').classList.replace('orange-stroke', 'white-stroke');
    }

    if (nextBtn2.disabled) {
        nextBtn2.classList.remove('bg-orange');
        nextBtn2.classList.add('bg-white');
        nextBtn2.querySelector('path').classList.replace('white-stroke', 'orange-stroke');
    } else {
        nextBtn2.classList.add('bg-orange');
        nextBtn2.classList.remove('bg-white');
        nextBtn2.querySelector('path').classList.replace('orange-stroke', 'white-stroke');
    }
}

// Handle next button click
nextBtn2.addEventListener('click', () => {
    const visibleItems2 = getVisibleItems2();
    if (currentIndex2 < totalItems2 - visibleItems2) {
        currentIndex2++;
        updateCarouselPosition2();
    }
});

// Handle previous button click
prevBtn2.addEventListener('click', () => {
    if (currentIndex2 > 0) {
        currentIndex2--;
        updateCarouselPosition2();
    }
});

// Touch start event
carousel2.addEventListener('touchstart', touchStart2);
carousel2.addEventListener('touchmove', touchMove2);
carousel2.addEventListener('touchend', touchEnd2);

// Functions to handle touch events
function touchStart2(event) {
    isDragging2 = true;
    startPos2 = getPositionX2(event);
    carousel2.style.transition = ''; // Stop the smooth transition when dragging
    animationID2 = requestAnimationFrame(animation2);
}

function touchMove2(event) {
    if (isDragging2) {
        const currentPosition2 = getPositionX2(event);
        currentTranslate2 = prevTranslate2 + currentPosition2 - startPos2;
    }
}

function touchEnd2() {
    isDragging2 = false;
    cancelAnimationFrame(animationID2);
    
    const visibleItems2 = getVisibleItems2();
    const itemWidth2 = carousel2.clientWidth / visibleItems2;
    const movedBy2 = currentTranslate2 - prevTranslate2;

    // Determine the new currentIndex based on swipe distance
    if (movedBy2 < -itemWidth2 / 3 && currentIndex2 < totalItems2 - visibleItems2) {
        currentIndex2++;
    }
    if (movedBy2 > itemWidth2 / 3 && currentIndex2 > 0) {
        currentIndex2--;
    }

    updateCarouselPosition2();
    prevTranslate2 = currentTranslate2 = -currentIndex2 * itemWidth2;
}

// Utility functions for touch event handling
function getPositionX2(event) {
    return event.touches[0].clientX;
}

function animation2() {
    setCarouselPosition2();
    if (isDragging2) requestAnimationFrame(animation2);
}

function setCarouselPosition2() {
    carousel2.style.transform = `translateX(${currentTranslate2}px)`;
}

// Handle window resizing
window.addEventListener('resize', updateCarouselPosition2);

// Initialize carousel position and button states
updateCarouselPosition2();



    const largeVideo = document.getElementById('largeVideo');
    const playButton = document.getElementById('playButton');
  
    function playLargeVideo() {
        largeVideo.play();
        playButton.style.display = 'none'; // Hide play button when playing
    }
  
    function playSmallVideo(videoSrc) {
        largeVideo.src = videoSrc; // Change the source of the large video
        largeVideo.play(); // Play the new video
        playButton.style.display = 'none'; // Hide play button when playing
    }
  
    // Optional: Hide the play button when the video is playing
    largeVideo.addEventListener('play', function () {
        playButton.style.display = 'none';
    });
  
    // Optional: Show the play button when the video is paused
    largeVideo.addEventListener('pause', function () {
        playButton.style.display = 'block';
    });



    const carousel3 = document.getElementById('carousel3');
    const prevBtn3 = document.getElementById('prevBtn3');
    const nextBtn3 = document.getElementById('nextBtn3');
    const items3 = Array.from(carousel3.children);
    const totalItems3 = items3.length;
    let currentIndex3 = 0;
    let isDragging3 = false;
    let startPos3 = 0;
    let currentTranslate3 = 0;
    let prevTranslate3 = 0;
    let animationID3;
    
    // Get the visible number of items based on the screen size
    function getVisibleItems3() {
        const screenWidth3 = window.innerWidth;
        if (screenWidth3 < 650) {
            return 1; // Show 1 item for small screens
        } else if (screenWidth3 >= 650 && screenWidth3 <= 1100) {
            return 3; // Show 3 items for medium screens
        } else {
            return 4; // Show 4 items for larger screens
        }
    }
    
    // Update carousel position
    function updateCarouselPosition3() {
        const visibleItems3 = getVisibleItems3();
        const itemWidth3 = carousel3.clientWidth / visibleItems3;
        const offset3 = (carousel3.clientWidth - visibleItems3 * itemWidth3) / 3; // To center the items
        const newTransform3 = `translateX(${offset3 - currentIndex3 * itemWidth3}px)`;
        carousel3.style.transition = 'transform 0.5s ease'; // Smooth sliding effect
        carousel3.style.transform = newTransform3;
        updateButtonStates3(visibleItems3);
    }
    
    // Update button states (enable/disable based on the current index)
    function updateButtonStates3(visibleItems3) {
        prevBtn3.disabled = currentIndex3 === 0;
        nextBtn3.disabled = currentIndex3 >= totalItems3 - visibleItems3;
    
        // Update styles based on button state
        if (prevBtn3.disabled) {
            prevBtn3.classList.remove('bg-orange');
            prevBtn3.classList.add('bg-white');
            prevBtn3.querySelector('path').classList.replace('white-stroke', 'orange-stroke');
        } else {
            prevBtn3.classList.add('bg-orange');
            prevBtn3.classList.remove('bg-white');
            prevBtn3.querySelector('path').classList.replace('orange-stroke', 'white-stroke');
        }
    
        if (nextBtn3.disabled) {
            nextBtn3.classList.remove('bg-orange');
            nextBtn3.classList.add('bg-white');
            nextBtn3.querySelector('path').classList.replace('white-stroke', 'orange-stroke');
        } else {
            nextBtn3.classList.add('bg-orange');
            nextBtn3.classList.remove('bg-white');
            nextBtn3.querySelector('path').classList.replace('orange-stroke', 'white-stroke');
        }
    }
    
    // Handle next button click
    nextBtn3.addEventListener('click', () => {
        const visibleItems3 = getVisibleItems3();
        if (currentIndex3 < totalItems3 - visibleItems3) {
            currentIndex3++;
            updateCarouselPosition3();
        }
    });
    
    // Handle previous button click
    prevBtn3.addEventListener('click', () => {
        if (currentIndex3 > 0) {
            currentIndex3--;
            updateCarouselPosition3();
        }
    });
    
    // Touch start event
    carousel3.addEventListener('touchstart', touchStart3);
    carousel3.addEventListener('touchmove', touchMove3);
    carousel3.addEventListener('touchend', touchEnd3);
    
    // Functions to handle touch events
    function touchStart3(event) {
        isDragging3 = true;
        startPos3 = getPositionX3(event);
        carousel3.style.transition = ''; // Stop the smooth transition when dragging
        animationID3 = requestAnimationFrame(animation3);
    }
    
    function touchMove3(event) {
        if (isDragging3) {
            const currentPosition3 = getPositionX3(event);
            currentTranslate3 = prevTranslate3 + currentPosition3 - startPos3;
        }
    }
    
    function touchEnd3() {
        isDragging3 = false;
        cancelAnimationFrame(animationID3);
        
        const visibleItems3 = getVisibleItems3();
        const itemWidth3 = carousel3.clientWidth / visibleItems3;
        const movedBy3 = currentTranslate3 - prevTranslate3;
    
        // Determine the new currentIndex based on swipe distance
        if (movedBy3 < -itemWidth3 / 3 && currentIndex3 < totalItems3 - visibleItems3) {
            currentIndex3++;
        }
        if (movedBy3 > itemWidth3 / 3 && currentIndex3 > 0) {
            currentIndex3--;
        }
    
        updateCarouselPosition3();
        prevTranslate3 = currentTranslate3 = -currentIndex3 * itemWidth3;
    }
    
    // Utility functions for touch event handling
    function getPositionX3(event) {
        return event.touches[0].clientX;
    }
    
    function animation3() {
        setCarouselPosition3();
        if (isDragging3) requestAnimationFrame(animation3);
    }
    
    function setCarouselPosition3() {
        carousel3.style.transform = `translateX(${currentTranslate3}px)`;
    }
    
    // Handle window resizing
    window.addEventListener('resize', updateCarouselPosition3);
    
    // Initialize carousel position and button states
    updateCarouselPosition3();
    


    // const reviewSectionData = [
    //   {
    //     name: "John Doe",
    //     content: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat fugit magni, facere, veniam sit cum nostrum sequi nesciunt quisquam doloribus sed mollitia, minima libero cupiditate illum. Molestias iste expedita accusamus."',
    //     profilePic: "https://via.placeholder.com/50",
    //     rating: 5,
    //   },
    //   {
    //     name: "John Doe",
    //     content: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat fugit magni, facere, veniam sit cum nostrum sequi nesciunt quisquam doloribus sed mollitia, minima libero cupiditate illum. Molestias iste expedita accusamus."',
    //     profilePic: "https://via.placeholder.com/50",
    //     rating: 5,
    //   },
    //   {
    //     name: "John Doe",
    //     content: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat fugit magni, facere, veniam sit cum nostrum sequi nesciunt quisquam doloribus sed mollitia, minima libero cupiditate illum. Molestias iste expedita accusamus."',
    //     profilePic: "https://via.placeholder.com/50",
    //     rating: 5,
    //   },
    //   {
    //     name: "John Doe",
    //     content: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat fugit magni, facere, veniam sit cum nostrum sequi nesciunt quisquam doloribus sed mollitia, minima libero cupiditate illum. Molestias iste expedita accusamus."',
    //     profilePic: "https://via.placeholder.com/50",
    //     rating: 5,
    //   },
    //   {
    //     name: "John Doe",
    //     content: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat fugit magni, facere, veniam sit cum nostrum sequi nesciunt quisquam doloribus sed mollitia, minima libero cupiditate illum. Molestias iste expedita accusamus."',
    //     profilePic: "https://via.placeholder.com/50",
    //     rating: 5,
    //   },
    //   {
    //     name: "John Doe",
    //     content: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat fugit magni, facere, veniam sit cum nostrum sequi nesciunt quisquam doloribus sed mollitia, minima libero cupiditate illum. Molestias iste expedita accusamus."',
    //     profilePic: "https://via.placeholder.com/50",
    //     rating: 5,
    //   },
    //   {
    //     name: "John Doe",
    //     content: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat fugit magni, facere, veniam sit cum nostrum sequi nesciunt quisquam doloribus sed mollitia, minima libero cupiditate illum. Molestias iste expedita accusamus."',
    //     profilePic: "https://via.placeholder.com/50",
    //     rating: 5,
    //   },
    //   {
    //     name: "John Doe",
    //     content: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat fugit magni, facere, veniam sit cum nostrum sequi nesciunt quisquam doloribus sed mollitia, minima libero cupiditate illum. Molestias iste expedita accusamus."',
    //     profilePic: "https://via.placeholder.com/50",
    //     rating: 5,
    //   }
    //   // More review objects...
    // ];
    
    // const reviewSectionCarousel = document.getElementById('reviewSectionCarousel');
    // const reviewSectionPrevBtn = document.getElementById('reviewSectionPrevBtn');
    // const reviewSectionNextBtn = document.getElementById('reviewSectionNextBtn');
    // const reviewSectionPaginationContainer = document.getElementById('reviewSectionPagination');
    
    // let reviewSectionCurrentIndex = 0;
    // let reviewSectionReviewsPerPage = 3; // Default to 3 for large screens
    // let reviewSectionTotalReviews = reviewSectionData.length;
    // let reviewSectionAutoSlide;
    
    // // Function to update the number of reviews per page based on screen size
    // function updateReviewsPerPage() {
    //   const screenWidth = window.innerWidth;
      
    //   if (screenWidth < 430) {
    //     reviewSectionReviewsPerPage = 1;
    //   } else if (screenWidth >= 430 && screenWidth < 768) {
    //     reviewSectionReviewsPerPage = 2;
    //   } else {
    //     reviewSectionReviewsPerPage = 3;
    //   }
    
    //   reviewSectionTotalPages = Math.ceil(reviewSectionTotalReviews / reviewSectionReviewsPerPage);
    // }
    
    // // Function to create review HTML
    // function reviewSectionCreateReviewHTML(review) {
    //   return `
    //     <div class="reviewSectionBox bg-white p-4 rounded-lg shadow-lg flex flex-col items-center" style="width:calc(100%/${reviewSectionReviewsPerPage});">
    //       <div class="flex justify-between items-center w-full">
    //         <div class="flex flex-row gap-1 items-center my-auto">
    //           <img src="${review.profilePic}" alt="${review.name}" class="rounded-full ">
    //           <h3 class="text-md text-gray-700 font-bold">${review.name}</h3>
    //         </div>
    //         <div class="my-auto">
    //           <span style="color: #ffc107;">★</span> ${review.rating}
    //         </div>
    //       </div>
    //       <p class="mt-2 text-gray-500 text-sm">${review.content}</p>
    //     </div>
    //   `;
    // }
    
    // // Create carousel items
    // function reviewSectionInitializeCarousel() {
    //   reviewSectionCarousel.innerHTML = '';
    //   reviewSectionData.forEach(review => {
    //     reviewSectionCarousel.innerHTML += reviewSectionCreateReviewHTML(review);
    //   });
    
    //   reviewSectionUpdateCarousel();
    // }
    
    // // Function to update the carousel position
    // function reviewSectionUpdateCarousel() {
    //   const itemWidth = reviewSectionCarousel.clientWidth / reviewSectionReviewsPerPage;
    //   const newTransform = `translateX(-${reviewSectionCurrentIndex * itemWidth}px)`;
    //   reviewSectionCarousel.style.transition = 'transform 0.5s ease-in-out';
    //   reviewSectionCarousel.style.transform = newTransform;
    // }
    
    // // Move to the next slide
    // function reviewSectionNextSlide() {
    //   if (reviewSectionCurrentIndex < reviewSectionTotalReviews - reviewSectionReviewsPerPage) {
    //     reviewSectionCurrentIndex++;
    //     reviewSectionUpdateCarousel();
    //   }
    // }
    
    // // Move to the previous slide
    // function reviewSectionPrevSlide() {
    //   if (reviewSectionCurrentIndex > 0) {
    //     reviewSectionCurrentIndex--;
    //     reviewSectionUpdateCarousel();
    //   }
    // }
    
    // // Handle touch events for swipe
    // let startX;
    // reviewSectionCarousel.addEventListener('touchstart', (e) => {
    //   startX = e.touches[0].clientX;
    // });
    
    // reviewSectionCarousel.addEventListener('touchmove', (e) => {
    //   const touchEndX = e.touches[0].clientX;
    //   const diffX = startX - touchEndX;
      
    //   if (diffX > 50) {
    //     reviewSectionNextSlide();
    //   } else if (diffX < -50) {
    //     reviewSectionPrevSlide();
    //   }
    // });
    
    // // Update the reviews per page when the window is resized
    // window.addEventListener('resize', () => {
    //   updateReviewsPerPage();
    //   reviewSectionInitializeCarousel();
    // });
    
    // // Initialize carousel and set default reviews per page
    // updateReviewsPerPage();
    // reviewSectionInitializeCarousel();
    
    // // Event listeners for next and prev buttons
    // reviewSectionNextBtn.addEventListener('click', () => {
    //   reviewSectionNextSlide();
    // });
    
    // reviewSectionPrevBtn.addEventListener('click', () => {
    //   reviewSectionPrevSlide();
    // });
    

    $(document).ready(function(){
      const reviewSectionData = [
        {
          name: "Ajay Verma",
          content: '"Kedarkantha trek was absolutely thrilling! Har jagah snow aur breathtaking views. Safarwallah ki team ne har cheez ka dhyaan rakha, aur summit par sunrise was worth all the effort!"',
          profilePic: "/src/images/home/reviews-images/1.png",
          rating: 5,
        },
        {
          name: "Nitin Chauhan",
          content: '"Kedarkantha trek ke dauran snowfall aur summit ka view dekhna ek dream come true tha. Safarwallah ki services ne is adventure ko aur bhi memorable banaya!"',
          profilePic: "/src/images/home/reviews-images/2.png",
          rating: 5,
        },
        {
          name: "Abhishek",
          content: '"Had an amazing experience with Safarwallah! Everything was well-organized, the guides were fantastic, and the journey was unforgettable. Grateful to them for this lifetime adventure! Highly recommend!."',
          profilePic: "/src/images/home/reviews-images/3.png",
          rating: 5,
        },
        {
          name: "Vaibhav",
          content: '"Safarwallah exceeded expectations! Expert planning, safety prioritized, and breathtaking views. Can not wait for the next trek"',
          profilePic: "/src/images/home/reviews-images/4.png",
          rating: 5,
        },
        {
          name: "Priya Sharma",
          content: '"Kuari Pass trek with Safarwallah was simply magical! Snowy trails, mesmerizing landscapes, aur poori team ka support, sab kuch perfect tha. Highly recommend for nature lovers!"',
          profilePic: "/src/images/home/reviews-images/5.png",
          rating: 5,
        },
        {
          name: "Simran Kaur",
          content: '"Brahmatal trek ka experience Safarwallah ke sath ekdum zabardast tha! Amazing views, peaceful lakes, aur friendly team ne is adventure ko unforgettable banaya."',
          profilePic: "/src/images/home/reviews-images/6.png",
          rating: 5,
        },
        {
          name: "Nisha Gupta",
          content: '"Dayara Bugyal ki open meadows aur stunning views Safarwallah ke saath trek karke aur bhi khoobsurat lag rahe the! Perfectly planned, safe, aur fun-filled trek."',
          profilePic: "/src/images/home/reviews-images/7.png",
          rating: 5,
        },
        {
          name: "Anjali Singh",
          content: '"Triund trek Safarwallah ke sath ek amazing experience tha! Har step pe beautiful views, friendly vibes, aur pura trek smooth aur fun raha. Would love to trek again with them!"',
          profilePic: "/src/images/home/reviews-images/1.png",
          rating: 5,
        },
        {
          name: "Ritika Verma",
          content: '"Safarwallah ke sath Brahmatal trek ka experience bahut hi thrilling tha! Snow-capped mountains aur serene lake ke saath perfectly organized trek made it unforgettable."',
          profilePic: "/src/images/home/reviews-images/2.png",
          rating: 5,
        },
        
        // Add more reviews here...
      ];
    
      // Function to create review HTML
      function reviewSectionCreateReviewHTML(review) {
        return `
          <div class="reviewSectionBox bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
            <div class="flex justify-between items-center w-full">
              <div class="flex flex-row gap-1 items-center my-auto">
                <img src="${review.profilePic}" alt="${review.name}" class="rounded-full " style="width:50px;height:50px">
                <h3 class="flex flex-shrink-0 font-bold text-gray-700 text-md">${review.name}</h3>
              </div>
              <div class="my-auto">
                <span style="color: #ffc107;">★</span> ${review.rating}
              </div>
            </div>
            <p class="mt-2 text-gray-500 text-sm">${review.content}</p>
          </div>
        `;
      }
    
      // Populate the carousel with reviews
      reviewSectionData.forEach(review => {
        $('#reviewSectionCarousel').append(reviewSectionCreateReviewHTML(review));
      });
    
      // Initialize Owl Carousel
      const owl = $('#reviewSectionCarousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
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
        navContainer: '.owl-nav', // Specifies where to place the nav buttons

        responsive: {
          0: {
            items: 1
          },
          430: {
            items: 2
          },
          900: {
            items: 3
          }
        },
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        onInitialized: applyScaleEffect,
        onTranslated: applyScaleEffect
      });
    
      // Function to apply scaling and blurring effects
      function applyScaleEffect(event) {
        const items = event.item.count;  // Total items
        const currentIndex = event.item.index; // Current index of the first visible item
    
        // Remove scale effect from all items
        $('.reviewSectionBox').removeClass('scale-1').addClass('scale-0');
    
        
      }
    
      $('#reviewnavbtn-next').click(function() {
        owl.trigger('next.owl.carousel');
      });
    
      $('#reviewnavbtn-prev').click(function() {
        owl.trigger('prev.owl.carousel');
      });
    });
    

        // contact us popup 

    // JavaScript for toggling the contact us popup with bubble animation
    document.getElementById('contactUsButton').addEventListener('click', function () {
      const popup = document.getElementById('contactUsPopup');

      if (popup.classList.contains('active')) {
          // Close popup with reverse animation
          popup.classList.remove('active');
          setTimeout(() => {
              popup.classList.add('hidden'); // Hide popup after animation ends
          }, 300); // Wait for animation to complete
      } else {
          // Open popup with bubble animation
          popup.classList.remove('hidden');
          popup.classList.add('active');
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
