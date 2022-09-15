function checkFormEntry()
{
    var name= document.getElementById("name").value;
	var email= document.getElementById("email").value;
    var pass= document.getElementById("password").value;
    var repeatpass= document.getElementById("repeat-pass").value;
    var check= document.getElementById("check");

    if(name==""){
        alert("Please enter a Name");
        return false;
    }
    if(email==""){
        alert("Please enter an Email");
        return false;
    }
    if(!email.includes("@")){	
		alert("Please Enter a Valid Username");
		return false;
	}
    if(pass=="" || repeatpass==""){
        alert("Please enter a Password");
        return false;
    }
    if(pass!=repeatpass){
        alert("Passwords don't match");
        return false;
    }
    if(check.checked==false){
        alert("Please accept the terms and conditions");
        return false;
    }
    window.location.href=("index.html");
	return false;
}

document.getElementById("register").onclick=checkFormEntry;
