$(document).ready(function () {
    FnLoadData1();
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
        }
    }
});
/*END Bank Guarantee files Uploaded */
function previewimg(url) {
    if (url.files && url.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            if ($('#images').val() != '') {
                $("#Imgimages").attr('src', e.target.result);
            }
            else {
                $("#Imgimages").attr('src', "/adminCSS/upload.png");
            }
           // $("#Imgimages").attr('src', e.target.result);
        }
        reader.readAsDataURL(url.files[0]);
    }
}
var table;
function FnLoadData1() {
    LoaderFadeIn();
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

                "<td>" + $res["dt1"][i].Files_ID +

              
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
        }
            ();


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
        LoaderFadeOut();
    });

}
function Result(res) {

}

function summaryFilter(data) {


}
function ClearImage() {

    $("#images").val("");
    
}
function Edit(ele) {
    $("#lblId").text($(ele).closest("tr").find("td:eq(1)").text());

    var param = [{ "name": "FilesID", "Value": $("#lblId").text() }];

    var patt = /\"|\'|\)/g;
    var proc = 'Upload_Files_GetData_Edit';
    Selector(param, proc).then(function (result) {

        $res = JSON.parse(result);

        if ($res["dt1"].length != []) {
            $("#Imgimages").attr('src', "/" + $res["dt1"][0].image);

        }
    $("#ModalEdit").modal('show');

    });
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
                    { "name": "FileType", "Value": "image" },
                    { "name": "UpdatedFile", "Value": "uploadWebsiteImages/" + $res[0].ImageName.replace(/ /g, "_") },
                    { "name": "Type", "Value": $("#categries").val() }];

                var proc = 'Files_Upload_Insert_Edit';
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

function d(ele) {
    
        tr = $(ele).closest('tr');
    var result = confirm("Are you sure to delete?");
    if (result) {

        tr = $(ele).closest('tr');
        var param = [{ "name": "Id", "value": tr.children('td:eq(1)').html() }]

        var proc = 'Slider_Deleted';
        Action(param, proc).then(function (result) {


            if (result == 'Operation Successfully Performed') {
                toastr["success"](result, 'Success Message!');
                FnLoadData1();
            }
            else if (result != 'Operation Successfully Performed') {
                toastr["error"](result, 'Error Message');
            }

        });
    }
}