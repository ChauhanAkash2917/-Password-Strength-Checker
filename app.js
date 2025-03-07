const passwordInput = document.querySelector("#password");
const togglepassword = document.querySelector("#togglepassword");
const submitbtn = document.querySelector("#submitbtn");
const confirmpassword = document.querySelector("#confirmpassword");
const togglepasswordconfirm = document.querySelector("#togglepasswordconfirm");
const confirmError = document.querySelector("#confirmError");
const letterCriteria = document.querySelector("#letter");
const capitalCriteria = document.querySelector("#capital");
const numberCriteria = document.querySelector("#number");
const symbolCriteria = document.querySelector("#symbol");
const lengthCriteria = document.querySelector("#length");

const letterRegex = /[a-z]/;
const capitalRegex = /[A-Z]/;
const numberRegex = /[0-9]/;
const symbolRegex = /[@$!%*?&#]/;

togglepassword.addEventListener("click", () => {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});

togglepasswordconfirm.addEventListener("click", () => {
    confirmpassword.type = confirmpassword.type === "password" ? "text" : "password";
});

passwordInput.addEventListener("input", () => {
    letterCriteria.classList.toggle("valid", letterRegex.test(passwordInput.value));
    capitalCriteria.classList.toggle("valid", capitalRegex.test(passwordInput.value));
    numberCriteria.classList.toggle("valid", numberRegex.test(passwordInput.value));
    symbolCriteria.classList.toggle("valid", symbolRegex.test(passwordInput.value));
    lengthCriteria.classList.toggle("valid", passwordInput.value.length >= 8);
});

confirmpassword.addEventListener("input", () => {
    confirmError.textContent = confirmpassword.value !== passwordInput.value ? "Passwords do not match!" : "";
});

submitbtn.addEventListener("click", () => {
    if (passwordInput.value.length >= 8 && confirmpassword.value === passwordInput.value) {
        alert("Password successfully set!");
    } else {
        alert("Please meet the password requirements!");
    }
});