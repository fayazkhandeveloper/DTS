var img1 ="" ;
function mouse_hover(d_id) {
	if(d_id=="a1") {
	document.getElementById(d_id).src= "images/branding_h.png";
	} else if (d_id=="a2") {
	document.getElementById(d_id).src= "images/web_development_h.png";
	} else if (d_id=="a3") {
	document.getElementById(d_id).src= "images/ecommerce_h.png";
	} else if (d_id=="a4") {
	document.getElementById(d_id).src= "images/ui_ux_h.png";
	} else if (d_id=="a5") {
	document.getElementById(d_id).src= "images/idea_h.png";
	} else if (d_id=="a6") {
	document.getElementById(d_id).src= "images/psd_h.png";
	}
	window.img1 =  d_id;
	}
	
function mouse_down() {	
	if(img1=="a1") {
	document.getElementById(img1).src= "images/branding.png";
	} else if (img1=="a2") {
	document.getElementById(img1).src= "images/web_development.png";
	} else if (img1=="a3") {
	document.getElementById(img1).src= "images/ecommerce.png";
	} else if (img1=="a4") {
	document.getElementById(img1).src= "images/ui_ux.png";
	} else if (img1=="a5") {
	document.getElementById(img1).src= "images/idea.png";
	} else if (img1=="a6") {
	document.getElementById(img1).src= "images/psd.png";
	}
	
	}

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll < 100) {
		
		document.getElementById("top_menu_box").style.backgroundColor = "#ffffff";
		var container = document.getElementById('menu_txt');
		var anchors = container.getElementsByTagName('a');
		for (var i = 0; i<anchors.length; i++){
			anchors[i].style.color = "#565656";
		}
		/*var subdiv = document.getElementById('li');
		var subs = subdiv.getElementsByTagName('a');
		for (var i = 0; i<subs.length; i++){
			subs[i].style.backgroundColor = "#ffffff";
		}*/
		document.getElementById("logo").src = "images/logo.png";
		document.getElementById("top_menu_box").style.opacity = ".9";
    } else {
        document.getElementById("top_menu_box").style.backgroundColor = "#00b3d9";
		/*var subdiv = document.getElementById('li');
		var subs = subdiv.getElementsByTagName('a');
		for (var i = 0; i<subs.length; i++){
			subs[i].style.backgroundColor = "#033687";
		}
		document.getElementById("logo_title").style.color = "#ffffff";*/
		var container = document.getElementById('menu_txt');
		var anchors = container.getElementsByTagName('a');
		for (var i = 0; i<anchors.length; i++){
			anchors[i].style.color = "#ffffff";
		}
		document.getElementById("logo").src = "images/logo_h.png";
		document.getElementById("top_menu_box").style.opacity = "1";
    }
});
/*$(function() {
				$('#foo3').carouFredSel({
					responsive: true,
					height: 'auto',
					prev: '#prev3',
					next: '#next3',
					auto: true
				});
			});*/