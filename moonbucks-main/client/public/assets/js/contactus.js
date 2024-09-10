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
