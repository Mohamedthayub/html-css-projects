const user_btn = document.getElementById("submit_btn");
const user_error = document.getElementById("error");

export function validateEmail(e){
    const userinput = document.getElementById("user_email").value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(userinput == ""){
        user_error.innerText = "it should not be empty";
        e.preventDefault();
    }
    else if(!emailRegex.test(userinput)){
        user_error.innerText = "invalid Email";
        e.preventDefault();
    }
    else{
        user_error.innerText = "";
        window.location.href = "http://127.0.0.1:5500/html_css_projects/newsletter-sign-up-with-success-message-main%20(1)/newsletter-sign-up-with-success-message-main/pages/thankletter.html";
        return userinput;
    }
}
user_btn.addEventListener("click",validateEmail);
