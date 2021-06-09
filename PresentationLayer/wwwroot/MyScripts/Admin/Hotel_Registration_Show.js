$(document).ready(function () {
    FnLoadMasterData();
    FnLoadData();
    //FnInsertHotelInfo();
    var MaxInputs = 10; //maximum input boxes allowed
    var InputsWrapper = $("#tblImages tbody"); //Input boxes wrapper ID
    var AddButton = $("#addimage"); //Add button ID

    var x = InputsWrapper.length; //initlal text box count
    var FieldCount = 3; //to keep track of text box added
   
    $(AddButton).click(function (e)  //on add input button click
    {
       
        if (x <= MaxInputs) //max input box allowed
        {
            //add input box
            var totalRowCount = $("#tblImages tbody tr").length;
            var imgNo = 'Images' + parseInt(totalRowCount + 1);
            FieldCount++; //text box added increment
            //var imagview = 'Imgimages' + parseInt(totalRowCount + 1);
            
            //add input box
            $(InputsWrapper).append('<tr><td width="523"><input type="file" onchange="valide(this);" class="form-control" name="file_name' + parseInt(RecordId1)  + parseInt(x) + '"  id="Images' + parseInt(RecordId1) + parseInt(x) + '" /></td><td><img id="Imgimages" class="img-responsive" src="~/images/contact_info.png" style="width: 200px; height: 100px" />' +
                '</td><td><a style="cursor: pointer; background: #2b9398; color: white;" onclick="Update(' + parseInt(RecordId1) + parseInt(x) +')" class="btn btn - warning btn - xs" > UPDATE</a>' +
                '</td></tr>');
            //
            x++; //text box increment
        }

        return false;
    });
    $("#btnupdate").click(function () {
      
        //FnInsertFiles();
       
    });

    $("body").on("click", ".removeclass", function (e) { //user click on remove text
        if (x > 1) {
            $(this).parent('view_image').remove(); //remove text box
            x--; //decrement textbox
        }
        return false;
    })
  
});
function valide(imageid) {
  
    $(imageid).show(0);

    var fp = $($(imageid));

    var lg = fp[0].files.length; // get length
    var items = fp[0].files;
    var fileSize = 0;

    if (lg > 0) {
        for (var i = 0; i < lg; i++) {
            fileSize = fileSize + items[i].size; // get file size
        }

        if (fileSize > 2097152) {
            alert('File size must not be more than 2 MB');
            $(imageid).val('');
        }
    }
}
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

            $('#Images' + e).val('');
        }
    }
}
function FnInsertFiles() {
    var totalRowCount = $("#tblImages tbody tr").length;
    var rowCount = 1;
    var imgIdCount = 1;
    
    for ($k = 0; $k < totalRowCount; $k++) {

        var RecordIdCount = RecordId + rowCount + '';
        var basicinfo = 'Hotel27';
        var fileUpload = $("#Images" + rowCount + "").get(0);
        var url = $("#ID").text();
        //var url = 'ID' + parseInt(rowCount);

        var str = url.lastIndexOf("-");
        var SubString = url.substring(str + 1);
        var IdCount = parseInt(SubString) + parseInt(imgIdCount);
        //alert('url=' + url);

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
                var Record_ID = 'HV-' + IdCount;
                var param = [{ "name": "RecordId", "Value": RecordIdCount },
                    { "name": "Record_ID", "Value": url },

                { "name": "Info_ID", "Value": localStorage.getItem("HotelId") },
                { "name": "FileType", "Value": "Images" },
                { "name": "UpdatedFile", "Value": "HotelImages/" + $res[0].ImageName.replace(/ /g, "_") }];

                var proc = 'upload_online_services_images_insert_Edit';
                NewAction(param, proc).then(function (result) {
                   
                    if (result == 'Operation Successfully Performed') {
                        toastr["success"](result, 'Login Success!');
                      
                        rowCount++;
                        imgIdCount++;
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


}
//load hotel information data

function hotelInfo() {
    var param = [{ "name": "Info_ID", "Value": localStorage.getItem("HotelId") }];

    var proc = 'hotel_info_data';
    Selector(param, proc).then(function (result) {

        $res = JSON.parse(result);

       
        $("#h_name").val($res["dt1"][0].Name);
        $("#DDLCountry").val($res["dt1"][0].Country_ID);
        $("#DDLDistrict").val($res["dt1"][0].District_ID);
        $("#price").val($res["dt1"][0].Avg_Night);
        $("#remarks").val($res["dt1"][0].description);
        $("#website").val($res["dt1"][0].Website);
        $("#mobile").val($res["dt1"][0].Mobile_Number);
        $("#DDLStar").val($res["dt1"][0].Star_Nature_ID);
        $("#DDLProvinces").val($res["dt1"][0].Province_ID);
        $("#email").val($res["dt1"][0].Email_ID);
        $("#address").val($res["dt1"][0].Address);
        $("#fax").val($res["dt1"][0].Fax_Number);
        $("#phone").val($res["dt1"][0].Phone_Number);

        //load facilities

        var wifi, swimmingPoll, cofee, tv, airCondition, fitness, fridge,
        wine, smoking, entertainment, secure, pick, services, pets, play, breakfast, parking,
        conference, fire, handicap, doorman, hot_tub, elevator, events;
        wifi = $res["dt2"][0].Wifi;
        cofee = $res["dt2"][0].Coffe;
        swimmingPoll = $res["dt2"][0].Swimming_Pool;
        tv = $res["dt2"][0].Television;
        airCondition = $res["dt2"][0].Air_Condition;
        fitness = $res["dt2"][0].Fitnes_Facility;
        fridge = $res["dt2"][0].Fridge;
        wine = $res["dt2"][0].Wine_Bar;
        smoking = $res["dt2"][0].Smoking;
        entertainment = $res["dt2"][0].Entertainment;
        secure = $res["dt2"][0].Secure_Vault;
        pick = $res["dt2"][0].Pick_And_Drop;
        services = $res["dt2"][0].Room_Services;
        pets = $res["dt2"][0].Pets_Allowed;
        play = $res["dt2"][0].Play_Place;
        conference = $res["dt2"][0].Conference_Room;
        parking = $res["dt2"][0].Free_Parking;
        breakfast = $res["dt2"][0].Complimentary_Breakfast;
        fire = $res["dt2"][0].Fire_Place;
        handicap = $res["dt2"][0].Handicap_Accesible;
        doorman = $res["dt2"][0].Doorman;
        hot_tub = $res["dt2"][0].Hot_Tub;
        elevator = $res["dt2"][0].Elevator_Building;
        events = $res["dt2"][0].Suitable_Events;

        if (wifi == 'yes') {
            $("#wifi").prop('checked', true);
        }if (cofee == 'yes') {
            $("#coffee").prop('checked', true);
        } if (swimmingPoll == 'yes') {
            $("#swimming_pool").prop('checked', true);
        } if (tv == 'yes') {
            $("#tv").prop('checked', true);
        } if (airCondition == 'yes') {
            $("#air_condition").prop('checked', true);
        } if (fitness == 'yes') {
            $("#fitness").prop('checked', true);
        } if (fridge == 'yes') {
            $("#frigde").prop('checked', true);
        } if (wine == 'yes') {
            $("#wine").prop('checked', true);
        } if (smoking == 'yes') {
            $("#smoking").prop('checked', true);
        } if (entertainment == 'yes') {
            $("#entertainment").prop('checked', true);
        } if (secure == 'yes') {
            $("#secure").prop('checked', true);
        } if (pick == 'yes') {
            $("#pick").prop('checked', true);
        } if (services == 'yes') {
            $("#service").prop('checked', true);
        } if (pets == 'yes') {
            $("#pets").prop('checked', true);
        } if (play == 'yes') {
            $("#play").prop('checked', true);
        } if (breakfast == 'yes') {
            $("#breakfast").prop('checked', true);
        } if (parking == 'yes') {
            $("#parking").prop('checked', true);
        } if (conference == 'yes') {
            $("#conference").prop('checked', true);
        } if (fire == 'yes') {
            $("#fire").prop('checked', true);
        } if (handicap == 'yes') {
            $("#handicap").prop('checked', true);
        } if (doorman == 'yes') {
            $("#doorman").prop('checked', true);
        } if (hot_tub == 'yes') {
            $("#hot_tub").prop('checked', true);
        } if (elevator == 'yes') {
            $("#elevator").prop('checked', true);
        } if (events == 'yes') {
            $("#events").prop('checked', true);
        }
        
        });
}
var RecordId;
var RecordId1;
function FnLoadData() {
    var param = [{ "name": "Info_ID", "Value": localStorage.getItem("HotelId")  }];

    var proc = 'Upload_Online_Services_Image_Load_Data';
    Selector(param, proc).then(function (result) {
        $res = JSON.parse(result);
        var MaxInputs = 10; //maximum input boxes allowed

        var InputsWrapper = $("#tblImages tbody"); //Input boxes wrapper ID

        var AddButton = $("#addimage"); //Add button ID

        var rowCount = 1;

        var x = InputsWrapper.length; //initlal text box count
        var FieldCount = 3;
        var totalRowCount = $("#tblImages tbody tr").length;

        if ($res["dt1"].length != []) {
            $("#ID").text($res["dt1"][0].Image_ID);
            FieldCount++; //text box added increment
            $("#image_title1").val($res["dt1"][0].Image_Title);

            $("#image_detail1").val($res["dt1"][0].Image_Description);
            //var totalRowCount = $("#tblImages tbody tr").length;
            $("#Imgimages").attr('src', "/" + $res["dt1"][0].Images);
            $("#action").append('<a style="cursor: pointer;background: #2b9398;color: white;" onclick="Update('+ $res["dt1"][0].Image_ID +')" class="btn btn - warning btn - xs">UPDATE</a>'
            );
            $("#actionDelete").append('<a style="cursor: pointer;background: #b50a41;color: white;" onclick="Delete(' + $res["dt1"][0].Image_ID + ')" class="btn btn - warning btn - xs">Delete</a>'
            );
            $("#tblimages").append('<input type="file" onchange="valide(this);" class="form-control" name="file_name' + $res["dt1"][0].Image_ID + '"  id="Images' + $res["dt1"][0].Image_ID + '" />'
            );
            
            FieldCount++; //text box added increment
            //add input box

            for ($i = 1; $i < $res["dt1"].length; $i++) {

                //var totalRowCount = $("#tblImages tbody tr").length;
                //var imgIdCount = 1;

                for ($k = 0; $k < totalRowCount; $k++) {

                    //var RecordIdCount = RecordId + rowCount + '';
                    //var basicinfo = 'Hotel27';
                    //var fileUpload = $("#Images" + rowCount + "").get(0);


                    var array = $res["dt1"][$i].Images.split("/");
                    //alert(rowCount);

                    $(InputsWrapper).append('<tr><td width="523"><input type="file" onchange="valide(this);" class="form-control" name="file_name' + $res["dt1"][$i].Image_ID + '"  id="Images' + $res["dt1"][$i].Image_ID + '" />' +
                        '</td><td><img id="Imgimages" class="img-responsive" src="/' + $res["dt1"][$i].Images + '" style="width: 200px; height: 100px" />' +
                        '</td><td style="display: none" id="ID' + parseInt(rowCount) + '"> ' + $res["dt1"][$i].Image_ID + "</td><td ><a style='cursor: pointer; background: #2b9398; color: white;' onclick='Update(" + $res["dt1"][$i].Image_ID + ")' class='btn btn - warning btn - xs'>UPDATE</a></td><td><a style='cursor: pointer; background: #b50a41; color: white;' onclick='Delete(" + $res["dt1"][$i].Image_ID +")' class='btn btn - warning btn - xs'>Delete</a></td></tr>");
                }
                rowCount++;
            }
            x++;
            

        }
       
            var param = [];
            var proc = 'Hotel_Record_ID';
            Selector(param, proc).then(function (result) {
                //$res = JSON.parse(result);
                $res = JSON.parse(result);

                if ($res["dt2"][0].RowCount == null || $res["dt2"][0].RowCount == "" || $res["dt2"][0].RowCount == undefined) {
                    RecordId = $res["dt1"][0].RowCount;
                }
                else { RecordId = $res["dt2"][0].RowCount; }

                var param = [];
                var proc = 'Hotel_File_ID';
                Selector(param, proc).then(function (result) {
                    //$res = JSON.parse(result);

                    $res = JSON.parse(result);
                    if ($res["dt1"].length != []) {
                        RecordId1 = $res["dt1"][0].RowCount;
                        }

                });
            });

       

    });

}

function FnLoadRefrish() {
    var param = [{ "name": "Info_ID", "Value": localStorage.getItem("HotelId") }];

    var proc = 'Upload_Online_Services_Image_Load_Data';
    Selector(param, proc).then(function (result) {
        $res = JSON.parse(result);
        var MaxInputs = 10; //maximum input boxes allowed

        var InputsWrapper = $("#tblImages tbody"); //Input boxes wrapper ID

        var AddButton = $("#addimage"); //Add button ID

        var rowCount = 1;

        var x = InputsWrapper.length; //initlal text box count
        var FieldCount = 3;
        var totalRowCount = $("#tblImages tbody tr").length;

        if ($res["dt1"].length != []) {
            $("#ID").text($res["dt1"][0].Image_ID);
            FieldCount++; //text box added increment
            $("#image_title1").val($res["dt1"][0].Image_Title);

            $("#image_detail1").val($res["dt1"][0].Image_Description);
            //var totalRowCount = $("#tblImages tbody tr").length;
            $("#Imgimages").attr('src', "/" + $res["dt1"][0].Images);
            

            FieldCount++; //text box added increment
            //add input box

            for ($i = 1; $i < $res["dt1"].length; $i++) {
                for ($k = 0; $k < totalRowCount; $k++) {

                    var array = $res["dt1"][$i].Images.split("/");
                   $(InputsWrapper).append('<tr><td><img id="Imgimages" class="img-responsive" src="/' + $res["dt1"][$i].Images + '" style="width: 200px; height: 100px" />' +
                        '</td><td id="ID' + parseInt(rowCount) + '"> ' + $res["dt1"][$i].Image_ID + "</td><td style='cursor: pointer'><a onclick='Update(" + $res["dt1"][$i].Image_ID + ")' class='btn btn - warning btn - xs'>UPDATE</a></td></tr>");
                }
                rowCount++;
            }
            x++;


        }

        var param = [];
        var proc = 'Hotel_Record_ID';
        Selector(param, proc).then(function (result) {
            //$res = JSON.parse(result);
            $res = JSON.parse(result);

            if ($res["dt2"][0].RowCount == null || $res["dt2"][0].RowCount == "" || $res["dt2"][0].RowCount == undefined) {
                RecordId = $res["dt1"][0].RowCount;
            }
            else { RecordId = $res["dt2"][0].RowCount; }

        });



    });

}

var BusinessId;
function FnLoadMasterData() {

    var param = [];

    var proc = 'master_load_data';
    Selector(param, proc).then(function (result) {

        $res = JSON.parse(result);

        $("#DDLProvinces").empty();
        $("#DDLProvinces").append("<option value='' selected='selected'>Select Province</option> ");
        $("#DDLDistrict").empty();
        $("#DDLDistrict").append("<option value='' selected='selected'>Select Province</option> ");

        //for ($i = 0; $i < $res["dt1"].length; $i++) {
        //    $("#DDLCountry").append("<option value=" + $res["dt1"][$i].Country_ID + " >" + $res["dt1"][$i].Country_Name + "</option> ");
        //}
        for ($i = 0; $i < $res["dt1"].length; $i++) {
            $("#DDLProvinces").append("<option value=" + $res["dt1"][$i].Province_ID + " >" + $res["dt1"][$i].Province_Name + "</option> ");
        }
        for ($i = 0; $i < $res["dt2"].length; $i++) {
            $("#DDLDistrict").append("<option value=" + $res["dt2"][$i].District_ID + " >" + $res["dt2"][$i].District_Name + "</option> ");
        }
        hotelInfo();

        //if ($res["dt4"][0].RowCount == null || $res["dt4"][0].RowCount == "" || $res["dt4"][0].RowCount == undefined) { BusinessId = $res["dt5"][0].RowCount; }
        //else { BusinessId = $res["dt4"][0].RowCount; }
    });

}

//insert Basic Information

function FnInsertHotelInfo() {
   
    var param = [{ "name": "Info_ID", "Value": localStorage.getItem("HotelId")  },
        { "name": "Name", "Value": $("#h_name").val() }, { "name": "Star_Nature_ID", "Value": $("#DDLStar").val() },
        { "name": "Province_ID", "Value": $("#DDLProvinces").val() },
        { "name": "District_ID", "Value": $("#DDLDistrict").val() },
        { "name": "Avg_Night", "Value": $("#price").val() }, { "name": "Email_ID", "Value": $("#email").val() },
        { "name": "Description", "Value": $("#remarks").val() }, { "name": "Address", "Value": $("#address").val() },
        { "name": "Website", "Value": $("#website").val() }, { "name": "Phone_Number", "Value": $("#phone").val() },
        { "name": "Mobile_Number", "Value": $("#mobile").val() }, { "name": "Fax_Number", "Value": $("#fax").val() }];

    var proc = 'Hotel_Info_Insert_Edit';
    Action(param, proc).then(function (result) {
        if (result == "Operation Successfully Performed") {
            //toastr["success"](result, 'Login Success!');

           FnInsertFacilities();
        }

        else {
            toastr["error"](result, 'Warning!');

        }
    });

}


function FnInsertFacilities() {

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

    var param = [{ "name": "Info_ID", "Value": localStorage.getItem("HotelId") },

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


    var proc = 'Hotel_Facilities_Insert_Edit';
    Action(param, proc).then(function (result) {

        //Action1(param, "7", ScopeDetails, proc).then(function (result) {

        if (result == "Operation Successfully Performed") {
           // toastr["success"](result, 'Login Success!');
        }

        else {
            toastr["error"](result, 'Warning!');

        }
    });


}


function Update(id) {
 
    var rowCount = 1;
    var imgIdCount = 1;
    var RecordIdCount = RecordId + rowCount + '';
    var fileUpload = $('#Images' + id).prop('files');
    var data = new FormData();
    if (fileUpload.length === 0 || fileUpload.length === undefined || fileUpload.length === null) {
        
        toastr["error"]('No file selected', 'Warning!');

    }
    else {

   
        data.append(fileUpload[0].name, fileUpload[0]);
        $.ajax({
            url: "../fileImageUploader.ashx",
            type: "POST",
            data: data,
            contentType: false,
            processData: false,
            success: function (result) {
                $res = JSON.parse(result);
                var param = [{ "name": "RecordId", "Value": RecordIdCount },
                    { "name": "Record_ID", "Value": id },

                { "name": "Info_ID", "Value": localStorage.getItem("HotelId") },
                { "name": "FileType", "Value": "Images" },
                { "name": "UpdatedFile", "Value": "HotelImages/" + $res[0].ImageName.replace(/ /g, "_") }];

                var proc = 'upload_online_services_images_insert_Edit';
                NewAction(param, proc).then(function (result) {

                    if (result == 'Operation Successfully Performed') {
                        toastr["success"](result, 'Login Success!');

                        rowCount++;
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
}
function Delete(id) {
    var result = confirm("Are you sure to delete?");
    if (result) {
        var param = [{ "name": "Id", "Value": id }];

        var proc = 'Upload_Online_Services_Image_Load_Deleted';
        Action(param, proc).then(function (result) {
            if (result == 'Operation Successfully Performed') {
                toastr["success"](result, 'Login Success!');
               // FnLoadData();
            }

            else if (result != 'Operation Successfully Performed') {
                toastr["error"](result, 'Warning!');

            }
        });


    }
}
function Result(res) {
}