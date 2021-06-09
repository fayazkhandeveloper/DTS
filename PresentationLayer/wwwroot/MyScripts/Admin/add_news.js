$(document).ready(function () {

    $("#form1").submit(function () {

        FnInsertHotelInfo();
        return false;
    });
});

function FnInsertHotelInfo() {
    var param = [{ "name": "Title", "Value": $("#title").val() },
    { "name": "Description", "Value": $("#description").val() },
        { "name": "Type", "Value": 'news'}];

    var proc = 'News_Info_Insert';
    //Action is a function defined in AjaxHandler file that expects 2 parmeters

    Action(param, proc).then(function (result) {
        if (result == "Operation Successfully Performed") {
            toastr["success"](result, 'Login Success!');
            window.location.href='News'
        }

        else {
            toastr["error"](result, 'Warning!');

        }
    });

}
function Result(res) {

}