$(document).ready(function () {
    alert()
    $("#form1").submit(function (event) {
        Login();
        return false;
    });
});

function Login() {
    $.ajax({
        type: "POST",
        url: "/Admin/LoginAction",

        data: { Email: $("#txtUsername").val(), Password: $("#txtPassword").val() },
        dataType: "JSON",
        success: function (response) {

            console.log('res', response);

            if (response.succeeded == false) {

                toastr["error"]("Invalid Credentails");
            }
            else {
                toastr["success"](response.succeeded, 'Success!');
                window.location.href = "/Admin/Index";
            }

        },
        error: function (status, error) {

        },

    });

}





