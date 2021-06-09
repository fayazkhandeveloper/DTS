$(document).ready(function () {

    $("#form1").submit(function () {

        FnInsertHotelInfo();

        return false;
    });
});

function FnInsertHotelInfo() {
    LoaderFadeIn();
    var url = $(location).attr('href');
    var str = url.lastIndexOf("?");
    var SubString = url.substring(str + 1);
    $("#pageurl").val(SubString);
    var param = [{ "name": "Title", "Value": $("#title").val() },
    { "name": "Description", "Value": $("#description").val() },
    { "name": "Type", "Value": $("#pageurl").val() }];

    var proc = 'Website_Info_Insert';
    //Action is a function defined in AjaxHandler file that expects 2 parmeters

    Action(param, proc).then(function (result) {
     
       
        if (result == 'Operation Successfully Performed') {
           toastr["success"](result, 'Login Success!');
             window.location.href = "Show_Page?" + SubString;
            }

        else if (result != 'Operation Successfully Performed') {

            toastr["error"](result, 'Warning!');
            

            }

        LoaderFadeOut();

    });

}


function Result(res) {

}