$(document).ready(function () {
  
    dataload();
    //showSlider();
});
//show website title and description

function dataload() {

    var param = [];
    var proc = 'hotels_list_get';
    SelectorNoSession1(param, proc).then(function (result) {
        $res = JSON.parse(result);

        if ($res.length != []) {
            $("#hotel_list").empty();
            for ($i = 0; $i < $res["dt1"].length; $i++) {
                var natureID = $res["dt1"][$i].Star_Nature_ID;
               
                if (natureID == 4) {
                    var fourStar = '<span class="five-stars" style="width: 80%;">' + '</span>';
               }
                else if (natureID==5) {
                    var fourStar = '<span class="five-stars" style="width: 100%;">' + '</span>';
                   } else if (natureID == 3) {
                    var fourStar = '<span class="five-stars" style="width: 60%;">' + '</span>';
                   } else if (natureID == 2) {
                    var fourStar = '<span class="five-stars" style="width: 40%;">' + '</span>';
                  } else if (natureID == 1) {
                    var fourStar = '<span class="five-stars" style="width: 20%;">' + '</span>';
                  }
                $("#hotel_list").append('<article class="box popup-gallery">' +
                    '<figure class= "col-sm-5 col-md-4">' +
                   
                       //'<a title="" href="ajax/slideshow-popup.html" class="hover-effect popup-gallery">' +

                    '<a title=""  onclick="FnDetailsPage(' + $res["dt1"][$i].Id +')" class="hover-effect popup-gallery">' +
                    '<img style="height: 209px;" alt="" src='+ "/" + $res["dt1"][$i].images + '>' +
                    '</a >' +
                    '</figure>' +
                    '<div class="details col-sm-7 col-md-8">' +
                    '<div>' +
                    '<div>' +
                    '<h4 class="box-title" style="color: #156bc1;font-weight: bold;font - size: 17px;" text-transform: capitalize;>' + $res["dt1"][$i].Name + '<span style="font-weight: bold;font-size: 19px;"> (' + $res["dt1"][$i].Star_Nature_ID+' Star)<span>' + '<small>' + '<i class="soap-icon-departure yellow-color">' + '</i>' + $res["dt1"][$i].Address  + '</small>' + '</h4>' +
                    '<div class="amenities">' +
                    '+<i class="soap-icon-wifi circle">' + '</i>' +
                    '<i class="soap-icon-fitnessfacility circle">' + '</i>' +
                    '<i class="soap-icon-fork circle">' + '</i>' +
                    '<i class="soap-icon-television circle">' + '</i>' +
                    '</div>' +
                    '</div>' +
                    '<div>' + '<div title="' + $res["dt1"][$i].Star_Nature_ID +'stars" class="five-stars-container" data-toggle="tooltip" data-placement="bottom">' +
                    '<div class="five-stars-container">' + '<span class="five-stars" style="width: 80%;">' + '</span>' +
                    '</div>' + '<span class="review">270 reviews</span>'+ '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div>' +
                    '<p>'+ $res["dt1"][$i].Description + '</p>' +
                    '<div>' +
                    '<span class="price">' + '<small>' + 'AVG/NIGHT' + '</small>' + $res["dt1"][$i].Avg_Night  + '</span>' +
                    '<a class="button btn-small full-width text-center" title="" onclick="FnDetailsPage(' + $res["dt1"][$i].Id +')">' + 'SELECT' + '</a>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                     '</article >');


            } }
    });
}

function FnDetailsPage(id) {
    localStorage.setItem("Detail_ID", id);
    window.location.href = "hotel_detail";

}
