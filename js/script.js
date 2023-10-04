const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");

let setDarkMode = () => {
        (document.querySelector("body").classList = "dark"), localStorage.setItem("colorMode", "dark");
    }
let setLightMode = () => {
        (document.querySelector("body").classList = "light"), localStorage.setItem("colorMode", "light");
    }

let colorModeFromLocalStorage = () => {
        return localStorage.getItem("colorMode");
    }

let colorModeFromPreferences = () => {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

let loadAndUpdateColor = () => {
        "dark" == (colorModeFromLocalStorage() || colorModeFromPreferences()) ? darkButton.click() : lightButton.click();
    }

const radioButtons = document.querySelectorAll(".toggle__wrapper input");

radioButtons.forEach( (e) => {
    e.addEventListener("click", (e) => {
        darkButton.checked ? setDarkMode() : setLightMode();
    });
})

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
	e.matches ? darkButton.click() : lightButton.click();
})

loadAndUpdateColor();



/////////////////////////////////


// const body = document.getElementById("docBody");
// const radioButtons = document.getElementsByName("theme");

// let modeToggle = () => {
// 	body.toggleAttribute("data-light-mode");
// }

// for (let i=0; i < radioButtons.length; i++ ) {
// 	radioButtons[i].addEventListener('change', () => {
// 		body.toggleAttribute("data-light-mode");
// 	});
// }
