function form_submit() {
	
	document.getElementById("validate").innerHTML = "";
	var name = document.getElementById("icon").value;
    if(name=='')
        {
			document.getElementById("icon").style.border="1px double #ff0000";
			document.getElementById("validate").innerHTML = "Enter Your Name";		
			return false;
        } else
		{
			document.getElementById("icon").style.border="1px double #D0D0D0";
		}
		
	var mobile = document.getElementById("icon2").value;
    if(mobile=='')
        {
			document.getElementById("icon2").style.border="1px double #ff0000";
			document.getElementById("validate").innerHTML = "Enter Your Mobile number";		
			return false;
        } else
		{
			document.getElementById("icon2").style.border="1px double #D0D0D0";
		}
		
	var email = document.getElementById("icon3").value;
    if(email=='')
        {
			document.getElementById("icon3").style.border="1px double #ff0000";
			document.getElementById("validate").innerHTML = "Enter Your Email";
			return false;
        }	else if(email.indexOf('@') ==-1 || email.indexOf('.') ==-1)
		{
			document.getElementById("icon3").style.border="1px double #ff0000";
			document.getElementById("validate").innerHTML = "Enter correct Email format";
			return false;
		} else
		{
			document.getElementById("icon3").style.border="1px double #D0D0D0";
		}
	
	var msg = document.getElementById("icon4").value;
    if(msg=='')
        {
			document.getElementById("icon4").style.border="1px double #ff0000";
			document.getElementById("validate").innerHTML = "Enter Your Message";		
			return false;
        } else
		{
			document.getElementById("icon4").style.border="1px double #D0D0D0";
		}
		
	var cap = document.getElementById('cap').value;
    if(cap=='')
        {
			document.getElementById("cap").style.border="1px double #ff0000";
			document.getElementById("validate").innerHTML = "Please Enter Security Code";		
			return false;
        } else {
			document.getElementById("cap").style.border="1px double #D0D0D0";
		}

document.getElementById('contact_send').style.display='none';	
document.getElementById("validate").innerHTML = "Please wait.....";		
	$.ajax({
			url: 'contact_action.php',
			type: 'post',
			data: {cap: cap, name: name, mobile: mobile, email: email, msg: msg },
			success: function(results){
				console.log(results);
				if (results==1) {
				document.getElementById("icon").value="";
				document.getElementById("icon2").value="";
				document.getElementById("icon3").value="";
				document.getElementById("icon4").value="";
				document.getElementById("cap").value="";
				document.getElementById("cap").style.border="1px double #D0D0D0";
				document.getElementById("validate").innerHTML = "";	
				document.getElementById('thankyou').style.display='block';
				//window.location.href = '#';
				document.getElementById('contact_send').style.display='block';
				//$.colorbox.close();	
				} else {
				document.getElementById("cap").style.border="1px double #ff0000";
				document.getElementById("validate").innerHTML = "Please enter correct Security Code";	
				document.getElementById('contact_send').style.display='block';
				}	
			}
		});
	
	
	}








function step1() {
	
	document.getElementById('step1').style.display='none';
	document.getElementById('step2').style.display='block';
	window.location.href = '#top';
	document.getElementById('details').style.backgroundColor = "#090";
	document.getElementById('details2').style.color = "#090";
			//document.getElementById('email').value = document.getElementById('billing_email').value;
			//document.getElementById('billing_email').style.border="1px solid #7f7f7f";
			//document.getElementById('email_validate').innerHTML = "";
			//document.getElementById('email_validate2').innerHTML = "";
			//email_save();
	}
function step2() {
	window.location.href = '#top';
	document.getElementById('step2').style.display='none';
	document.getElementById('step3').style.display='block';
	document.getElementById('date').style.backgroundColor = "#090";
	document.getElementById('date2').style.color = "#090";
	
	}
function step3() {
	
	var mat = $('input[name=toggle2]:checked').val();
	var often = $('input[name=toggle]:checked').val();
	var time = document.getElementById("times").value;
	var clr = document.getElementById("clr").value;
	var req = document.getElementById("req").value;
	var datep = document.getElementById("datepicker").value;
	var hours = $('input[name=time]:checked').val();
	
	document.getElementById("validate").innerHTML = "";
	var name = document.getElementById("name").value;
    if(name=='')
        {
			document.getElementById("name").style.border="1px double #ff0000";
			document.getElementById("validate").innerHTML = "Enter Your Name";		
			return false;
        } else
		{
			document.getElementById("name").style.border="1px double #D0D0D0";
		}
		
	var email = document.getElementById("email").value;
    if(email=='')
        {
			document.getElementById("email").style.border="1px double #ff0000";
			document.getElementById("validate").innerHTML = "Enter Your Email";
			return false;
        }	else if(email.indexOf('@') ==-1 || email.indexOf('.') ==-1)
		{
			document.getElementById("email").style.border="1px double #ff0000";
			document.getElementById("validate").innerHTML = "Enter correct Email format";
			return false;
		} else
		{
			document.getElementById("email").style.border="1px double #D0D0D0";
		}
		
	var mobile = document.getElementById("mobile").value;
    if(mobile=='')
        {
			document.getElementById("mobile").style.border="1px double #ff0000";
			document.getElementById("validate").innerHTML = "Enter Your Mobile number";		
			return false;
        } else
		{
			document.getElementById("mobile").style.border="1px double #D0D0D0";
		}
	
	var area = document.getElementById("area").value;
    if(area=='')
        {
			document.getElementById("area").style.border="1px double #ff0000";
			document.getElementById("validate").innerHTML = "Enter Your Location";		
			return false;
        } else
		{
			document.getElementById("area").style.border="1px double #D0D0D0";
		}
		
	var note = document.getElementById("note").value;
    if(note=='')
        {
			document.getElementById("note").style.border="1px double #ff0000";
			document.getElementById("validate").innerHTML = "Please indicate the nearest landmark";		
			return false;
        } else
		{
			document.getElementById("note").style.border="1px double #D0D0D0";
		}
		
	var note2 = document.getElementById("note2").value;
    if(note2=='')
        {
			document.getElementById("note2").style.border="1px double #ff0000";
			document.getElementById("validate").innerHTML = "How will you let the cleaner in?";		
			return false;
        } else
		{
			document.getElementById("note2").style.border="1px double #D0D0D0";
		}
	var lname = document.getElementById("lname").value;
	var city = document.getElementById("city").value;
	
	
	$.ajax({
			url: 'form_action2.php',
			type: 'post',
			data: {mat: mat, often: often, time: time, clr: clr, req: req, datep: datep, hours: hours, name: name, email: email, mobile: mobile, area: area, note: note, note2: note2, lname: lname, city: city},
			success: function(results){
				console.log(results);
				//alert (results);
				if (results==1) {
				//alert(results);
				document.getElementById("thankyou").innerHTML="Thank you....";
				} else {
				document.getElementById("thankyou").innerHTML="Thank you....";
				}	
			}
		});
	
	
	
	window.location.href = '#top';
	document.getElementById('step3').style.display='none';
	document.getElementById('step4').style.display='block';
	document.getElementById('address').style.backgroundColor = "#090";
	document.getElementById('address2').style.color = "#090";
	document.getElementById('confirm').style.backgroundColor = "#090";
	document.getElementById('confirm2').style.color = "#090";
	}
function back1() {
	window.location.href = '#top';
	document.getElementById('step2').style.display='none';
	document.getElementById('step1').style.display='block';
	document.getElementById('details').style.backgroundColor = "#FFF";
	document.getElementById('details2').style.color = "#000";
	}
function back2() {
	window.location.href = '#top';
	document.getElementById('step3').style.display='none';
	document.getElementById('step2').style.display='block';
	document.getElementById('date').style.backgroundColor = "#FFF";
	document.getElementById('date2').style.color = "#000";
	}
 function time() {
    var selectBox = document.getElementById("times");
    var times = selectBox.options[selectBox.selectedIndex].value;
	var clr = document.getElementById("clr").value;
    var mat = $('input[name=toggle2]:checked').val();

	var matperhr = mat*times;
	
	var prhr = times*35*clr;	
	document.getElementById('total').innerHTML = prhr+matperhr;
   }
function cleaner() {
    var selectBox = document.getElementById("clr");
    var clr = selectBox.options[selectBox.selectedIndex].value;
	document.getElementById('cleaner').innerHTML = clr;
	var times = document.getElementById("times").value;
	var mat = $('input[name=toggle2]:checked').val();
	
	var matperhr = mat*times;
	
	var prhr = times*35*clr;
	document.getElementById('total').innerHTML = prhr+matperhr;
   }
function material() {

    var clr = document.getElementById("clr").value;
	var times = document.getElementById("times").value;
	var mat = $('input[name=toggle2]:checked').val();
	
	if (mat==10) {
	document.getElementById('mat').innerHTML = "Yes";
	} else {
	document.getElementById('mat').innerHTML = "No";
	}
	
	var matperhr = mat*times;
	
	var prhr = times*35*clr;
	document.getElementById('total').innerHTML = prhr+matperhr;
}
function city_code(str)
{
	//alert (str);
	
/*if (str=="")
  {
  document.getElementById("location_hide").innerHTML="";
  document.getElementById("thankyou").innerHTML="";
  return;
  }*/
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("location_hide").innerHTML=xmlhttp.responseText;
    }
  }
//xmlhttp.open("GET","facility.php?q="+str,true);
xmlhttp.open("GET","location.php?q="+str,true);
xmlhttp.send();
}