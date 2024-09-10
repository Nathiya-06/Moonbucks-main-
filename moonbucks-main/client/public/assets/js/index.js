// import swiper from 'swiper';
var swiper = new Swiper(".product-row", {
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
var swiper = new Swiper(".blogs-row", {
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextE1: ".swiper-button-next",
    prevE1: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  },
});

var swiper = new Swiper(".review-row", {
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
// This script is for validating the form before submitting

const form = document.querySelector('.reservation-form form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const guestsInput = document.getElementById('guests');
const datetimeInput = document.getElementById('datetime');
const submitButton = document.querySelector('.reservation-form button');

submitButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default form submission

  let errorMessage = "";

  if (nameInput.value === "") {
    errorMessage += "Please enter your name.\n";
  }

  if (emailInput.value === "" || !validateEmail(emailInput.value)) {
    errorMessage += "Please enter a valid email address.\n";
  }

  if (phoneInput.value === "") {
    errorMessage += "Please enter your phone number.\n";
  }

  if (guestsInput.value === "") {
    errorMessage += "Please enter the number of guests.\n";
  } else if (guestsInput.value < 1) {
    errorMessage += "Please enter a valid number of guests (minimum 1).\n";
  }

  if (datetimeInput.value === "") {
    errorMessage += "Please select a date and time for your reservation.\n";
  }

  if (errorMessage !== "") {
    alert(errorMessage);
    return false; // Exit the function if there are errors
  }

  // If there are no errors, proceed with form submission (replace with your actual submission logic)
  console.log("Reservation submitted successfully!");
  // You can use AJAX or fetch API to submit the form data to your server-side script.

  // Optionally, clear the form after successful submission
  form.reset();
});

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function submitForm() {
  // Simulate form submission (replace with actual form validation)
  if (validateForm()) {
    window.location.href = "config.html";
  } else {
    alert("Please fill out all required fields");
  }
}
var swiper = new Swiper(".review-row", {
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 18 || document.documentElement.scrollTop > 18) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
