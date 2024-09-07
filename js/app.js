(() => {
    "use strict";
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    //! Add class active to current menu item
    document.addEventListener("DOMContentLoaded", (function() {
        const currentUrl = window.location.pathname;
        const menuItems = document.querySelectorAll(".menu__link");
        menuItems.forEach((item => {
            const href = item.getAttribute("href");
            if (href.includes(".html")) {
                const hrefWithoutHtml = href.slice(0, -5);
                if (currentUrl.includes(hrefWithoutHtml) || currentUrl === "/" && hrefWithoutHtml === "") item.classList.add("active");
            } else if (currentUrl.includes(href) || currentUrl === "/" && href === "") item.classList.add("active");
        }));
    }));
    //! Slideshow
        document.addEventListener("DOMContentLoaded", (function() {
        const slidesContainer = document.querySelector(".slider-main__slides");
        if (slidesContainer) {
            const slides = document.querySelectorAll(".slider-main__slide");
            let currentIndex = 0;
            let interval;
            slidesContainer.classList.add("loading");
            function showNextImage() {
                slides[currentIndex].classList.remove("active");
                currentIndex = (currentIndex + 1) % slides.length;
                slides[currentIndex].classList.add("active");
            }
            function startSlideshow() {
                interval = setInterval(showNextImage, 4e3);
            }
            function stopSlideshow() {
                clearInterval(interval);
            }
            slides[currentIndex].classList.add("active");
            setTimeout((() => {
                slidesContainer.classList.remove("loading");
                startSlideshow();
            }), 100);
            slidesContainer.addEventListener("mouseover", stopSlideshow);
            slidesContainer.addEventListener("mouseout", startSlideshow);
        }
    }));
    window["FLS"] = true;
})();