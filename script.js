// 1. Select the menu button and navigation links

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


// 2. Open and close the mobile menu

menuBtn.addEventListener("click", function() {

    navLinks.classList.toggle("active");

    // Checking whether the menu is open

    if (navLinks.classList.contains("active")) {

        menuBtn.textContent = "✕";

        menuBtn.setAttribute("aria-expanded", "true");

    } else {

        menuBtn.textContent = "☰";

        menuBtn.setAttribute("aria-expanded", "false");

    }

});

// 3. Closing menu after clicking a navigation link

const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";

        menuBtn.setAttribute("aria-expanded", "false");

    });

});
