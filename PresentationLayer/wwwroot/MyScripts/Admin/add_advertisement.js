$(document).ready(function () {
    // FnLoadData1();
    $("#form1").submit(function () {

        FnInsertFiles();
        return false;
    });
});
$('#images').change(function () {
    var fp = $("#images");
    var lg = fp[0].files.length; // get length
    var items = fp[0].files;
    var fileSize = 0;

    if (lg > 0) {
        for (var i = 0; i < lg; i++) {
            fileSize = fileSize + items[i].size; // get file size
        }
        if (fileSize > 6097152) {
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

var table;
function FnLoadData1() {
    var param = [];
    var proc = '[Upload_Files_GetData]';
    Selector(param, proc).then(function (result) {
        $res = JSON.parse(result);

        $("#tbl_data").DataTable().destroy();
        $("#tbl_data tbody").empty();

        var index = 1;

        for (var i = 0; i < $res["dt1"].length; i++) {
            var rows = "";

            rows += "<td  style='font-weight: bold'>" + index +

                "<td>" + '<img src=' + "/" + $res["dt1"][i].image + ' alt="" width = "700px" height = "300px" >' +

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

//
var UploadFilesName = [], Count = 0;
function FnInsertFiles() {

    LoaderFadeIn();
    var url = $(location).attr('href');
    var str = url.lastIndexOf("/");
    var SubString = url.substring(str + 1);

    var fileUpload = $("#images").get(0);
    var FileTitle = document.getElementById("images").title;
    var files = fileUpload.files;
    if (files.length != 0) {
        var data = new FormData();
        data.append(files[0].name, files[0]);

        $.ajax({
            url: "../fileUploader.ashx",
            type: "POST",
            data: data,
            contentType: false,
            processData: false,

            success: function (result) {
                $res = JSON.parse(result);
                var param = [{ "name": "title", "Value": $("#title").val() },
                    
                    { "name": "status", "Value": SubString },
                    { "name": "FileType", "Value": "image" },
                    { "name": "UpdatedFile", "Value": "uploadWebsiteImages/" + $res[0].ImageName.replace(/ /g, "_") }];

                var proc = 'Files_Upload_Advertisement_Insert';
                Action(param, proc).then(function (result) {


                    if (result == "Files Updated Successfully") {
                        toastr["success"](result, 'Success Message!');
                        if (SubString == 'Add_Downloads') {
                            window.location.href = "Downloads";
                             }
                        else {
                            window.location.href = "Advertisement";
                             }
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


function Result(res) {

}
function ClearImage() {

    $("#images").val("");

}