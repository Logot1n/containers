// class Character {
//     constructor(type, lvl) {
//         this.type = type;
//         this.lvl = lvl;
//     }
// }

export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if(this.members.has(character)) {
            throw new Error('Данный персонаж уже есть в команде');
        } else {
            this.members.add(character);
        }
    }

    addAll(...characters) {
        for(const hero of characters) {
            if(this.members.has(hero)) {
                continue;
            } else {
                this.members.add(hero);
            }
        }
    }

    toArray() {
        const myTeam = [...this.members];
        return myTeam;
    }
}