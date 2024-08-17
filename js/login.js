let btn_login = document.querySelector("#btn_login");
let email = document.querySelector("#email");
let message = document.querySelector(".message");
let cfpassword = document.querySelector("#cfpassword");
let eye = document.querySelector(".eye");

// Loginda Ma'lumotlarni LocalStorage bilan tekshirish

btn_login.addEventListener("click", (e) => {
    e.preventDefault();
    let userData = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : false;

    if (userData.email === email.value && userData.parol === cfpassword.value) {
        window.location.pathname = "index.html";
    } else {
        message.innerHTML = "Error! Email or password incorrect.";
    }
})

// parolni tekshirish ko'zcha yordamida
eye.addEventListener("click", () => {
    if (cfpassword.getAttribute("type") === "text") {
        cfpassword.setAttribute("type", "password");
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
    } else {
        cfpassword.setAttribute("type", "text");
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");
    }
});
