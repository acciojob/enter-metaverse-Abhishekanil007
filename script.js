//your JS code here. If required.
function changeText(){
	let ptag = document.getElementById("status");
	
	let htag = document.createElement("h1");
	htag.textContent = "Entered Metaverse";
	htag.id = "status";

	ptag.parentNode.replaceChild(htag , ptag);
	
}