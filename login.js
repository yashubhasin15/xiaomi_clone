function checkFormEntry()
{
	var a=document.getElementById("username").value;
	var b=document.getElementById("password").value;

	if(a=="")
	{		
		document.getElementById("errormsg").innerHTML="*Please Enter the Username";
		return false;
	}

    if(!a.includes("@"))
	{	
		document.getElementById("errormsg").innerHTML="*Please Enter a Valid Username";
		return false;
	}

	if(b=="")
	{	
		document.getElementById("errormsg").innerHTML="*Please Enter the Password";
		return false;
	}
	
    window.location.href=("index.html");
    return false;
}

document.getElementById("login").onclick=checkFormEntry;
