
function validateName() {
    var name = document.getElementById("Name").value;
    var nameRGEX = /^[a-zA-Z]{3,10}$/;
    var nameResult = nameRGEX.test(name);
    if(nameResult==false){
    document.getElementById("one1").innerHTML = "Please provide name in proper format!!!";
}
else{
    document.getElementById("one1").innerHTML = "";
}
}
function validateDob(){
    var email = document.getElementById("dob").value;
    var dobRGEX = /^[a-zA-Z]{3,10}$/;
    var dobResult = dobRGEX.test(email);
    if(dobResult==false){
        document.getElementById("one2").innerHTML = "Please provide dob in proper format!!!";
    }
    else{
        document.getElementById("one2").innerHTML = "";
    }
}
function validatePhone(){
    var phone = document.getElementById("Phone").value;
    var phoneRGEX = /^[6-9]{1}[0-9]{9}$/;
    var phoneResult = phoneRGEX.test(phone);
    if(phoneResult==false){
        document.getElementById("one3").innerHTML = "Please provide phone in proper format!!!";
    }
    else{
        document.getElementById("one3").innerHTML = "";
    }
}
    function validateEmail(){
        var email = document.getElementById("Email").value;
        var emailRGEX = /^[6-9]{1}[0-9]{9}$/;
        var emailResult = emailRGEX.test(email);
        if(emailResult==false){
            document.getElementById("one4").innerHTML = "Please provide emailidF in proper format!!!";
        }
        else{
            document.getElementById("one4").innerHTML = "";
        }

}
