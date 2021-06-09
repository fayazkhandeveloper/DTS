$(document).ready(function () {

    FnLoadData1();
   
});
//Load the data in data list
$("#btnUpdate").click(function () {
    FnUpdateRecord();
});
var table;
function FnLoadData1() {
    var param = [];
    var proc = '[show_news_pages_data]';
    Selector(param, proc).then(function (result) {
        $res = JSON.parse(result);

        $("#tbl_data").DataTable().destroy();
        $("#tbl_data tbody").empty();

        //  $("#tbl_data tbody").append("<tr style='color:#000;'><td>" + $res["dt1"][$i].ID + "</td><td>" + $res["dt1"][$i].Title + "</td><td>" + $res["dt1"][$i].Description + "</td><td><a onclick=' Edit(this)' class='fa fa-pencil'></a><a onclick='  Remove(this)' class='fa fa-times'></a></td></tr>");

        var index = 1;

        for (var i = 0; i < $res["dt1"].length; i++) {
            var rows = "";

            rows += "<td  style='font-weight: bold'>" + index +

                "<td style='display:none'>" + $res["dt1"][i].ID +
                "<td>" + $res["dt1"][i].Title +
                "<td>" + $res["dt1"][i].Description +
                "<td>" + $res["dt1"][i].type +
                "</td><td style='cursor:pointer'><a onclick='Edit(this)' class='btn btn-warning btn-xs'>EDIT</a><a  class='btn btn-danger btn-xs' onclick='d(this)'>Delete</a></td>"

            var tbody = document.querySelector("#tbl_data tbody");
            var tr = document.createElement("tr");
            tr.innerHTML = rows;
            tbody.appendChild(tr);


            index++;


        }
        table = $("#tbl_data").DataTable({

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

function Result(res) {

}

function Edit(ele) {
    $("#lblId").text($(ele).closest("tr").find("td:eq(1)").text());
    $("#title").val($(ele).closest("tr").find("td:eq(2)").text());
    $("#description").val($(ele).closest("tr").find("td:eq(3)").text());
    $("#categries").val($(ele).closest("tr").find("td:eq(4)").text());
    
    $("#ModalEdit").modal('show');

}
function FnUpdateRecord() {
    var param = [{ "name": "RecordId", "Value": $("#lblId").text() },
    { "name": "Title", "Value": $("#title").val() },
    { "name": "Description", "Value": $("#description").val() },
    { "name": "Type", "Value": 'news'}];

    var proc = 'News_Info_Insert_Edit';
    Action(param, proc).then(function (result) {

        if (result == 'Operation Successfully Performed') {
            toastr["success"](result, 'Login Success!');
            $("#ModalEdit").modal('hide');
            FnLoadData1();
        }

        else if (result != 'Operation Successfully Performed') {
            toastr["error"](result, 'Warning!');

        }
    });
    //



}


var tr;
function d(ele) {
    tr = $(ele).closest('tr');
    var param = [{ "name": "Id", "value": tr.children('td:eq(1)').html() }];

    var proc = 'News_Info_Insert_Delete';

    Action(param, proc).then(function (result) {

        if (result == 'Operation Successfully Performed') {
            toastr["success"](result, 'Login Success!');
            $("#ModalEdit").modal('hide');
            FnLoadData1();
        }

        else if (result != 'Operation Successfully Performed') {
            toastr["error"](result, 'Warning!');

        }
    });
}