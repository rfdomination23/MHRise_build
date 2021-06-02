import {Helm,Chest,Arms,Waist,Legs,getAllHelms} from "./armor.js";


let currentHelm = new Helm();
let currentChest = new Chest();
let currentWaist = new Waist();
let currentLegs = new Legs();
let currentArms = new Arms();

function setCurrentHelm() {
	var element = document.getElementById("helm-select");
	var strUser = element.options[element.selectedIndex].text.trim();
	currentHelm = getAllHelms().find(e => e.name == strUser);
	document.getElementById("currentEquippedHelm").innerHTML = currentHelm.name;
	//alert(currentHelm.name);
}

document.getElementById("helm-select").addEventListener("change",setCurrentHelm);




