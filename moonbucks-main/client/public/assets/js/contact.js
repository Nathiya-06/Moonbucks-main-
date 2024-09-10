function savethedata() {
    // Code to handle form submission
    alert('Form submitted!');
    console.log("data")
}

function clearthedata() {
    // Code to clear form inputs
    document.querySelectorAll('input[type="text"], input[type="email"]').forEach(input => {
        input.value = '';
    });
}

function scrollToTop() {
    // Code to scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
