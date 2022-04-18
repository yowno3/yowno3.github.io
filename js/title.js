﻿if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 300);

}

var x = 0;

var titleText = [ "|",
					"|",
					"Y |",
					"Y o |",
					"Y o n|",					
					"Y o n e |",
					"Y o n e K | ",	
					"Y o n e K w | ",						
					"Y o n e K w e | ",
					"Y o n e K w e k ",	
					"Y o n e K w e k !",
					"Y o n e K w e k ! ! ",										];					
			
function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}