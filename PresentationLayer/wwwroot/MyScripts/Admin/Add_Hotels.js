
$(document).ready(function () {
 
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
            $(InputsWrapper).append('<tr><td width="395"><input type="text" id="image_title' + parseInt(totalRowCount + 1) + '" name="image_title[]"  class="form-control"/></td><td width="523"><input type="file" onchange="readURL(this);" class="form-control" name="image_src[]"  id="Images' + parseInt(totalRowCount + 1) + '" /></td><td><textarea name="image_detail[]" id="image_detail' + parseInt(totalRowCount + 1) + '" class="form-control"" ></textarea></td></tr>');
            x++; //text box increment
        }
        return false;
    });
    FnLoadData();
    FnLoadData1();
    $("body").on("click", ".removeclass", function (e) { //user click on remove text
        if (x > 1) {
            $(this).parent('view_image').remove(); //remove text box
            x--; //decrement textbox
        }
        return false;
    })
    $("#btnSave").click(function () {
        FnInsertFiles();
    });
});


function FnInsertFiles() {
    var totalRowCount = $("#tblImages tbody tr").length;
    var rowCount = 1;

    for ($k = 0; $k < totalRowCount; $k++) {
     
        var RecordId = 'HMS-' + rowCount + '';
        var fileUpload = $("#Images" + rowCount + "").get(0);
       // var FileTitle = document.getElementById("Images" + totalRowCount + "").title;
      
        var files = fileUpload.files;

        
            var data = new FormData();
            data.append(files[0].name, files[0]);
            $.ajax({
                url: "../fileImageUploader.ashx",
                type: "POST",
                data: data,
                contentType: false,
                processData: false,
                success: function (result) {
                    $res = JSON.parse(result);

                    alert($("#image_title" + rowCount + "").val() + "/" + $("#image_detail" + rowCount + "").val());
                    var param = [{ "name": "RecordId", "Value": RecordId }, { "name": "Image_Title", "Value": $("#image_title" + rowCount + "").val() },
                        { "name": "FileType", "Value": "Images" }, { "name": "Image_Description", "Value": $("#image_detail" + rowCount + "").val() },
                      { "name": "UpdatedFile", "Value": "WebsiteImages/" + $res[0].ImageName.replace(/ /g, "_") }];
                    
                    var proc = 'Images_Insert';
                    NewAction(param, proc).then(function (result) {
                        console.log("WebsiteImages/" + $res[0].ImageName + "//" + result);
                        if (result == "Images Saved Successfully") {
                            toastr["success"](result, 'Success Message!');
                       rowCount++;
                        }
                        else {
                            toastr["error"](result, 'Warning!');

                        }
                    });
                    
                },
                async: false,
                error: function (err) {
                    alert("Opps " + err.statusText)
                }

            });
            
            

    }
   
   
}


//function LoadData() {


//    var param = [{ "name": "UId", "value": "7774" }];
//    var proc = 'Designation_Data';
//    SelectorGeneral(param, proc).then(function (result) {

//        $res = JSON.parse(result);
//        $("#ddlRole").empty();

//        for ($i = 0; $i < $res.length; $i++) {
//            $("#ddlRole").append("<option value=" + $res[$i].Dept_Designation_Id + " >" + $res[$i].Dept_Designation_Type + "</option> ");
//        }




//    });

//}
//Load the data in data list
function FnLoadData() {

    var param = [];

    var proc = 'Image_Load_Data';
    Selector(param, proc).then(function (result) {
        $res = JSON.parse(result);

        //var totalRowCount = $("#tblImages tbody tr").length;

        //FieldCount++; //text box added increment
        ////add input box
        //$(InputsWrapper).append('<tr><td width="395"><input type="text" ' + $res["dt1"][0].Image_Title + ' name="image_title[]"  class="form-control"/></td><td width="523"><input type="file" onchange="readURL(this);" class="form-control" name="image_src[]"  id="Images' + parseInt(totalRowCount + 1) + '" /></td><td><textarea name="image_detail[]" ' + $res["dt1"][0].Image_Description + ' class="form-control"" ></textarea></td></tr>');
        //x++;
        ////text box increment


        //for ($i = 0; $i < $res.length; $i++) {

        //    $("#tblImages tbody").append("<tr style='color:#000;'><td>" + $res[$i].Image_Title + "</td><td>" + $res[$i].Image_Description + "</td></tr>");
        //}
        var MaxInputs = 10; //maximum input boxes allowed
        var InputsWrapper = $("#tblImages tbody"); //Input boxes wrapper ID
        var AddButton = $("#addimage"); //Add button ID

        var x = InputsWrapper.length; //initlal text box count
        var FieldCount = 3;

        if ($res["dt1"].length != []) {
            console.log($res["dt1"]);
            var totalRowCount = $("#tblImages tbody tr").length;

            FieldCount++; //text box added increment
            $("#image_title1").val($res["dt1"][0].Image_Title);

            $("#image_detail1").val($res["dt1"][0].Image_Description);
            var totalRowCount = $("#tblImages tbody tr").length;
            $("#Imgcompanyregistration").attr('src', "/" + $res["dt1"][0].Images);
            
            FieldCount++; //text box added increment
            //add input box
           
            for ($i = 1; $i < $res["dt1"].length; $i++) {
               
                var array = $res["dt1"][$i].Images.split("/");
                $(InputsWrapper).append('<tr><td width="395"><input type="text" value=' + $res["dt1"][$i].Image_Title + ' name="image_title[]"  class="form-control"/>' +
                    '</td><td width="523"><input type="file" onchange="readURL(this);" class="form-control" name="image_src[]"  id="Images' + parseInt(totalRowCount + 1) + '" />' +
                    '</td><td><img id="Imgcompanyregistration" class="img-responsive" src="/' + $res["dt1"][$i].Images + '" style="width: 100px; height: 100px" />' +
                    '</td><td><textarea name="image_detail[]" class="form-control"" >' + $res["dt1"][$i].Image_Description + '</textarea></td></tr>');
            }
            x++;
          
        }
    
    });

}

function FnLoadData1() {

    var param = [];

    var proc = 'Add_Hotels_Data';
    Selector(param, proc).then(function (result) {

        //$res = JSON.parse(result);
        $res = JSON.parse(result);

        $("#DDLDistrict").empty();
        $("#DDLDistrict").append("<option value='' selected='selected'>Select District</option> ");
        $("#DDLProvince").empty();
        $("#DDLProvince").append("<option value='' selected='selected'>Select Provinces</option> ");

        $("#DDLNationality").empty();
        $("#DDLNationality").append("<option value='' selected='selected'>Select Country </option> ");
            for ($i = 0; $i < $res["dt1"].length; $i++) {
            $("#DDLProvince").append("<option value=" + $res["dt1"][$i].Province_ID + " >" + $res["dt1"][$i].Province_Name + "</option> ");
        }
        for ($i = 0; $i < $res["dt2"].length; $i++) {
            $("#DDLDistrict").append("<option value=" + $res["dt2"][$i].District_ID + " >" + $res["dt2"][$i].District_Name + "</option> ");
           
        }

      
        for ($i = 0; $i < $res["dt3"].length; $i++) {
            $("#DDLNationality").append("<option value=" + $res["dt3"][$i].Nationality_ID + " >" + $res["dt3"][$i].Nationality_Name + "</option> ");
        }


    });

}

function Result(res) {
}