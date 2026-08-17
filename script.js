lucide.createIcons();


// MOBILE MENU

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });

});


// UNDER CONSTRUCTION MODAL

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const closeModal = document.getElementById("closeModal");

const clickableItems = document.querySelectorAll(".clickable");

clickableItems.forEach(item => {

    item.addEventListener("click", () => {

        const title = item.dataset.title || "Coming Soon";

        modalTitle.textContent = title;

        modal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});

closeModal.addEventListener("click", () => {

    modal.classList.remove("active");

    document.body.style.overflow = "";

});

modal.addEventListener("click", event => {

    if (event.target === modal) {

        modal.classList.remove("active");

        document.body.style.overflow = "";

    }

});

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        modal.classList.remove("active");

        document.body.style.overflow = "";

    }

});


// SCROLL REVEAL

const sections = document.querySelectorAll(
    ".section, .exploring, .message-section, .contact"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.08
    }
);

sections.forEach(section => {

    section.classList.add("reveal");

    observer.observe(section);

});


// MOUSE GLOW

const mouseGlow = document.createElement("div");

mouseGlow.className = "mouse-glow";

document.body.appendChild(mouseGlow);

document.addEventListener("mousemove", event => {

    mouseGlow.style.left = event.clientX + "px";
    mouseGlow.style.top = event.clientY + "px";

});