// getting elements
const namebox = document.getElementById("name")
const nameError = document.getElementById("nameError")

const password = document.getElementById("password")
const passwordError = document.getElementById("passwordError")

const confirmPw = document.getElementById("confirmPw")
const confirmPwError = document.getElementById("confirmPwError")

const submitBtn = document.getElementById("submitbtn")
submitBtn.addEventListener("click",function(event){
    event.preventDefault()

    //creating regex
    const nameRegex = /^[A-Za-z\s]{2,}$/ 

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if(nameRegex.test(namebox.value)===false ){
        nameError.textContent="Name is required"
    }
    else{
        nameError.textContent="";
    }
    if(passwordRegex.test(password.value)===false){
        passwordError.textContent="Password is required"
    }
    else{
        passwordError.textContent="";
    }
    if(confirmPw.value!==password.value){
        confirmPwError.textContent="Password doesn't match"
    }
    else{
        confirmPwError.textContent=""
    }

    
})