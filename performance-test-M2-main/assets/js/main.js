toggle.addEventListener("click", () => {
    nav.classList.toggle("active");

    toggle.textContent = nav.classList.contains("active") ? "✖" : "☰";
});