import {Rank} from './common.js';
import {Skill} from './skill.js';



export class Armor {
    constructor(name,rank,skill1,skill2,skill3) {
        this.name = name
        this.rank = rank;
        this.skill1 = skill1;
        this.skill2 = skill2;
        this.skill3 = skill3;
    }
    toString(){
        console.log();
    }
    
}

export class Helm extends Armor {

}

export class Chest extends Armor {

}

export class Arms extends Armor {

}

export class Waist extends Armor {

}

export class Legs extends Armor {

}

var all_helms = [];
export function getAllHelms() {
    return all_helms;
}

export function initializeArmors() {
    all_helms.push( new Helm("Kamura Head Scarf S",Rank.low, new Skill("Agitator",1)));
    all_helms.push( new Helm("Aelucanth Vertex S",Rank.high, new Skill("Critical Elemet",2)));
    
}

export function printAllHelms() {
    all_helms.forEach(armor => {
        armor.toString();
    });
}
