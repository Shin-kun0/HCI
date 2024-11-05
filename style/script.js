document.addEventListener("DOMContentLoaded", () => {

        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('nav-active');
                hamburger.classList.toggle('toggle');
        });


        const currentPath = window.location.pathname.split("/").pop(); 
    
        document.querySelectorAll(".nav-links li a").forEach(link => {
            if (link.getAttribute("href") === currentPath) {
                link.classList.add("active");
            }
        });
    });