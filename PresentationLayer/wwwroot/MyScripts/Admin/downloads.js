$(document).ready(function () {
   
    FnLoadData1();
    $("#form1").submit(function () {

        FnInsertHotelInfo();
        return false;
    });
    //$('#myLink').click(function () {
    //    var url = $(location).attr('href');
    //    var str = url.lastIndexOf("?");
    //    var SubString = url.substring(str + 1);
    //    window.location.href = 'Add_Page?' + SubString;
    //    return false;
    //});
    $("#btnUpdate").click(function () {
        FnUpdateRecord();
    });

});
/*Start Company Registration files Uploaded */
$('#images').change(function () {
    var fp = $("#images");
    var lg = fp[0].files.length; // get length
    var items = fp[0].files;
    var fileSize = 0;

    if (lg > 0) {
        for (var i = 0; i < lg; i++) {
            fileSize = fileSize + items[i].size; // get file size
        }
        if (fileSize > 2097152) {
            alert('File size must not be more than 2 MB');
            $('#images').val('');
            $('#Imgimages').val('');
            //<img id="Imgimages" class="img-responsive" src="~/adminCSS/upload.png" style="width: 100px; height: 100px" />
            //'<img src=' + "~/adminCSS/upload.png"+' alt="" width = "700px" height = "300px" >'
        }
    }
});
function validatePDF(objFileControl) {
        var file = objFileControl.value;
        var len = file.length;
        var ext = file.slice(len - 4, len);
        if (ext.toUpperCase() == ".PDF") {
            formOK = true;
        }
        else {
            formOK = false;
            alert("Only PDF files allowed.");
            $('#images').val('');
        }
    }

//Load the data in data list

var table;
function FnLoadData1() {
  
    // var url = $(location).attr('href');
    //var str = url.lastIndexOf("?");
    //var SubString = url.substring(str + 1);
    var param = [];
    var proc = '[Show_advertisement_pages_Data]';
    Selector(param, proc).then(function (result) {
        $res = JSON.parse(result);
        $("#tbl_data").DataTable().destroy();
        $("#tbl_data tbody").empty();

      //  $("#tbl_data tbody").append("<tr style='color:#000;'><td>" + $res["dt1"][$i].ID + "</td><td>" + $res["dt1"][$i].Title + "</td><td>" + $res["dt1"][$i].Description + "</td><td><a onclick=' Edit(this)' class='fa fa-pencil'></a><a onclick='  Remove(this)' class='fa fa-times'></a></td></tr>");

        var index = 1;

        for (var i = 0; i < $res["dt2"].length; i++) {
           
            var rows = "";
           
            rows += "<td  style='font-weight: bold'>" + index +

                "<td style='display:none'>" + $res["dt2"][i].Files_ID +
               
                "<td>" + $res["dt2"][i].Title +
                "<td>" + $res["dt2"][i].imageName +
                "</td><td style='cursor:pointer'><a onclick='Edit(this)' class='btn btn-warning btn-xs'>EDIT</a><a  class='btn btn-danger btn-xs' onclick='d(this)'>Delete</a></td>"
              
            var tbody = document.querySelector("#tbl_data tbody");
            var tr = document.createElement("tr");
            tr.innerHTML = rows;
            tbody.appendChild(tr);


            index++;


        }
      
        // $('#tableFIR').DataTable();

        //$('#cgrid').show();
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

function FnInsertHotelInfo() {
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
        }

        else if (result != 'Operation Successfully Performed') {
            toastr["error"](result, 'Warning!');

        }
    });

}
function summaryFilter(data) {


}
function Result(res) {

}
function Edit(ele) {
    $("#lblId").text($(ele).closest("tr").find("td:eq(1)").text());
    $("#title").val($(ele).closest("tr").find("td:eq(2)").text());
    $("#Imgimages").val($(ele).closest("tr").find("td:eq(3)").text());

    $("#ModalEdit").modal('show');

}

var UploadFilesName = [], Count = 0;
function FnUpdateRecord() {
    LoaderFadeIn();
    var fileUpload = $("#images").get(0);
    var files = fileUpload.files;
    if (files.length != 0) {
        var data = new FormData();
        data.append(files[0].name, files[0]);

        console.log("ajax");
        $.ajax({
            url: "../fileUploader.ashx",
            type: "POST",
            data: data,
            contentType: false,
            processData: false,

            success: function (result) {
                $res = JSON.parse(result);
                var param = [{ "name": "FilesID", "Value": $("#lblId").text() },

                    { "name": "title", "Value": $("#title").val() },
                    { "name": "FileType", "Value": "image" },
                { "name": "UpdatedFile", "Value": "uploadWebsiteImages/" + $res[0].ImageName.replace(/ /g, "_") }];

                var proc = 'Files_Upload_Advertisement_Insert_Edit';
                Action(param, proc).then(function (result) {


                    if (result == "Files Updated Successfully") {
                        toastr["success"](result, 'Success Message!');

                        $("#ModalEdit").modal('hide');
                        FnLoadData1();

                    }
                    else {
                        toastr["error"](result, 'Warning!');

                    }
                });
            },
            error: function (err) {
                alert("Opps " + err.statusText)
            }

        });
        LoaderFadeOut();
    }

}



var tr;
function d(ele) {
   
    var url = $(location).attr('href');
    var str = url.lastIndexOf("?");
    var SubString = url.substring(str + 1);
    tr = $(ele).closest('tr');
var param = [{ "name": "Id", "value": tr.children('td:eq(1)').html() }];

    var proc = 'Advertisement_Info_Delete';
    //Action is a function defined in AjaxHandler file that expects 2 parmeters

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