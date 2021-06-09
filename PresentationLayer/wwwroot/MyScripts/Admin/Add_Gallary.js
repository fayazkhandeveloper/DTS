$(document).ready(function () {
   
    $("#btnSave").click(function () {
       
        FnInsertFiles();
    });

    var MaxInputs = 10; //maximum input boxes allowed
    var InputsWrapper = $("#tblImages tbody"); //Input boxes wrapper ID
    var AddButton = $("#addimage"); //Add button ID

    var x = InputsWrapper.length; //initlal text box count
    var FieldCount = 3; //to keep track of text box added

    $(AddButton).click(function (e)  //on add input button click
    {
        if (x <= MaxInputs) //max input box allowed
        {
            var totalRowCount = $("#tblImages tbody tr").length;

            FieldCount++; //text box added increment
            //add input box
            $(InputsWrapper).append('<tr><td width="523"><input type="file" onchange="readURL(' + parseInt(totalRowCount + 1)+');" class="form-control" name="image_src[]"  id="Images' + parseInt(totalRowCount + 1) + '" /></td></tr>');
            x++; //text box increment
        }
        return false;
    });
    
    $("body").on("click", ".removeclass", function (e) { //user click on remove text
        if (x > 1) {
            $(this).parent('view_image').remove(); //remove text box
            x--; //decrement textbox
        }
        return false;
    })
});
function readURL(e) {
    var fp = $("#Images" + e);
    var lg = fp[0].files.length; // get length
    var items = fp[0].files;
    var fileSize = 0;

    if (lg > 0) {
        for (var i = 0; i < lg; i++) {
            fileSize = fileSize + items[i].size; // get file size
        }
        if (fileSize > 2097152) {

            //alert($('#Images1'+e).val(''))
            alert('File size must not be more than 2 MB');

            $('#Images'+e).val('');

            //$('#Images1' + e).val('');
            //$('#Imgimages').val('');
            //<img id="Imgimages" class="img-responsive" src="~/adminCSS/upload.png" style="width: 100px; height: 100px" />
            //'<img src=' + "~/adminCSS/upload.png"+' alt="" width = "700px" height = "300px" >'
        }
    }
}
$('#Images1').change(function () {
    var fp = $("#Images1");
    var lg = fp[0].files.length; // get length
    var items = fp[0].files;
    var fileSize = 0;

    if (lg > 0) {
        for (var i = 0; i < lg; i++) {
            fileSize = fileSize + items[i].size; // get file size
        }
        if (fileSize > 2097152) {
           
            alert('File size must not be more than 2 MB');
            $('#Images1').val('');
            //$('#Imgimages').val('');
            //<img id="Imgimages" class="img-responsive" src="~/adminCSS/upload.png" style="width: 100px; height: 100px" />
            //'<img src=' + "~/adminCSS/upload.png"+' alt="" width = "700px" height = "300px" >'
        }
    }
});
function FnInsertFiles() {
    LoaderFadeIn();

    var totalRowCount = $("#tblImages tbody tr").length;
    var rowCount = 1;

    for ($k = 0; $k < totalRowCount; $k++) {

        var fileUpload = $("#Images" + rowCount + "").get(0);
        var files = fileUpload.files;
        if (files.length === 0 || files.length === undefined || files.length === null) {

            toastr["error"]('No file selected', 'Warning!');

        }
        else {

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
                    var param = [{ "name": "FileType", "Value": "Images" },
                    { "name": "UpdatedFile", "Value": "uploadWebsiteImages/" + $res[0].ImageName.replace(/ /g, "_") }];

                    var proc = 'upload_website_gallary_images_insert';
                    NewAction(param, proc).then(function (result) {
                        console.log("HotelImages/" + $res[0].ImageName + "//" + result);
                        if (result == 'Operation Successfully Performed') {
                            toastr["success"](result, 'Login Success!');
                            rowCount++;
                            window.location.href = "Gallary";
                        }

                        else if (result != 'Operation Successfully Performed') {

                            toastr["error"](result, 'Warning!');

                        }
                        LoaderFadeOut();

                    });

                },
            
            async: false,
            error: function (err) {
                alert("Opps " + err.statusText)
            }

        });

        }
        LoaderFadeOut();
    }


}
function Result(res) {
}