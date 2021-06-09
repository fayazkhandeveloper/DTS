$(document).ready(function () {

    dataload();
});
//show website title and description

function dataload() {
   
    var url = $(location).attr('href');
    var str = url.lastIndexOf("/");
    var SubString = url.substring(str + 1);

    //$("#pageurl").val(SubString);
 
    var param = [{ "name": "Type", "Value": SubString }];

    var proc = 'show_website_pages_data';
    SelectorNoSession1(param, proc).then(function (result) {
        $res = JSON.parse(result);

        //if ($res["dt1"] != []) {
        //$("#title").text($res["dt1"][0].Title);
        //$("#description").text($res["dt1"][0].Description);
        //}
        if ($res.length != []) {
            $("#details").empty();
            for ($i = 0; $i < $res["dt1"].length; $i++) {
                $("#details").append('<div class="title-wrapper border-8">' +
                    '<h2>' + '<span class="color-8">' + $res["dt1"][$i].Title + '</span>' + '</h2>' +
                    '</div>' +
                    '<div class="post-item big sec clearfix">' +
                    '<div class="row">' +
                    '<div class="col-md-12">'
                    + '<div class="col-md-12">' +
                    '<div class="post-content">' +
                    '<a href=""><h3>' + $res["dt1"][$i].Title + '</h3>' + '</a>' +
                    '<div class="latest-posts" style="margin-bottom: 10px">' +
                    '<article class="post">' +
                    '<div id="intro-info" style="margin-left: 10px;text-align: justify;">' +
                    '<p>' + $res["dt1"][$i].Description + '</p>' +
                    '</div>' +
                    '</article>' +

                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +

                    '</div>' +
                    ' </div>');


            }
            //show message

            for ($i = 0; $i < $res["dt2"].length; $i++) {
                $("#message").append('<h3>' + $res["dt2"][$i].Title + '</h3>' +
                    '<p style="margin-left: 10px;text-align: justify;">' + $res["dt2"][$i].Description + '</p>'
                );
            }
            //show tendors
            for ($i = 0; $i < $res["dt3"].length; $i++) {
                $("#tanders").append('<h3>' + $res["dt3"][$i].Title + '</h3>' +
                    '<p style="margin-left: 10px;text-align: justify;">' + $res["dt3"][$i].Description + '</p>'
                );
            }
            //show downloads

            for ($i = 0; $i < $res["dt4"].length; $i++) {
                $("#downloads").append('<h3>' + $res["dt4"][$i].Title + '</h3>' +
                    '<p style="margin-left: 10px;text-align: justify;">' + $res["dt4"][$i].Description + '</p>'
                );
            }

        }
    });
}


