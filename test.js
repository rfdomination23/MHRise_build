import {Armor} from "./modules/armor.js";
function test() {
    var temp = new Armor("blah")
    console.log(temp);
}

document.querySelector('button').addEventListener('click',test);