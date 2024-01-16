// Initialize Slick Slider:

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth <= 640) {
    $(".grid").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true, // Optional: Add navigation dots
      // Other Slick slider options...
    });
  }
});

// ------------

window.addEventListener("resize", function () {
  if (window.innerWidth <= 640) {
    $(".grid").slick("unslick"); // Destroy the slider
    $(".grid").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true, // Optional: Add navigation dots
      // Other Slick slider options...
    });
  } else {
    $(".grid").slick("unslick"); // Destroy the slider
  }
});

// Initialize Slick Slider:
