function validation(){
    

    if(document.Fromfill.Username.value==""){
        document.getElementById("result").innerHTML= "Enetr Username*";
        document.getElementById("Username").value= "";
        document.getElementById("Username").focus();
        return false;
    }
    else if(document.Fromfill.Username.value.length<6){
        document.getElementById("result").innerHTML= "Atlast 6 Latter";
        return false;
    }
    // else if(document.Fromfill.Email.value==""){
    //     document.getElementById("result").innerHTML= "Enter your Email";
    //     document.getElementById("Email").value= "";
    //     document.getElementById("Email").focus();
    //     return false;
    // }
    else if(!document.Fromfill.Email.includes("@gmail.com")){
        document.getElementById("result").innerHTML= "Enter your Email";
        document.getElementById("Email").value= "";
        document.getElementById("Email").focus();
        return false;
    }

    else if(document.Fromfill.Number.value==""){
        document.getElementById("result").innerHTML= "Enter your Mobile number";
        document.getElementById("Number").value= "";
        document.getElementById("Number").focus();
        return false;
    }
    else if(document.Fromfill.Number.value.length !== 10){
        document.getElementById("result").innerHTML= "Enter your 10-digit Mobile Number";
        document.getElementById("Number").value= "";
        document.getElementById("Number").focus();
        return false;
    }
    else if(document.Fromfill.Password.value==""){
        document.getElementById("result").innerHTML= "Enter your Password";
        document.getElementById("Password").value= "";
        document.getElementById("Password").focus();
        return false;
    }
    else if(document.Fromfill.Password.value.length<8){
        document.getElementById("result").innerHTML= "Password must be 8-digit";
        document.getElementById("Password").value= "";
        document.getElementById("Password").focus();
        return false;
    }
    else if(document.Fromfill.CPassword.value==""){
        document.getElementById("result").innerHTML= "Enter your Confrom Password";
        document.getElementById("CPassword").value= "";
        document.getElementById("CPassword").focus();
        return false;
    }
    else if(document.Fromfill.CPassword.value !== document.Fromfill.Password.value){
        document.getElementById("result").innerHTML= "Password does'n matched";
        document.getElementById("Password").value= "";
        document.getElementById("Password").focus();
        document.getElementById("CPassword").value= "";
        // document.getElementById("CPassword").focus();
        return false;
    }
    else if(document.Fromfill.CPassword.value == document.Fromfill.Password.value){
        popup.classList.add("open-slide")
        
        return false;
    }
    
    
}
let popup=document.getElementById('popup');
function CloseSlide(){
    popup.classList.remove("open-slide")
    document.getElementById("Username").value= "";
    document.getElementById("Email").value= "";
    document.getElementById("Number").value= "";
    document.getElementById("Password").value= "";
    document.getElementById("CPassword").value= "";
    document.getElementById("Username").focus();
    return false;
}







