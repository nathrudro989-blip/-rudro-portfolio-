// =====================================
// DARK / LIGHT MODE
// =====================================

const root = document.documentElement;

// আগে সেভ করা Theme লোড
const savedTheme = localStorage.getItem("rudro-theme");

if (savedTheme) {
    root.dataset.theme = savedTheme;
}

// Theme পরিবর্তন
document.querySelectorAll("[data-theme-toggle]").forEach(button => {

    button.addEventListener("click", () => {

        const currentTheme = root.dataset.theme;

        const newTheme = currentTheme === "dark" ? "light" : "dark";

        root.dataset.theme = newTheme;

        localStorage.setItem("rudro-theme", newTheme);

    });

});


// =====================================
// CHANGE ACCENT COLOR
// =====================================

const accents = {
    red: "#f12d3b",
    blue: "#2864d7",
    green: "#168b68",
    purple: "#8156c9"
};

// আগে সেভ করা Color
const savedAccent = localStorage.getItem("rudro-accent");

if (savedAccent) {

    root.style.setProperty("--accent", savedAccent);

    root.style.setProperty(
        "--accent-soft",
        savedAccent + "18"
    );

}

// Color button
document.querySelectorAll("[data-accent]").forEach(button => {

    button.addEventListener("click", () => {

        const colorName = button.dataset.accent;

        const selectedColor = accents[colorName];

        root.style.setProperty("--accent", selectedColor);

        root.style.setProperty(
            "--accent-soft",
            selectedColor + "18"
        );

        localStorage.setItem("rudro-accent", selectedColor);

    });

});


// =====================================
// SIDEBAR OPEN / CLOSE
// =====================================

const menuButton = document.querySelector(".menu-btn");

const sidebar = document.querySelector(".sidebar");

const overlay = document.querySelector(".sidebar-overlay");

function closeSidebar() {

    sidebar?.classList.remove("open");

    overlay?.classList.remove("open");

}

// Open sidebar
menuButton?.addEventListener("click", () => {

    sidebar?.classList.add("open");

    overlay?.classList.add("open");

});

// Close sidebar
document.querySelectorAll("[data-close-sidebar]").forEach(button => {

    button.addEventListener("click", closeSidebar);

});


// =====================================
// FAQ ACCORDION
// =====================================

document.querySelectorAll(".faq-question").forEach(question => {

    question.addEventListener("click", () => {

        const faqItem = question.closest(".faq-item");

        faqItem.classList.toggle("open");

    });

});


// =====================================
// SCROLL TO TOP BUTTON
// =====================================

const topButton = document.querySelector(".back-top");

// Scroll করলে Button দেখাবে
window.addEventListener("scroll", () => {

    if (window.scrollY > 350) {

        topButton?.classList.add("show");

    } else {

        topButton?.classList.remove("show");

    }

});

// Button click করলে উপরে যাবে
topButton?.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =====================================
// DYNAMIC TYPING ANIMATION
// =====================================

const words = [
    "creative ideas",
    "clean websites",
    "useful experiences",
    "new possibilities"
];

let wordIndex = 0;

let characterIndex = 0;

let deleting = false;

const typedText = document.querySelector(".typed");

if (typedText) {

    function typeAnimation() {

        const currentWord = words[wordIndex];

        // লেখা দেখানো
        typedText.textContent = currentWord.slice(
            0,
            characterIndex
        );

        // অক্ষর যোগ করা
        if (!deleting && characterIndex < currentWord.length) {

            characterIndex++;

            setTimeout(typeAnimation, 85);

        }

        // লেখা শেষ হলে একটু অপেক্ষা
        else if (!deleting) {

            deleting = true;

            setTimeout(typeAnimation, 1100);

        }

        // অক্ষর মুছে ফেলা
        else if (characterIndex > 0) {

            characterIndex--;

            setTimeout(typeAnimation, 42);

        }

        // পরের শব্দ
        else {

            deleting = false;

            wordIndex = (wordIndex + 1) % words.length;

            setTimeout(typeAnimation, 250);

        }

    }

    typeAnimation();

}


// =====================================
// SMOOTH SCROLLING
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

        const target = document.querySelector(
            link.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

            closeSidebar();

        }

    });

});


// FLOATING SUPPORT SYSTEM

const supportBtn = document.getElementById("supportBtn");
const contactOptions = document.getElementById("contactOptions");
const supportIcon = document.getElementById("supportIcon");

if (supportBtn && contactOptions) {

    supportBtn.addEventListener("click", function () {

        contactOptions.classList.toggle("active");

        if (contactOptions.classList.contains("active")) {
            supportIcon.textContent = "×";
        } else {
            supportIcon.textContent = "🎧";
        }

    });

}