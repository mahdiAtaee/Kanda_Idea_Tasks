// get DOM elements
const current_slide_title = document.querySelectorAll(
  ".current-slide-title .slide-title"
);
const carousel_item = document.querySelectorAll(".c-carousel-item");
const Next_slide = document.querySelector(".next-slide");
const Current_slide_img = document.querySelector(".current-slide img");
const ourproject = document.querySelector(".our-project");
const projectBackgroundText = document.querySelector(
  ".projects .background-text"
);

// initial number for number of slide and next slide title
let CURRENT_SLIDE = 0;
let CURRENT_SLIDE_TITLE = 1;

// add Event click to next button and show next slide
Next_slide.addEventListener("click", function () {
  nextSlide();
  nextSlideTitle();
});

// show next slide function
function nextSlide() {
  // Checks if the next slide is less than 2 and then adds 1 to the current slide and changes the current slide count image.
  // else next slide is 0 and number of current slide count is 1
  if (CURRENT_SLIDE < 2) {
    CURRENT_SLIDE++;
    Current_slide_img.src = `./assets/img/rec_w_${CURRENT_SLIDE + 1}.svg`;
  } else {
    CURRENT_SLIDE = 0;
    Current_slide_img.src = `./assets/img/rec_w_1.svg`;
  }
  // Checks if this carousel item has an active class
  if (!carousel_item[CURRENT_SLIDE].classList.contains("active")) {
    // if current slide not equal to 0 before slide fade out
    if (CURRENT_SLIDE !== 0) {
      $(carousel_item[CURRENT_SLIDE - 1]).fadeOut(500, function () {
        carousel_item[CURRENT_SLIDE - 1].classList.remove("active");
      });
      // else current slide equal to 0 last slide fade out
    } else {
      $(carousel_item[carousel_item.length - 1]).fadeOut(500, function () {
        carousel_item[carousel_item.length - 1].classList.remove("active");
      });
    }
    // Displays the next slide
    $(carousel_item[CURRENT_SLIDE]).fadeIn(500, function () {
      carousel_item[CURRENT_SLIDE].classList.add("active");
    });
  }
}

// show next slide title function
// !NOTE: This function is the same as the previous function
function nextSlideTitle() {
  if (CURRENT_SLIDE_TITLE < 2) {
    CURRENT_SLIDE_TITLE++;
  } else {
    CURRENT_SLIDE_TITLE = 0;
  }
  if (!carousel_item[CURRENT_SLIDE_TITLE].classList.contains("active")) {
    if (CURRENT_SLIDE_TITLE !== 0) {
      $(current_slide_title[CURRENT_SLIDE_TITLE - 1]).fadeOut(500, function () {
        current_slide_title[CURRENT_SLIDE_TITLE - 1].classList.remove("active");
      });
    } else {
      $(current_slide_title[current_slide_title.length - 1]).fadeOut(
        500,
        function () {
          current_slide_title[current_slide_title.length - 1].classList.remove(
            "active"
          );
        }
      );
    }
    $(current_slide_title[CURRENT_SLIDE_TITLE]).fadeIn(500, function () {
      current_slide_title[CURRENT_SLIDE_TITLE].classList.add("active");
    });
  }
}

// show next title and slide after 5s automatically
setInterval(function () {
  nextSlideTitle();
  nextSlide();
}, 5000);

// to get between tow number
const between = (x, min, max) => {
  return x >= min && x <= max;
};

// When the page is scrolled and the scroll is between 1000 and 2200, the desired text will move
window.addEventListener("scroll", function () {
  let x = this.window.pageYOffset - 1000;
  if (between(window.pageYOffset, 800, 2100)) {
    projectBackgroundText.style.transform = `translateX(-${x}px)`;
  }
});
