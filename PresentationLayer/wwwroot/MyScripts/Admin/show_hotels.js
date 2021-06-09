$(document).ready(function () {
 
    FnLoadData1();
    $("#form1").submit(function () {

        FnInsertHotelInfo();
        return false;
    });
    $('#myLink').click(function () {
        var url = $(location).attr('href');
        var str = url.lastIndexOf("?");
        var SubString = url.substring(str + 1);
        window.location.href = 'Add_Page?' + SubString;
        return false;
    });
});
//Load the data in data list

var table;
function FnLoadData1() {
    var url = $(location).attr('href');
    var str = url.lastIndexOf("?");
    var SubString = url.substring(str + 1);
    var param = [];
    var proc = '[show_registration_pages_Data]';
    Selector(param, proc).then(function (result) {
        $res = JSON.parse(result);

        $("#sample_1").DataTable().destroy();
        $("#sample_1 tbody").empty();

        //  $("#sample_1 tbody").append("<tr style='color:#000;'><td>" + $res["dt1"][$i].ID + "</td><td>" + $res["dt1"][$i].Title + "</td><td>" + $res["dt1"][$i].Description + "</td><td><a onclick=' Edit(this)' class='fa fa-pencil'></a><a onclick='  Remove(this)' class='fa fa-times'></a></td></tr>");

        var index = 1;

        for (var i = 0; i < $res["dt1"].length; i++) {
            var rows = "";

            rows += "<td  style='font-weight: bold';width: 114.021px !important;>" + index +

                "<td>" + $res["dt1"][i].Name +
                "<td>" + $res["dt1"][i].address +
                "<td>" + $res["dt1"][i].province +
                "<td>" + $res["dt1"][i].district +
                "<td>" + $res["dt1"][i].phone_number +
                "<td>" + $res["dt1"][i].email +
                "</td><td>" + '<div class="btn-group">' +

                ' <button class="btn btn-xs green dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">' + ' Actions' +
                '<i class="fa fa-angle-down">' + '</i>' +
                '</button>' +

                ' <ul class="dropdown-menu" role="menu">' +
                '<li>' +
                '<a onclick="FnshowPage(this)" compdet="" >' + 'Show' + '</a>' +
                '<li>' +

                '<a  onclick="FnshowPage(this)" compdet="">' + ' Update' + ' </a> ' +

                '</li>' +



                ' <li>' +
                '<a  onclick="d(this)" compdet="">' + ' Delete' +
                '</a>' + '</li>' +
               

                ' </ul>' +

                '  </div>' +
                "</td><td style='display:none'>" + $res["dt1"][i].Id +
                "</td><td style='display:none'>" + $res["dt1"][i].Info_ID +"</td >"

            var tbody = document.querySelector("#sample_1 tbody");
            var tr = document.createElement("tr");
            tr.innerHTML = rows;
            tbody.appendChild(tr);


            index++;


        }

        //$('#sample_1').DataTable();

        //$('#sample_1').show();
        table = $("#sample_1").DataTable({

            "iDisplayLength": 25,
            dom: "Bfrtip",
            buttons: [
                {
                    extend: "copy",
                    className: "btn-sm"
                },
                {
                    extend: "csv",
                    className: "btn-sm"
                },
                {
                    extend: "excel",
                    className: "btn-sm"
                },
                {
                    extend: "pdfHtml5",
                    className: "btn-sm"
                },
                {
                    extend: "print",
                    className: "btn-sm"
                },
            ],

        });



        TableManageButtons = function () {
            "use strict";
            return {
                init: function () {
                    handleDataTableButtons();
                }
            };
        }();


        // barchartnew(ActiveUsers, InActiveUsers);
        table.on('search.dt', function () {
            var data = table.rows({ filter: 'applied' }).data();
            summaryFilter(data);
        });
        table.on('order.dt', function () {
            var data = table.rows({ filter: 'applied' }).data();
            summaryFilter(data);
        });
        summaryFilter(table.rows().data());
    });

}
function summaryFilter(data) {


}


function FnLoadData(ele) {
 
    //{ "name": "Basic_Info_ID", "Value": localStorage.getItem("CompanyId") }

    var param = [];

    var proc = 'Show_All_pages_Data';
    Selector(param, proc).then(function (result) {
        $res = JSON.parse(result);

        for ($i = 0; $i < $res["dt1"].length; $i++) {

            $("#sample_1 tbody").append("<tr style='color:#000;'><td>" + $res["dt1"][$i].ID + "</td><td>" + $res["dt1"][$i].Title + "</td><td>" + $res["dt1"][$i].Description + "</td><td><a onclick=' Edit(this)' class='fa fa-pencil'></a><a onclick='  Remove(this)' class='fa fa-times'></a></td></tr>");

        }
    });

}


function FnInsertHotelInfo() {
    var url = $(location).attr('href');
    var str = url.lastIndexOf("?");
    var SubString = url.substring(str + 1);
    var param = [{ "name": "Title", "Value": $("#title").val() },
    { "name": "Description", "Value": $("#description").val() },
    { "name": "Type", "Value": $("#pageurl").val() }];

    var proc = 'Website_Info_Insert';
    //Action is a function defined in AjaxHandler file that expects 2 parmeters

    Action(param, proc).then(function (result) {
        console.log(result);
        if (result == "Operation Successfully Performed") {
            toastr["success"](result, 'Login Success!');
        }

        else {
            toastr["error"](result, 'Warning!');

        }
    });

}

function FnshowPage(ele) {
    //$("#lblId1").val($(ele).closest("tr").find("td:eq(11)").text());

    localStorage.setItem("HotelId", $(ele).closest("tr").find("td:eq(9)").text());
    window.location.href = 'Hotel_Registration_Show';
}
function d(ele) {
    var result = confirm("Are you sure to delete?");
    if (result) {
        // Delete logic goes here
        tr = $(ele).closest('tr');
    Action([
        { "name": "Info_ID", "value": tr.children('td:eq(9)').html() }

    ], "[Hotel_Deleted]");
    }
}
function FnDelete(ele) {
    alert();
    $('<div></div>').appendTo('body')
        .html('<div><h6>Are you sure you want to delete this record?</h6></div>')
        .dialog({
            modal: true,
            title: 'Delete Confirmation',
            zIndex: 10000,
            autoOpen: true,
            width: 'auto',
            resizable: false,
            buttons: {
                Yes: function () {
                    //$("#lblId").text($(ele).closest('tr').children('td:eq(11)').html());

                    //var param = [{ "name": "RecordId", "Value": $("#lblId").text() }];

                    
                    //tr = $(ele).closest('tr');
                    //Action([
                    //    { "name": "Id", "value": tr.children('td:eq(16)').html() }

                    //], "[Advance_Booking_Delete]");



                    $(this).dialog("close");
                },
                No: function () {
                    $(this).dialog("close");
                }
            },
            close: function (event, ui) {
                $(this).remove();
            }
        });

}

function Result(text) {
    if (text == 'Operation Successfully Performed') {
        toastr["success"](text, 'Success Message!');
        //clearTextBox();
        FnLoadData1();
    }
    else if (text != 'Operation Successfully Performed') {
        toastr["error"](text, 'Error Message');
    }
}