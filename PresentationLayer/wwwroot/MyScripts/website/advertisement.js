$(document).ready(function () {
    var url = $(location).attr('href');
    var str = url.lastIndexOf("/");
    var SubString = url.substring(str + 1);
    if (SubString == 'Download') {
        showDownloads();
    }
    else {
        showSlider();

    }
});
//show website data
function showSlider() {
    var param = [];

    var proc = 'advertisement_load';
    SelectorNoSession1(param, proc).then(function (result) {
        $res = JSON.parse(result);
        console.log(result);
        if ($res.length != []) {
            $("#advertisement1").empty();
            for ($i = 0; $i < $res["dt1"].length; $i++) {
                $("#advertisement1").append('<p>' +
                    '<a href = "'+'/' + $res["dt1"][$i].imageName + '">' + $res["dt1"][$i].Title + '</a>' + '<br>' +

                    '</p>')
            }
        }
    });
}
function showDownloads() {
    var param = [];

    var proc = 'advertisement_load';
    SelectorNoSession1(param, proc).then(function (result) {
        $res = JSON.parse(result);
        console.log(result);
        if ($res.length != []) {
            $("#advertisement").empty();
            for ($i = 0; $i < $res["dt2"].length; $i++) {
                $("#advertisement").append('<a href = "' + '/' + $res["dt2"][$i].imageName + '" >' + $res["dt2"][$i].Title + '</a >' + '<br>'
                );
            }
            
        }
    });
}
