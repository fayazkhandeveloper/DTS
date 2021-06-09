$(document).ready(function () {
   
    FnLoadMasterData();
    //FnLoadData();

    FnLoadRecordData();
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
            $(InputsWrapper).append('<tr><td width="523"><input type="file" onchange="readURL(' + parseInt(totalRowCount + 1) +');" class="form-control" name="image_src[]"  id="Images' + parseInt(totalRowCount + 1) + '" /></td></tr>');
            x++; //text box increment
        }
        return false;
    });
    $("#btnSave").click(function () {
        FnInsertFiles();
    });

    $("#btnbasicinfoSave").click(function () {
        FnInsertHotelInfo();

    });
    $("#btnfacilitiesSave").click(function () {
        FnInsertFacilities();
    })
    $("body").on("click", ".removeclass", function (e) { //user click on remove text
        if (x > 1) {
            $(this).parent('view_image').remove(); //remove text box
            x--; //decrement textbox
        }
        return false;
    })
    $('#h_name').keyup(function () {
        this.value = this.value.toLocaleUpperCase();
    });
});
function readURL(e) {
    alert(e);
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

            $('#Images' + e).val('');
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
//show record id
var RecordId;
function FnLoadRecordData() {
    var param = [];
    var proc = 'Hotel_Record_ID';
    Selector(param, proc).then(function (result) {
        //$res = JSON.parse(result);
        $res = JSON.parse(result);

        if ($res["dt2"][0].RowCount == null || $res["dt2"][0].RowCount == "" || $res["dt2"][0].RowCount == undefined)

        { RecordId = $res["dt1"][0].RowCount; }
        else { RecordId = $res["dt2"][0].RowCount; }
      
    });

}

function FnInsertFiles() {
    LoaderFadeIn();
    var totalRowCount = $("#tblImages tbody tr").length;
    var rowCount = 1;

    for ($k = 0; $k < totalRowCount; $k++) {
     
        //var RecordIdCount = RecordId + rowCount + '';
        var RecordIdCount = RecordId + rowCount + '';
        var basicinfo = 'Hotel4';
        var fileUpload = $("#Images" + rowCount + "").get(0);
       // var FileTitle = document.getElementById("Images" + totalRowCount + "").title;
      
        var files = fileUpload.files;

        if (files.length === 0 || files.length === undefined || files.length === null) {

            toastr["error"]('No file selected', 'Warning!');

        }
        else {
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
                    var param = [{ "name": "RecordId", "Value": RecordIdCount },
                        { "name": "Info_ID", "Value": localStorage.getItem("HotelID") },
                    { "name": "FileType", "Value": "Images" },
                    { "name": "UpdatedFile", "Value": "HotelImages/" + $res[0].ImageName.replace(/ /g, "_") }];

                    var proc = 'upload_online_services_images_insert';
                    NewAction(param, proc).then(function (result) {
                        console.log("HotelImages/" + $res[0].ImageName + "//" + result);
                        if (result == 'Operation Successfully Performed') {
                            toastr["success"](result, 'Login Success!');
                            rowCount++;
                            window.location.href = "hotel_registration";
                        }
                        else if (result = 'SessionNull') {
                            window.location.href = "Index";
                        }
                        else if (result != 'Operation Successfully Performed') {
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
        LoaderFadeOut();  

    }
   
   
}

function FnLoadData() {

    var param = [];

    var proc = 'Upload_Online_Services_Image_Load_Data';
    Selector(param, proc).then(function (result) {
        $res = JSON.parse(result);
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
            $("#Imgimages").attr('src', "/" + $res["dt1"][0].Images);
            
            FieldCount++; //text box added increment
            //add input box
           
            for ($i = 1; $i < $res["dt1"].length; $i++) {
               
                var array = $res["dt1"][$i].Images.split("/");
                $(InputsWrapper).append('<tr><td width="523"><input type="file" onchange="readURL(this);" class="form-control" name="image_src[]"  id="Images' + parseInt(totalRowCount + 1) + '" />' +
                    '</td><td><img id="Imgimages" class="img-responsive" src="/' + $res["dt1"][$i].Images + '" style="width: 200px; height: 100px" />' +
                    '</td></tr>');
            }
            x++;
          
        }
    
    });

}

var BusinessId;
function FnLoadMasterData() {
    var param = [];

    var proc = 'master_load_data';
    Selector(param, proc).then(function (result) {

        $res = JSON.parse(result);
        $("#DDLDistrict").empty();
        $("#DDLDistrict").append("<option value='' selected='selected'>Select District</option> ");

        //for ($i = 0; $i < $res["dt1"].length; $i++) {
        //    $("#DDLCountry").append("<option value=" + $res["dt1"][$i].Country_ID + " >" + $res["dt1"][$i].Country_Name + "</option> ");
        //}
        for ($i = 0; $i < $res["dt1"].length; $i++) {
            $("#DDLProvinces").append("<option value=" + $res["dt1"][$i].Province_ID + " >" + $res["dt1"][$i].Province_Name + "</option> ");
        }
        for ($i = 0; $i < $res["dt2"].length; $i++) {
            $("#DDLDistrict").append("<option value=" + $res["dt2"][$i].District_ID + " >" + $res["dt2"][$i].District_Name + "</option> ");
        }


        if ($res["dt3"][0].RowCount == null || $res["dt3"][0].RowCount == "" || $res["dt3"][0].RowCount == undefined)
        { BusinessId = $res["dt4"][0].RowCount; }
        else { BusinessId = $res["dt3"][0].RowCount; }
       
        localStorage.setItem("BusinessId", BusinessId);
      

    });

}
//insert Basic Information

function FnInsertHotelInfo() {
    LoaderFadeIn();

    var param = [{ "name": "Info_ID", "Value": BusinessId },
        { "name": "Name", "Value": $("#h_name").val() }, { "name": "Star_Nature_ID", "Value": $("#DDLStar").val() },
        { "name": "Province_ID", "Value": $("#DDLProvinces").val() },
        { "name": "District_ID", "Value": $("#DDLDistrict").val() },
        { "name": "Avg_Night", "Value": $("#price").val() }, { "name": "Email_ID", "Value": $("#email").val() },
        { "name": "Description", "Value": $("#remarks").val() }, { "name": "Address", "Value": $("#address").val() },
        { "name": "Website", "Value": $("#website").val() }, { "name": "Phone_Number", "Value": $("#phone").val() },
        { "name": "Mobile_Number", "Value": $("#mobile").val() }, { "name": "Fax_Number", "Value": $("#fax").val() }];

    var proc = 'Hotel_Info_Insert';
    Action(param, proc).then(function (result) {
        console.log(result);
        if (result == 'Operation Successfully Performed') {
            toastr["success"](result, 'Login Success!');
            localStorage.setItem("HotelID", BusinessId);
          
        }
        else if (result = 'SessionNull') {
            window.location.href = "Index";
        }
        else if (result != 'Operation Successfully Performed') {
            toastr["error"](result, 'Warning!');

        }
        LoaderFadeOut();
    });

}


function FnInsertFacilities() {
    LoaderFadeIn();
    var wifi, swimmingPoll, cofee, tv, airCondition, fitness, fridge,
        wine, smoking, entertainment, secure, pick, services, pets, play, breakfast, parking,
        conference, fire, handicap, doorman, hot_tub, elevator, events;
    if ($("#wifi").is(":checked")) { wifi = "yes"; } else { wifi = "no"; }
    if ($("#swimming_pool").is(":checked")) { swimmingPoll = "yes"; } else { swimmingPoll = "no"; }
    if ($("#coffee").is(":checked")) { cofee = "yes"; } else { cofee = "no"; }
    if ($("#tv").is(":checked")) { tv = "yes"; } else { tv = "no"; }
    if ($("#air_condition").is(":checked")) { airCondition = "yes"; } else { airCondition = "no"; }
    if ($("#fitness").is(":checked")) { fitness = "yes"; } else { fitness = "no"; }
    if ($("#frigde").is(":checked")) { fridge = "yes"; } else { fridge = "no"; }
    if ($("#wine").is(":checked")) { wine = "yes"; } else { wine = "no"; }
    if ($("#smoking").is(":checked")) { smoking = "yes"; } else { smoking = "no"; }
    if ($("#entertainment").is(":checked")) { entertainment = "yes"; } else { entertainment = "no"; }
    if ($("#secure").is(":checked")) { secure = "yes"; } else { secure = "no"; }
    if ($("#pick").is(":checked")) { pick = "yes"; } else { pick = "no"; }
    if ($("#service").is(":checked")) { services = "yes"; } else { services = "no"; }
    if ($("#pets").is(":checked")) { pets = "yes"; } else { pets = "no"; }
    if ($("#play").is(":checked")) { play = "yes"; } else { play = "no"; }
    if ($("#breakfast").is(":checked")) { breakfast = "yes"; } else { breakfast = "no"; }
    if ($("#parking").is(":checked")) { parking = "yes"; } else { parking = "no"; }
    if ($("#conference").is(":checked")) { conference = "yes"; } else { conference = "no"; }
    if ($("#fire").is(":checked")) { fire = "yes"; } else { fire = "no"; }
    if ($("#handicap").is(":checked")) { handicap = "yes"; } else { handicap = "no"; }
    if ($("#doorman").is(":checked")) { doorman = "yes"; } else { doorman = "no"; }
    if ($("#hot_tub").is(":checked")) { hot_tub = "yes"; } else { hot_tub = "no"; }
    if ($("#elevator").is(":checked")) { elevator = "yes"; } else { elevator = "no"; }
    if ($("#events").is(":checked")) { events = "yes"; } else { events = "no"; }

    var param = [{ "name": "Info_ID", "Value":localStorage.getItem("HotelID")},

        { "name": "Wifi", "Value": wifi }, { "name": "Swimming_Pool", "Value": swimmingPoll },
        { "name": "Television", "Value": tv }, { "name": "Coffe", "Value": cofee },
        { "name": "Air_Condition", "Value": airCondition }, { "name": "Fitnes_Facility", "Value": fitness },
        { "name": "Fridge", "Value": fridge }, { "name": "Wine_Bar", "Value": wine },
        { "name": "Smoking", "Value": smoking }, { "name": "Entertainment", "Value": entertainment },
        { "name": "Secure_Vault", "Value": secure }, { "name": "Pick_And_Drop", "Value": pick },
        { "name": "Room_Services", "Value": services }, { "name": "Pets_Allowed", "Value": pets },
        { "name": "Play_Place", "Value": play }, { "name": "Complimentary_Breakfast", "Value": breakfast },
        { "name": "Free_Parking", "Value": parking }, { "name": "Conference_Room", "Value": conference },
        { "name": "Fire_Place", "Value": fire }, { "name": "Handicap_Accesible", "Value": handicap },
        { "name": "Doorman", "Value": doorman }, { "name": "Hot_Tub", "Value": hot_tub },
        { "name": "Elevator_Building", "Value": elevator }, { "name": "Suitable_Events", "Value": events },

        ];


        var proc = 'Hotel_Facilities_Insert';
    Action(param, proc).then(function (result) {
        
        if (result == 'Operation Successfully Performed') {
            toastr["success"](result, 'Login Success!');
          
           
        }
        else if (result = 'SessionNull') {
            window.location.href = "Index";
        }
        else if (result != 'Operation Successfully Performed') {
            toastr["error"](result, 'Warning!');

        }
        LoaderFadeOut();

        });

  
}



function Result(res) {
}