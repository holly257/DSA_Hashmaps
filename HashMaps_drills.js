import HashMap from './HashMap.js';

//const _HashMap = new HashMap();

function main() {
    HashMap.SIZE_RATIO = 3;
    HashMap.MAX_LOAD_RATIO = 0.5;
    let lotr = new HashMap();

    lotr.set('Hobbit', 'Bilbo');
    lotr.set('Hobbit', 'Frodo');
    lotr.set('Wizard', 'Gandalf');
    lotr.set('Human', 'Aragorn');
    lotr.set('Elf', 'Legolas');
    lotr.set('Maiar', 'The Necromancer');
    lotr.set('Maiar', 'Sauron');
    lotr.set('RingBearer', 'Gollum');
    lotr.set('LadyOfLight', 'Galadriel');
    lotr.set('HalfElven', 'Arwen');
    lotr.set('Ent', 'Treebeard');

    const item = lotr.get('Hobbit')
    return lotr;
}

//console.log(main());

const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);
    //console.log(map1, map2)

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}
//WhatDoesThisDo()

//console.log(5%9, 28%9, 19%9, 15%9, 20%9, 33%9, 12%9, 17%9, 10%9)

function deleteDuplicate(string){
    let arr = []
    for(let i=0; i<string.length; i++){
        if(arr.includes(string.charAt(i))){
            arr;
        }
        else arr.push(string.charAt(i))
    }
    return arr;
}

console.log(deleteDuplicate('google all that you think can think of'))