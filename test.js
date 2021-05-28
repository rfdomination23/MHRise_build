import {Armor} from "./modules/armor.js";
function test() {
    var temp = new Armor("blah")
    alert(temp.name);
}

document.getElementById('next-button').addEventListener('click',test);