$(document).ready(function () {
    alert();
    dataload();
    showSlider();
    $('.carousel').carousel()
});
//show website title and description

//function dataload() {
//    var param = [];
//    var proc = 'show_home_pages_data';
//    SelectorNoSession1(param, proc).then(function (result) {
//        console.log(result)
//        console.log(JSON.parse(result))

//        $res = JSON.parse(result);

//        if ($res.length != []) {
//            $("#details").empty();
//            for ($i = 0; $i < $res["dt1"].length; $i++) {
//                $("#details").append('<div class="title-wrapper border-8">' +
//                    '<h2>' + '<span class="color-8">' + $res["dt1"][$i].Title + '</span>' + '</h2>' +
//                    '</div>' +
//                    '<div class="post-item big sec clearfix">' +
//                    '<div class="row">' +
//                    '<div class="col-md-12">'
//                    + '<div class="col-md-12">' +
//                    '<div class="post-content">' +
//                    //'<a href=""><h3>' + $res["dt1"][$i].Title + '</h3>' + '</a>' +
//                    '<div class="latest-posts" style="margin-bottom: 10px">' +
//                    '<article class="post">' +
//                    '<div id="intro-info" style="margin-left: 10px;text-align: justify;">' +
//                    '<p>' + $res["dt1"][$i].Description + '</p>' +
//                    '</div>' +
//                    '</article>' +

//                    '</div>' +
//                    '</div>' +
//                    '</div>' +
//                    '</div>' +

//                    '</div>' +
//                    ' </div>');


//            }
//            //show message

//            for ($i = 0; $i < $res["dt2"].length; $i++) {
//                $("#message").append('<h3>' + $res["dt2"][$i].Title + '</h3>' +
//                    '<p style="margin-left: 10px;text-align: justify;">' + $res["dt2"][$i].Description+'</p>'
//                    );
//            }
//            //show tendors
//            for ($i = 0; $i < $res["dt3"].length; $i++) {
//                $("#tanders").append('<h3>' + $res["dt3"][$i].Title + '</h3>' +
//                    '<p style="margin-left: 10px;text-align: justify;">' + $res["dt3"][$i].Description + '</p>'
//                );
//            }
//            //show downloads
//            for ($i = 0; $i < $res["dt4"].length; $i++) {
//                $("#downloads").append('<h3>' + $res["dt4"][$i].Title + '</h3>' +
//                    '<p style="margin-left: 10px;text-align: justify;">' + $res["dt4"][$i].Description + '</p>'
//                );
//            }

//        }
       
//    });
//}

function dataload() {
    var param = [];
    var proc = 'show_home_pages_data';
    debugger;
    $.ajax({
        type: "POST",
        url: "/Home/MultiListNoSession",

        data:{
            "data": param,
            "action": proc
        },
        dataType: "JSON",

        success: function (response) {
            console.log('res', JSON.parse(response));

            if (response.succeeded == false) {

                toastr["error"]("Invalid Credentails");
            }
            else {
                toastr["success"](response.succeeded, 'Success!');
                window.location.href = "/Admin/Index";
            }

        },
    });

}
//show website slider
function showSlider() {
    var param = [];

    var proc = 'slider_images_get';
    SelectorNoSession1(param, proc).then(function (result) {
        $res = JSON.parse(result);

        if ($res.length != []) {
            $("#scrol_slide").empty();
            for ($i = 0; $i < $res["dt1"].length; $i++) {
                $("#scrol_slide").append('<div class="fbt-resize" style="background-image: url(' + $res["dt1"][$i].image + ')"></div>'
                );
            }
                    //+ '</div >' +
            for ($i = 0; $i < $res["dt2"].length; $i++) {
                $("#scroll_side1").append('<div class="img-thumb first">' +
                    '<a href="">' +
                    '<div class= "fbt-resize" style = "background-image: url(' + $res["dt2"][$i].image + ')">' + '</div>' + '</a>' +

                    '</div>'
                );
            }
            for ($i = 0; $i < $res["dt3"].length; $i++) {
                $("#slide_row").append('<div class="fp-small">'+
                            '<div class="col-xs-6 last-small">'+
                                '<div class="img-thumb">'+
                    '<a href="">'+
                    '<div class= "fbt-resize" style = "background-image: url(' + $res["dt3"][$i].image + ')">'+'</div>'+'</a>'+

                                '</div>'+
                            '</div>'+

                        '</div>'
                );
            }
            for ($i = 0; $i < $res["dt4"].length; $i++) {
                $("#side_news").append('<div class="row">'+
                    '<div class= "col-sm-8 col-xs-9 no-padding-left" >'+
                    '<div class="post-content">' + "<a onclick='FnBusinessType(" + $res["dt4"][$i].ID + ")' class='text-capitalize'>"+
                    '<h3>' + $res["dt4"][$i].Title + '</h3>'+'</a>'+'</br>'+
                    '<div class="post-info clearfix">'+
                    '</div>' + '</div>' + '</div>'+ '</div>'
                );
            }
            for ($i = 0; $i < $res["dt4"].length; $i++) {
                $("#side_news1").append('<ul class="ticker clearfix">'+
                    '<li>' + '<a href="single.html">' + $res["dt4"][$i].Title +'</a>'+'</li>'+
                    
                '</ul>');
            }
            //for ($i = 0; $i < $res["dt5"].length; $i++) {

                $("#gallaryImg").append('<div class="column">' +
                    '<img src =' + $res["dt5"][0].image + ' style = "width: 100%!important;height: 278px!important;" onclick = "openModal();currentSlide(1)" class= "hover-shadow cursor" alt="The Woods">' +
                    '</div>');
            //alert($res["dt5"][0].image);
            //}
            var index = 1;

            for ($i = 0; $i < $res["dt5"].length; $i++) {
               $("#imgGallary").append('<div class="mySlides">' +
                    '<div class= "numbertext" >' + $res["dt5"][$i].Image_ID + '/ 4' + '</div > ' +
                '<img src="' + $res["dt5"][$i].image + '" style="width:100%">' +
                '</div>' +
                '<a class="prev" onclick="plusSlides(-1)">&#10094;</a>' +
                '<a class="next" onclick="plusSlides(1)">&#10095;</a>');
            }
            index++;
            //$("#imageGallary").empty();
            //for ($i = 0; $i < $res["dt5"].length; $i++) {
            //    $("#imageGallary").append('<img class="mySlides" src="img/1.jpg" style="width:100%">' +
            //        '<img class= "mySlides" src = "img/2.jpg" style = "width:100%" >' +
            //        '<img class="mySlides" src="img/2.jpg" style="width:100%">' +
            //        '<img class="mySlides" src="img/2.jpg" style="width:100%">' +

            //        '<button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>' +
            //        '<button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>');
            //    //$("#imageGallary").append('add.owl.carousel', [jQuery('<div class="item fbt-hr-crs">' +
                //    '<div class= "post-item clearfix" >' +
                //    '<div class="img-thumb">' +
                //    '<a href="single.html">' +
                //    '<div class= "fbt-resize" style = "background-image: url(' + $res["dt5"][$i].image + ')" >'+'</div>' +
                //    '</a >' +


                //    ' </div>' +
                //    '</div >' +
                //    ' </div>')]);
            //}

            //$('#avatar-carousel').trigger('add.owl.carousel', ['<div class="item"><img src="http://placehold.it/140x100" alt=""></div>'])
            //    .trigger('refresh.owl.carousel');
        }
    });
}
function FnBusinessType(id) {
    localStorage.setItem("BusinessTypeId", id);
    window.location.href = "/Home/News";


}