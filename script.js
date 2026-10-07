const modal = document.getElementById("registerModal");
const registerBtn = document.getElementById("registerBtn");
const detailsBtn = document.getElementById("detailsBtn");
const closeModal = document.getElementById("closeModal");
const registerForm = document.getElementById("registerForm");
const formMessage = document.getElementById("formMessage");

// Тіркелу терезесін ашу
function openModal() {
    modal.classList.add("active");
    formMessage.textContent = "";
}

// Тіркелу батырмалары
registerBtn.addEventListener("click", openModal);
detailsBtn.addEventListener("click", openModal);

// Терезені жабу
closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
});

// Терезенің сыртындағы жерді басқанда жабу
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("active");
    }
});

// Escape пернесі арқылы жабу
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        modal.classList.remove("active");
    }
});

// Форманы тексеру
registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !email) {
        formMessage.textContent = "Заполните все поля.";
        return;
    }

    formMessage.textContent =
        "Спасибо, " + name + "! Форма заполнена успешно.";

    registerForm.reset();
});