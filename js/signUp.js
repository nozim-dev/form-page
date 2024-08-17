let btn_registration = document.querySelector("#btn_registration");
let email = document.querySelector("#email");
let message = document.querySelector(".message");
let cfpassword = document.querySelector("#cfpassword");
let crpassword = document.querySelector("#crpassword");
let signUp_main_password = document.querySelector(".signUp_main_password");
let eye = document.querySelector(".eye");

// yangi yaratilayotgan parol tasdiqlash bir-biriga mos kelishi 
cfpassword.addEventListener("keyup", (e) => {
    let cfP = e.target.value;
    if (cfP === crpassword.value) {
        signUp_main_password.classList.add("SamePassword");
        signUp_main_password.classList.remove("errorPassword");
        btn_registration.removeAttribute("disabled");
        btn_registration.style.cursor = "pointer";
    } else {
        signUp_main_password.classList.add("errorPassword");
        signUp_main_password.classList.remove("SamePassword");
        btn_registration.setAttribute("disabled", "true");
        btn_registration.style.cursor = "not-allowed";
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


// Submit bosilganda ma'lumotlar localStorageda saqlanadi.
btn_registration.addEventListener("click", (e) => {
    e.preventDefault()
    localStorage.setItem("user", JSON.stringify({
        "email": email.value,
        "parol": cfpassword.value
    }))
    window.location.pathname = "login.html";
})