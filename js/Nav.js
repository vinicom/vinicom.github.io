// JavaScript Document


function buttonHover(num)
{
	"use strict";
	
	document.getElementById("navButton"+num.toString()).style.backgroundColor = "#023F48" ;
	

}

function buttonMove(num)
{
	"use strict";
	document.getElementById("navButton"+num.toString()).style.backgroundColor = "#1CC3ED" ; 
}

function linkHover(name)
{
	"use strict";
	document.getElementById("navLink"+name.toString()).style.color = "#023F48";
}

function linkMove(name)
{
	"use strict";
	document.getElementById("navLink"+name.toString()).style.color = "white" ;
}