const cvOpen = document.getElementById("cv-open")
const projectSelect = document.getElementById("project");
const fADS = document.getElementById("food-aid-distribution-system");
const aBS = document.getElementById("airline-booking-system");
const airlineDemo = document.getElementById("airline-demo")
const reloadButton = document.getElementById("reload");

cvOpen.addEventListener("click", () => {
    window.open("Huzaifa-Amir-CV.pdf", "_blank")
});

fADS.style.display = "none"
aBS.style.display = "none"
projectSelect.addEventListener("change", () => {
    if (projectSelect.value == "food-aid-distribution-system") {
        aBS.style.display = "none"
        fADS.style.display = "block"
    }
    if (projectSelect.value == "airline-booking-system") {
        fADS.style.display = "none"
        aBS.style.display = "block"
        airlineDemo.src = airlineDemo.src
    }
});

reloadButton.addEventListener("click", () => {
    airlineDemo.src = airlineDemo.src
});