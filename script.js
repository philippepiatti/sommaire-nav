






let paragraphClass = document.querySelectorAll('p');

let b = document.getElementById('suport_fenetre');

let paragrapheActuelBackgroundColor = null;


let bouttBackgroundColor1 = document.querySelector('.fonDeLigne1');
let bouttBackgroundColor2 = document.querySelector('.fonDeLigne2');
let bouttBackgroundColor3 = document.querySelector('.fonDeLigne3');
  
      
  for (let i = 0; i < paragraphClass.length; i++) {
    paragraphClass[i].addEventListener( 'click', function() { ouvrir(paragraphClass[i]);}
               
    );
  }

  b.addEventListener('click',fermer);

  function ouvrir() {
    b.style.display='block';
  }

  function fermer(){  
    b.style.display='none';
  }
 
 
let modalePalette = document.querySelector('.ligneCouleur');

let c = document.getElementById('suport_paleteCouleur');



modalePalette.addEventListener( 'click', function() { ouvre('suport_paleteCouleur');});

c.addEventListener('click',ferme);

  function ouvre() {
    c.style.display='block';
  }

  function ferme(){  
    c.style.display='none';
  }
  
  
bouttBackgroundColor1.addEventListener('click', function() {
	
	let paraColor = paragrapheActuelBackgroundColor.style.background;
	      
	if (paraColor == "yellow") {
		bouttBackgroundColor1.style.color = "grey";
		
		paragrapheActuelBackgroundColor.style.background = "transparent";
		
	}
	else {
		bouttBackgroundColor1.style.color = "red";
		
		paragrapheActuelBackgroundColor.style.background = "yellow";
		
	}
	
	
});


for (let i = 0; i < paragraphClass.length; i++) {
	let paragrapheColor = paragraphClass[i];
	paragrapheColor.addEventListener('click', function() {
		
		paragrapheActuelBackgroundColor = paragrapheColor;
	
	let paraColor = paragrapheActuelBackgroundColor.style.background;
		
		if (paraColor == "yellow") {
			bouttBackgroundColor1.style.color = "red";
			
			paragrapheActuelBackgroundColor.style.background = "yellow";
			
		}
		else {
			bouttBackgroundColor1.style.color = "grey";
			
			paragrapheActuelBackgroundColor.style.background = "transparent";
			
		}
	});
}


 
  
  
  
  
  