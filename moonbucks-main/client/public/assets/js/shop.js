document.addEventListener('DOMContentLoaded', function () {
    const cartItemsList = document.getElementById('cart-items');
    const favItemsList = document.getElementById('fav-items');
    const totalCost = document.getElementById('total-cost');
    const orderBtn = document.getElementById('order-btn');
    const cartSection = document.querySelector('.cart');
    const favSection = document.querySelector('.favorites');
    const closeIcon = document.getElementById('close-icon');
    const openSidebarBtn = document.getElementById('open-sidebar-btn');
    const sidebar = document.querySelector('.sidebar');

    // Hide favorites section initially
    favSection.style.display = 'none';

    // Function to add item to cart
    function addToCart(item) {
        const li = document.createElement('li');
        li.textContent = item.name + ' - $' + item.price;
        cartItemsList.appendChild(li);
        updateTotalCost(item.price);
    }

    // Function to add item to favorites
    function addToFavorites(item) {
        const li = document.createElement('li');
        li.textContent = item.name;
        favItemsList.appendChild(li);
    }

    // Function to update total cost
    function updateTotalCost(price) {
        const currentTotal = parseFloat(totalCost.textContent.replace('$', ''));
        const newTotal = currentTotal + parseFloat(price);
        totalCost.textContent = '$' + newTotal.toFixed(2);
    }

    // Sample item data
    const item = {
        name: 'Chocolate Frappuccino',
        price: 3.95
    };

    // Event listener for adding item to cart
    document.getElementById('add-to-cart-btn').addEventListener('click', function () {
        addToCart(item);
    });

    // Event listener for adding item to favorites
    document.getElementById('add-to-fav-btn').addEventListener('click', function () {
        addToFavorites(item);
    });

    // Event listener for placing order
    orderBtn.addEventListener('click', function () {
        // Place order logic goes here
        alert('Order placed!');
    });

    // Event listener for "Add to Cart" button
    document.getElementById('add-to-cart-btn').addEventListener('click', function () {
        cartSection.style.right = '0';
    });

    // Event listener for "Add to Favorites" button
    document.getElementById('add-to-fav-btn').addEventListener('click', function () {
        favSection.style.right = '0';
        // openSidebarBtn.style.display = 'none';
    });

    // Event listener for close icon
    closeIcon.addEventListener('click', function () {
        cartSection.style.right = '-300px'; // Hide the sidebar by moving it to the right
        favSection.style.right = '-300px'; // Hide the sidebar by moving it to the right
        openSidebarBtn.style.display = 'block'; // Show open sidebar button
        sidebar.style.display = 'none';
    });

    // Event listener for open sidebar button
    openSidebarBtn.addEventListener('click', function () {
        sidebar.style.right = '0'; // Show the sidebar by moving it to the original position
        openSidebarBtn.style.display = 'none'; // Hide open sidebar button 
        sidebar.style.display = 'block';
    });
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
