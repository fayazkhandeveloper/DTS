$(document).ready(function () {
    $("#form1").submit(function () {
        //Validate Form fields before submitting
        
        // Login after validation

        Login();
        return false;
    });
 });
function Login() {
   
        var param = [{ "name": "Email", "Value": $("#txtUsername").val() },
    { "name": "Password", "Value": $("#txtPassword").val() }];
        var proc = 'User_Login';

        //FnLogin is a function defined in AjaxHandler file that expects 2 parmeters
   
        FnLogin(param, proc).then(function (result) {

            if (result == "Incorrect" || result == "Error") {
                toastr["error"]("Incorrect Username/password", 'Login Failed!');
             }
            else {
                toastr["success"]("Valid User", 'Login Success!');
                window.location.href = "/Admin/Index";
            }
        });
    }

function Result(text)
{
    
    if (text == "Record Already Exists" || text == "Incorrect" || text == "Error") {
        ErrMessage(text);
    }
    else {
        SuccMessage(text);
    }
}


