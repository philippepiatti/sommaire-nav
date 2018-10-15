var zoom = document.querySelector(".zoom");
	zoom.style.fontSize = "1em";		            
		     var boutonPlus = document.querySelector(".boutonPlus");		         
			     boutonPlus.addEventListener("click",agrandir);
			  	 
			       function agrandir (){				     
					  if(zoom.style.fontSize==="1em"){
					     zoom.style.fontSize="1.2em";
					  }	
			    else if(zoom.style.fontSize=="1.2em"){
					     zoom.style.fontSize="1.4em";
						}
				else if(zoom.style.fontSize=="1.4em"){
					     zoom.style.fontSize="1.6em";
						}
                else if(zoom.style.fontSize=="1.6em"){
					     zoom.style.fontSize="1.8em";
						}
                else if(zoom.style.fontSize=="1.8em"){
					     zoom.style.fontSize="2em";
						}
                else if(zoom.style.fontSize=="2em"){
					     zoom.style.fontSize="2.2em";
						}
                else if(zoom.style.fontSize=="2.2em"){
					     zoom.style.fontSize="2.4em";
						}
                else if(zoom.style.fontSize=="2.4em"){
					     zoom.style.fontSize="2.6em";
						}
                else if(zoom.style.fontSize=="2.6em"){
					     zoom.style.fontSize="2.8em";
						}
                else if(zoom.style.fontSize=="2.8em"){
					     zoom.style.fontSize="3em";
						}						
                      else{zoom.style.fontSize="3em";}					  
						};
						
			 var boutonMoins = document.querySelector(".boutonMoins");		         
			     boutonMoins.addEventListener("click",reduire);
			 
			       function reduire (){				     
					  if(zoom.style.fontSize=="3em"){
					    zoom.style.fontSize="2.8em";
					  }
                 else if(zoom.style.fontSize=="2.8em"){
					     zoom.style.fontSize="2.6em";
						}
                 else if(zoom.style.fontSize=="2.6em"){
					     zoom.style.fontSize="2.4em";
						}
                 else if(zoom.style.fontSize=="2.4em"){
					     zoom.style.fontSize="2.2em";
						}
                 else if(zoom.style.fontSize=="2.2em"){
					     zoom.style.fontSize="2em";
						}
                 else if(zoom.style.fontSize=="2em"){
					     zoom.style.fontSize="1.8em";
						}
                 else if(zoom.style.fontSize=="1.8em"){
					     zoom.style.fontSize="1.6em";
						}
				else if(zoom.style.fontSize=="1.6em"){
					     zoom.style.fontSize="1.4em";
						}
                else if(zoom.style.fontSize=="1.4em"){
					     zoom.style.fontSize="1.2em";
						}
                else if(zoom.style.fontSize=="1.2em"){
					     zoom.style.fontSize="1em";
						}						
                      else{zoom.style.fontSize="1em";}					  
						};
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						