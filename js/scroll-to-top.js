const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
  // Show or hide the button when scrolling
  window.onscroll = function() {
    if (window.scrollY > 200) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  };
  
  // Smooth scroll to the top when the button is clicked
  scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });