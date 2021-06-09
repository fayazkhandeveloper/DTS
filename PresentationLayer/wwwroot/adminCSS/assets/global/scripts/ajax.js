	
	var typ1 = '';
	var elem1 = '';

	
	function AjaxNew(url,elem,typ)
	{


alert(url);

			elem1 = elem;
			//document.getElementById(elem1).innerHTML = '<br><br><br><center><img src="emp_pictures/loading_bar.gif" /><br> Loading</center>';
			typ1 = typ;
	
			xmlHttp = new GetXmlHttpObject()
			if (xmlHttp==null)
			{
			   alert ("Browser does not support HTTP Request")
			   return
			}
			var url= url;
			if(url.indexOf('?') <= 0)
			{
				url = url + '?ajax_rand='+ Math.random();
			}else{
				url = url + '&ajax_rand='+ Math.random();
			}
		
			
			 
			xmlHttp.onreadystatechange=stateChanged;
			
			xmlHttp.open("GET",url,true)
			
			xmlHttp.send(null)
		
	}
	
	
	
	function stateChanged() 
	{ 
		
		if (xmlHttp.readyState == 4 || xmlHttp.readyState=="complete")
		 { 
			
		
			if(typ1 == 'HTML')
			{
				myval = xmlHttp.responseText;
				
				
				
				document.getElementById(elem1).innerHTML = myval ;
				
			}else{
				
				if(typ1 == 'TEXT')
				{
					document.getElementById(elem1).innerText=xmlHttp.responseText 
				}
				else
				{
					if(typ1 == 'COMBO')
					
					{
						myval = xmlHttp.responseText;
						//alert(myval);
						
						myval = myval.split("|");
						//alert(myval);
						//len = document.getElementById(elem1).options.length;
						document.getElementById(elem1).innerHTML = '';
						var ch = '';
						var tocheck = false;
						for(i=0;i<myval.length;i++)
						{
							if(myval[i] != '' && myval[i] != '#')
							{
								//alert(myval[i]);
								var valdiv = myval[i].split('#');
									//alert(valdiv);
									var checkat = '';
									checkat = valdiv[1].split('@');
								document.getElementById(elem1).options[i] = new Option(checkat[0],valdiv[0]);	
								ch = ch + checkat[0]+","+valdiv[0]+"\n";
								if(checkat[1] == 'selected')
								{
									document.getElementById(elem1).options[i].selected = true;
									tocheck=true;
								}
							}
								
						}
						
						if(tocheck == false)
						{
							//alert("selected Option: "+ document.getElementById(elem1).options[1].Text);
						document.getElementById(elem1).options[1].selected = true;
						}
						
						//alert(ch);
					}
					
					else
					{
						document.getElementById(elem1).value=xmlHttp.responseText 	
					}
				}
			}
			
	
		 } 
	}
	
	function GetXmlHttpObject()
	{
		var xmlHttp=null;
		try
		 {
		 // Firefox, Opera 8.0+, Safari
			xmlHttp=new XMLHttpRequest();
		 }
		catch (e)
		 {
		 //Internet Explorer
			 try
			  {
				xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
			  }
			 catch (e)
			  {
			  xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
			  }
		 }
		return xmlHttp;
		
	}

	




function Ajax2(url,elem,typ)
	{
		
alert("select");

			elem1 = elem;
			//document.getElementById(elem1).innerHTML = '<br><br><br><center><img src="emp_pictures/loading_bar.gif" /><br> Loading</center>';
			typ1 = typ;
	
			xmlHttp = new GetXmlHttpObject()
			if (xmlHttp==null)
			{
			   alert ("Browser does not support HTTP Request")
			   return
			}
			var url= url;
			if(url.indexOf('?') <= 0)
			{
				url = url + '?ajax_rand='+ Math.random();
			}else{
				url = url + '&ajax_rand='+ Math.random();
			}
		
			
			 
			xmlHttp.onreadystatechange=stateChanged;
			
			xmlHttp.open("GET",url,true)
			
			xmlHttp.send(null)
		
	}
	
	
	
	function stateChanged() 
	{ 
		
		if (xmlHttp.readyState == 4 || xmlHttp.readyState=="complete")
		 { 
			
		
			if(typ1 == 'HTML')
			{
				myval = xmlHttp.responseText;
				
				
				
				document.getElementById(elem1).innerHTML = myval ;
				
			}else{
				
				if(typ1 == 'TEXT')
				{
					document.getElementById(elem1).innerText=xmlHttp.responseText 
				}
				else
				{
					if(typ1 == 'COMBO')
					
					{
						myval = xmlHttp.responseText;
						//alert(myval);
						
						myval = myval.split("|");
						//alert(myval);
						//len = document.getElementById(elem1).options.length;
						document.getElementById(elem1).innerHTML = '';
						var ch = '';
						var tocheck = false;
						for(i=0;i<myval.length;i++)
						{
							if(myval[i] != '' && myval[i] != '#')
							{
								//alert(myval[i]);
								var valdiv = myval[i].split('#');
									//alert(valdiv);
									var checkat = '';
									checkat = valdiv[1].split('@');
								document.getElementById(elem1).options[i] = new Option(checkat[0],valdiv[0]);	
								ch = ch + checkat[0]+","+valdiv[0]+"\n";
								if(checkat[1] == 'selected')
								{
									document.getElementById(elem1).options[i].selected = true;
									tocheck=true;
								}
							}
								
						}
						
						if(tocheck == false)
						{
							//alert("selected Option: "+ document.getElementById(elem1).options[1].Text);
						document.getElementById(elem1).options[1].selected = true;
						}
						
						//alert(ch);
					}
					
					else
					{
						document.getElementById(elem1).value=xmlHttp.responseText 	
					}
				}
			}
			
	
		 } 
	}
	
	function GetXmlHttpObject()
	{
		var xmlHttp=null;
		try
		 {
		 // Firefox, Opera 8.0+, Safari
			xmlHttp=new XMLHttpRequest();
		 }
		catch (e)
		 {
		 //Internet Explorer
			 try
			  {
				xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
			  }
			 catch (e)
			  {
			  xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
			  }
		 }
		return xmlHttp;
		
	}
