const toggleButton = document.getElementById("toggle-dark-mode");
const body = document.body;

// Carregar preferência do usuário
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
}

// Alternar modo
toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Salvar a escolha do usuário
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});

voltarButton.addEventListener("click", () => {
    window.location.href = "index.html";
})