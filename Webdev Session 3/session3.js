function domid()
    {
        document.getElementById("hello").innerHTML="India";
    }

    function domtag()
    {
        var x=document.getElementsByTagName("li");//a=[0,1,2] x=['india','china','australia']
        x[1].innerHTML="Japan";
        x[0].innerHTML="South Africa";
        
    }

    function domclass()
    {
        var x=document.getElementsByClassName("sample");//[.......,country]
        x[0].innerHTML="India";
    }

    function formvalidation()
    {
        var x=document.forms['formValidation']['username'].value;
        var y=document.forms['formValidation']['password'].value;
        
        
        if (x == "") {
                alert("Plase enter the name");
                return false;

        }
        if (y == "")
        {
                alert("Plase enter the password");
                return false;

        }
        if (x == "ajay" && y=="ajay")
        {
                return true;
        }
        else 
        {
                alert("username not found");
                return false;
        }
        
    }