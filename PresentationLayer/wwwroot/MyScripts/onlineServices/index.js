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
                $("#hotel_list").append('<li>'+
                    '<article class= "box" >'+
                    '<figure>'+
                    //'<a href="ajax/slideshow-popup.html" class="hover-effect popup-gallery">' +
                    '<a  onclick="FnDetailsPage(' + $res["dt1"][$i].Id +')" class="hover-effect popup-gallery">' +
                    
                    '<img alt="" style="height: 209px;" src=' + "/" + $res["dt1"][$i].images +'>' +
                    '</a >'+
                    '</figure>'+
                    '<div class="details">'+
                    '<a title="View all" onclick="FnDetailsPage(' + $res["dt1"][$i].Id +')" class="pull-right button uppercase popup-gallery">'+'select'+'</a>'+
                    '<h4 class="box-title">' + $res["dt1"][$i].Name + '</h4>'+
                        '<label class="price-wrapper">'+
                    '<span class="price-per-unit">' + 'RS' + $res["dt1"][$i].Avg_Night +'</span>'+'avg/night'+
                                    '</label>'+
                    '</div>'+
                            '</article >'+
                        '</li >');


            }

            for ($i = 0; $i < $res["dt1"].length; $i++) {
                $("#imageCrousal").append('<li>'+
                    '<article class= "box">'+
                    '<figure>'+
                    '<a  onclick="FnDetailsPage(' + $res["dt1"][$i].Id + ')" class="hover-effect popup-gallery">' +
                    //'<a  onclick="FnDetailsPage(' + $res["dt1"][$i].Id + ')" class="hover-effect popup-gallery">' +
                    //'<img width="270" height="161" alt="" src="~/online_services/assest/img/amin_hotel.jpg">' + '</a>' +
                    '<img alt="" style="height:161px;width:270px" src=' + "/" + $res["dt1"][$i].images + '>' +
                '</figure>'+
                        '<div class="details">'+
                           ' <span class="price">'+
                    '<small>'+ 'avg / night' +'</small>'
                    + $res["dt1"][$i].Avg_Night +
                    '</span>' +

                    //'<span class="price-per-unit">' +
                    //'RS' + $res["dt1"][$i].Avg_Night + '</span>' + 'avg/night' +
                    '<h4 class="box-title">' + $res["dt1"][$i].Name + '<small>' + $res["dt1"][$i].District_Name + '</small>' + '</h4>' +
                            '<div class="feedback">'+
                    '<div data-placement="bottom" data-toggle="tooltip" class="five-stars-container" title="4 stars">' +

                    '<span style="width: 80%;" class="five-stars">' +

                    '</span>' +

                    '</div>' +
                               ' <span class="review">'+'270 reviews'+'</span>'+
                            '</div>'+
                    '<p class="description">' + $res["dt1"][$i].Description +'</p>'+
                            '<div class="action">'+
                    '<a class="button btn-small" onclick="FnDetailsPage(' + $res["dt1"][$i].Id + ')">' + 'SELECT' + '</a>' +
                    //'<a title="View all" onclick="FnDetailsPage(' + $res["dt1"][$i].Id + ')" class="pull-right button uppercase">' + 'select' + '</a>' +
                                '<a class="button btn-small yellow popup-map" href="#" data-box="48.856614, 2.352222">'+'VIEW ON MAP'+'</a>'+
                            '</div>'+
                        '</div>'+
            '</article>'+
        '</li>');


            }
        }
    });
}

function FnDetailsPage(id) {
    localStorage.setItem("Detail_ID", id);
    window.location.href = "hotel_detail";

}
//show website slider
function showSlider() {
    var param = [];

    var proc = 'slider_images_get';
    SelectorNoSession1(param, proc).then(function (result) {
        $res = JSON.parse(result);
        console.log(result);
        //if ($res["dt1"] != []) {
        //$("#title").text($res["dt1"][0].Title);
        //$("#description").text($res["dt1"][0].Description);
        //}
        if ($res.length != []) {
            $("#scrol_slide").empty();
            for ($i = 0; $i < $res["dt1"].length; $i++) {
                $("#scrol_slide").append('<div class="fbt-slide-nav"><span class="fbt-slide-pager"></span>' +
                    '</div>' +
                    '<div class="fp-slides">' +
                    '<div class="img-thumb">' +
                    '<a href="#">' +
                    //<img src=' + "/" + $res["dt1"][i].image + ' alt="" width="700px" height="300px" >
                    //'<div class="fbt-resize" style="background-image: url("img/CMWZXZ_DSC4529.jpg")">'+
                    //'<div class="fbt-resize">' + '<img src=' + "/" + $res["dt1"][$i].image + ' alt="" width="700px" height="300px" >' +

                    //'<div class="fbt-resize" style="background-image: url("'src =' + "/"+ $res["dt1"][$i].image + '")">' +

                    '<div class="fbt-resize" style="background-image: url(' + $res["dt1"][$i].image + ')">' +

                    +'</div>' + '</a>' +

                    '</div>' +
                    '</div>' +
                    //'<nav class="nav-growpop">' +
                    //'<div>' +
                    //'<a class="fp-prev" href="#fp-prev">' + '<i class="fa fa-chevron-circle-left" aria-hidden="true">' + '</i>' + '</a>' +
                    //'<a class=fp-next" href="#fp-next">' + '<i class="fa fa-chevron-circle-right" aria-hidden="true">' + '</i>' + '</a>' +
                    //'</div>' +
                    //'</nav>');
                    '<nav class="nav-growpop">' +
                    '<div>' +
                    '<a class="fp-prev" href="#fp-prev"><i class="fa fa-chevron-circle-left" aria-hidden="true"></i></a>' +
                    '<a class="fp-next" href="#fp-next"><i class="fa fa-chevron-circle-right" aria-hidden="true"></i></a>' +
                    '</div>' +
                    '</nav>');

                //+ '</div >' +
                $("#scroll_side1").append('<div class="img-thumb first">' +
                    '<a href="">' +
                    '<div class= "fbt-resize" style = "background-image: url(' + $res["dt1"][$i].image + ')">' + '</div>' + '</a>' +

                    '</div>'
                );
                $("#slide_row").append('<div class="fp-small">' +
                    '<div class="col-xs-6 last-small">' +
                    '<div class="img-thumb">' +
                    '<a href="">' +
                    '<div class= "fbt-resize" style = "background-image: url(' + $res["dt1"][$i].image + ')">' + '</div>' + '</a>' +

                    '</div>' +
                    '</div>' +

                    '</div>'
                    //'</div>'+
                    //'</div>'
                );

            }

        }
    });
}
