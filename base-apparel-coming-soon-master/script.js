function isFormValid(){
    let email = document.querySelector(".email-field").value;
    let emailForm = document.querySelector(".email-form");
    let errorIcon = document.querySelector(".error-icon");
     let info = document.querySelector(".info");
    if (validateEmail(email)) {
        
        info.style.display = "none";
      
        errorIcon.style.display = "none";
       
        emailForm.classList.remove('hilite')
       
        
        
    } else {
        info.style.display = "block";
        info.innerHTML = "Please provide a valid email"
        errorIcon.style.display = "block";
        emailForm.classList.add('hilite')
    }
    
  
    
};
 function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
 } 
