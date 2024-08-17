window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("user")) {
        window.location.pathname = "Main.html";
    } else {
        window.location.pathname = "index.html";
    }
})
let deleted_btn = document.querySelector(".deleted_btn");

deleted_btn.addEventListener("click", () => {
    localStorage.clear();
    window.location.pathname = "index.html";
})


// LocalStorageni objectlari:

// clear() - tozalaydi localStorageni hammasini
// getItem() - localStoragedagi ma'lumotni olib keladi
// key() - index yozasiz bizlarga o'sha indexda qaysi kalit so'zi borligni qaytaradi.
// length - localStorageni uzunligini (nechta kalit so'zi borligini) aytadi.
// removeItem() - aynan bitta kalit so'ziga yashirilgan localStoragedagi ma'lumotni o'chiradi.
// setItem() - localStoragega ma'lumot qo'yish uchun mo'ljallangan.


// JSON - JavaScript Object Notation (format file)

// stringify() - Objectni JSON formatga o'giradi.
// parse() - JSON formatni Objectga o'giradi.