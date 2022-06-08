const scrollOffset = 200;

const scrollElements = document.querySelectorAll(".js-scroll");
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const rootElement = document.documentElement;

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

const elementInView = (el, offset) => {
    const elementTop = el.getBoundingClientRect().top;

    return elementTop <= window.innerHeight - offset;
};

const displayScrollElement = (scrollElement) => {
    scrollElement.classList.add("scrolled");
};

const hideScrollElement = (scrollElement) => {
    scrollElement.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, scrollOffset)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});

scrollToTopBtn.addEventListener("click", scrollToTop);

