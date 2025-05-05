const user_btn = document.getElementById("submit_btn");
const user_error = document.getElementById("error");
const user_email_input = document.getElementById("user_email"); // Store the input element

export function validateEmail(userinput) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (userinput === "") {
        user_error.innerText = "Email should not be empty";
        return false;
    }
    else if (!emailRegex.test(userinput)) {
        user_error.innerText = "Invalid Email";
        return false;
    }
    else {
        user_error.innerText = "";
        window.location.href = "http://127.0.0.1:5500/html_css_projects/newsletter-sign-up-with-success-message-main%20(1)/newsletter-sign-up-with-success-message-main/pages/thankletter.html";
        return true;
    }
}

user_btn.addEventListener("click", (e) => {
    const userinput = user_email_input.value.trim();
    const isValid = validateEmail(userinput);
    
    if (!isValid) {
        e.preventDefault();
    } else {
        user_email_input.value = ""; 
    }
});