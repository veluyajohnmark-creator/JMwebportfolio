let button = document.getElementById("darkmode");

let savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
}


function updateIcon() {
    if (button) {
        if (document.body.classList.contains("light-mode")) {
            button.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            button.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    }
}

updateIcon();

if (button) {
    button.onclick = function() {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }

        updateIcon();
    };
}