// --------------=(Sections hide/show animation)=--------------- //

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
            entry.target.classList.add('animate__bounceInUp')
        } else {
            entry.target.classList.remove('show')
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));

// ------------------------------------------------------------- //

// ------------------=(Shiny effect on hover)=------------------ //

const section = document.querySelectorAll(".shiny");
const readout = document.querySelectorAll("p");

section.forEach(element => addEventListener("mousemove", (e) => {
    const { x, y } = element.getBoundingClientRect();
    element.style.setProperty("--x", e.clientX - x);
    element.style.setProperty("--y", e.clientY - y);
}));

// ------------------------------------------------------------- //

// -----------------------=(Rain effect)=----------------------- //

let hrElement;
const counter = 0;

for (let i = 0; i < counter; i++) {
    hrElement = document.createElement("HR");

    hrElement.style.left = Math.floor(Math.random() * window.innerWidth) + 10 + "px";
    hrElement.style.animationDuration = 0.5 + Math.random() * 0.9 + "s";
    hrElement.style.animationDelay = Math.random() * 10 + "s";

    document.body.appendChild(hrElement);
}

// ------------------------------------------------------------- //