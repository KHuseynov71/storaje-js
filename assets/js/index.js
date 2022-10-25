const inputName = document.querySelector(".form-control");
const inputPasword = document.querySelector("#inputPassword6");
const submintButton = document.querySelector(".btn-outline-primary");
const message = document.querySelector("p");
const loginForm = document.querySelector(".form-inline");
const registerBtn = document.querySelector(".btn-outline-warning")
const registerForm = document.querySelector(".needs-validation")





submintButton.addEventListener("click", () => {
    if (inputName.value.toLowerCase() === "admin" && inputPasword.value === "admin123") {
        localStorage.setItem("pasword",inputPasword.value)
        localStorage.setItem("login", inputName.value)
        loginForm.classList.add("form-login");
    }
})

if (localStorage.getItem("login")) {
    message.style.display = "block";
    message.innerText += `, ${localStorage.getItem("login")}`
    
}

registerBtn.addEventListener("click",()=>{
    loginForm.style.display= "none";
    // registerForm.classList.add("regstr-form")
    registerForm.classList.remove("regstr-for")
})