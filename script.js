//your JS code here. If required.
function changeText(){
	let ptag = document.getElementById("status");
	
	let htag = document.createElement("h1");
	htag.textContent = "Entered Metaverse";

	ptag.parentNode.replaceChild(htag , ptag);
	
}