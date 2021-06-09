$(document).ready(function () {
    alert();
    FnLoadData();
    $('#Userform').submit(function () {
     
        FnInsertProvince();
        return false;
    });
    $("#btnUpdate").click(function () {
        FnUpdateRecord();
    });


});





//Insert Provinces Function
function FnInsertProvince() {
    alert($("#TxtProvinceName").val() );
 Action([

     { "name": "NationalName", "Value": $("#TxtProvinceName").val() }
     ], "[Nationality_Insert]");

}

//Function Result calls  after SignUp

function Result(text) {
    console.log(text);
    if (text == 'Operation Successfully Performed') {
        toastr["success"](text, 'Success Message!');
        clearTextBox();
        FnLoadData();
    }
    else if (text != 'Operation Successfully Performed') {
        toastr["error"](text, 'Error Message');
    }
}


//Function for clearing the textboxes

function clearTextBox() {
    $('#TxtProvinceName').val("");
    $('#TxtProvinceName').focus();




}
//Retreiving Provinces Function
var table;
function FnLoadData() {

    var param = [];
    var proc = '[Nationality_Data]';
    Selector1(param, proc).then(function (result) {
        $res = JSON.parse(result);

        $("#deathTable").DataTable().destroy();
        $("#deathTable tbody").empty();

        var index = 1;
        for (var i = 0; i < $res.length; i++) {
            var rows = "";

            rows += "<td  style='font-weight: bold'>"+ index +
                "<td style='display:none'>" + $res[i].Country_ID +
                "<td>" + $res[i].Country_Name +
                "</td><td style='cursor:pointer'><a onclick='Edit(this)' class='btn btn-warning btn-xs'>EDIT</a><a  class='btn btn-danger btn-xs' onclick='d(this)'>Delete</a></td>"



            var tbody = document.querySelector("#deathTable tbody");
            var tr = document.createElement("tr");
            tr.innerHTML = rows;
            tbody.appendChild(tr);
            index++;




        }
        // $('#tableFIR').DataTable();

        //$('#cgrid').show();
        table = $("#deathTable").DataTable({

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

var tr;
function d(ele) {
    //alert($(ele).closest("tr").find("td:eq(1)").text());
  
        tr = $(ele).closest('tr');

                    Action([
                        { "name": "Id", "value": tr.children('td:eq(1)').html() }

                    ], "[Nationality_Delete]");
 
}

function Edit(ele) {


    $("#lblId").text($(ele).closest("tr").find("td:eq(1)").text());
    $("#EditName").val($(ele).closest("tr").find("td:eq(2)").text());

    $("#ModalEdit").modal('show');

}
function FnUpdateRecord() {
    Action([
    { "name": "RecordId", "Value": $("#lblId").text() },
        { "name": "NationalName", "Value": $("#EditName").val() }], "[Nationality_Updataion]");
    $("#ModalEdit").modal('hide');
    $("#Nationality_Updataion").focus();

}