$(document).ready(function () {

    dataload();
});
//show website title and description

//function dataload() {
//    var param = [{ "name": "UId", "Value": localStorage.getItem("Detail_ID") }];
//    var proc = 'hotels_details_list_get';
//    SelectorNoSession1(param, proc).then(function (result) {
//        $res = JSON.parse(result);

//        if ($res.length != []) {
//            $("#hotel_slides").empty();
//            for ($i = 0; $i < $res["dt1"].length; $i++) {
//                $("#hotel_slides").append('<li>' +
//                    '<img alt="" style="height:500px !important;" src=' + "/" + $res["dt1"][$i].images + '>'+'</li >'
//                   );


//            }
//            $("#hotel_slides1").empty();
//            for ($i = 0; $i < $res["dt1"].length; $i++) {
//                $("#hotel_slides1").append('<li>' +
//                    '<img alt="" src=' + "/" + $res["dt1"][$i].images + '>' + '</li >'
//                );


//            }
//            if ($res["dt2"].length != []) {
//                //start wise data
//                var natureID = $res["dt2"][0].Star_Nature_ID;
//                if (natureID == 4) {

//                    $("#starsDetails1").append('<div title="4 stars" class="five-stars-container" data-toggle="tooltip" data-placement="bottom">' +
//                        '<span class= "five-stars" style = "width: 80%;" >' + '</span>' +
//                        '</div >');
//                }
//                else if (natureID == 5) {
//                    $("#starsDetails1").append('<div title="4 stars" class="five-stars-container" data-toggle="tooltip" data-placement="bottom">' +
//                        '<span class= "five-stars" style = "width: 100%;" >' + '</span>' +
//                        '</div >');

//                } else if (natureID == 3) {
//                    $("#starsDetails1").append('<div title="4 stars" class="five-stars-container" data-toggle="tooltip" data-placement="bottom">' +
//                        '<span class= "five-stars" style = "width: 60%;" >' + '</span>' +
//                        '</div >');
//                } else if (natureID == 2) {
//                    $("#starsDetails1").append('<div title="4 stars" class="five-stars-container" data-toggle="tooltip" data-placement="bottom">' +
//                        '<span class= "five-stars" style = "width: 40%;" >' + '</span>' +
//                        '</div >');
//                } else if (natureID == 1) {
//                    $("#starsDetails1").append('<div title="4 stars" class="five-stars-container" data-toggle="tooltip" data-placement="bottom">' +
//                        '<span class= "five-stars" style = "width: 20%;" >' + '</span>' +
//                        '</div >');
//                }
//                //end star wise data
//                $("#hotel_name").text($res["dt2"][0].Name);
//                //$("#stars").text($res["dt2"][0].Star_Nature_ID);
//                $("#hotel_name_buttom").text($res["dt2"][0].Name);
//                $("#hotel_name_buttom1").text($res["dt2"][0].Name);
//                $("#avg_price").text($res["dt2"][0].Avg_Night);
//                $("#description").text($res["dt2"][0].description);
//                $("#description_buttom").text($res["dt2"][0].description);
//                $("#phone").text($res["dt2"][0].Phone_Number);
//                $("#email").text($res["dt2"][0].Email_ID);
//                $("#image_side").attr('src', "/" + $res["dt2"][0].images);
//                $("#image_side_buttom").attr('src', "/" + $res["dt2"][0].images);
//                $("#Star").text($res["dt2"][0].Star_Nature_ID);
//                $("#Province").text($res["dt2"][0].Province_Name);
//                $("#District").text($res["dt2"][0].District_Name);
//                $("#address").text($res["dt2"][0].Address);
//            }

//        }
//        var param = [];
//        var proc = 'hotels_list_get';
//        SelectorNoSession1(param, proc).then(function (result) {
//            $res = JSON.parse(result);

//            if ($res.length != []) {
//                $("#hotel_list").empty();
//                for ($i = 0; $i < $res["dt1"].length; $i++) {
//                    $("#side_hotel").append('<figure>'+
//                        '<a href = "#" >' + '<img alt="" src=' + "/" + $res["dt1"][$i].images + '>' +
//                        '</a >' +
//                          '</figure>'+
//                        '<div class="details">'+
//                        '<h5 class="box-title">' +'<a href="#">'+ $res["dt1"][$i].Name + '</a>'+'</h5>'+
//                            '<label class="price-wrapper">'+
//                        '<span class="price-per-unit">' + $res["dt1"][$i].Avg_Night + '</span>'+'<small>' + 'AVG/NIGHT' + '</small>'+
//                                    '</label>'+
//                        '</div>');
//                }
//            }
//        });
//    });

//}

function dataload() {
    
    let logId = 0;
    $.ajax({
        type: "POST",
        url: "/OnlineServices/GetHotelsBasicInfo",
        dataType: "JSON",
        success: function (result) {
            console.log(result)
        });
            // $('#tableFIR').DataTable();
}

