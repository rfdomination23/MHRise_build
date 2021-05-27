import {ArmorType, Rank} from './common.js';
import {Skill} from './skill.js';



class Armor {
    constructor(name,armorType,rank,skill1,skill2,skill3) {
        this.name = name;
        this.rank = rank;
        this.armorType = armorType;
        this.skill1 = skill1;
        this.skill2 = skill2;
        this.skill3 = skill3;
    }
    toString(){
        console.log(this);
    }
    
}

var all_armors = [];
function getAllArmors() {
    return all_armors;
}

export function initializeArmors() {
    all_armors.push( new Armor("Anjanath Helm S",Rank.low,ArmorType.helm, new Skill("Agitator",1)));
    
}

export function printAllArmors() {
    all_armors.forEach(armor => {
        armor.toString();
    });
}

export {Armor}