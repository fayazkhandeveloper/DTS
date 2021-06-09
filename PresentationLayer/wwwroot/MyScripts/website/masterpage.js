$(document).ready(function () {

    dataload();
});
//show website title and description

function dataload() {
    alert("Master Page");
    var param = [];
    var proc = 'show_home_pages_data';
    SelectorNoSession1(param, proc).then(function (result) {
        $res = JSON.parse(result);

        if ($res.length != []) {
            $("#side_news").empty();
            for ($i = 0; $i < $res["dt4"].length; $i++) {
                $("#side_news").append('<li>' + '<a href="">' + $res["dt4"][$i].Title +
                    '</a>' + '</li>');
                alert($res["dt4"][$i].Title);   
            }
        }

    });
}

