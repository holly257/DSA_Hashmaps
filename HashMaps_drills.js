import HashMap from './HashMap.js';

//1. Create a HashMap class
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

    const item = lotr.get('Hobbit');
    return lotr;
}
//console.log(main());

//2. What does the follow code output
const WhatDoesThisDo = function () {
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1, 10);
    map1.set(str2, 20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3, 20);
    map2.set(str4, 10);
    //console.log(map1, map2)

    console.log(map1.get(str1));
    console.log(map2.get(str3));
};
//WhatDoesThisDo()

//4. Remove duplicates
function deleteDuplicate(string) {
    let arr = [];
    for (let i = 0; i < string.length; i++) {
        if (arr.includes(string.charAt(i))) {
            arr;
        } else arr.push(string.charAt(i));
    }
    return arr;
}

//console.log(deleteDuplicate('google all that you think can think of'))

//5. Any permutation a palindrome
function permutationIsAPalindrome(possPalin) {
    let string = possPalin.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    //first find all anagram permutations
    const possiblePermutations = [];
    function findPermutations(string, perm = '') {
        const seen = new Set();
        if (!string) possiblePermutations.push(perm);
        for (let i = 0; i < string.length; i++) {
            if (!seen.has(string[i])) {
                seen.add(string[i]);
                findPermutations(string.slice(0, i) + string.slice(i + 1), perm + string[i]);
            }
        }
    }
    findPermutations(string);

    let foundPalindromes = [];
    //then reverse each permutation to see if a palindrome
    possiblePermutations.forEach(word => {
        let reversedStr = '';
        for (let i = word.length - 1; i >= 0; i--) {
            let eachChar = word.charAt(i);
            reversedStr = ''.concat(reversedStr, eachChar);
        }
        //if palindrome, add to array
        if (word == reversedStr) {
            foundPalindromes.push(word);
        }
    });
    //if we found any palindromes, then return true
    if (foundPalindromes[0]) {
        return true;
    } else return false;
}

//console.log(permutationIsAPalindrome('moma'))
//false
//console.log(permutationIsAPalindrome('acecarr'));
//true
//console.log(permutationIsAPalindrome('north'));
//false

//6. Anagram grouping
function groupAnagrams(array) {
    const possiblePermutations = [];
    const newARr = []

    for (let j = 0; j < array.length; j++) {
        let arrToPass = array;
    //array.forEach(string => {
        //console.log(array[j])
        let PossPermsForWord = [];
        function findPermutations(string, perm = '') {
            const seen = new Set();
            if (!string) PossPermsForWord.push(perm);
            for (let i = 0; i < string.length; i++) {
                if (!seen.has(string[i])) {
                    seen.add(string[i]);
                    findPermutations(string.slice(0, i) + string.slice(i + 1), perm + string[i]);
                }
            }
        }
        findPermutations(arrToPass[j]);
        for(let k = 0; k < array.length-5; k++){
            if(PossPermsForWord.includes(array[k])){
                arrToPass = arrToPass.filter(word => word !== array[k])
            }
            console.log(arrToPass[k])
            return arrToPass
        }
        //testing
        possiblePermutations.push(PossPermsForWord);
        //console.log(PossPermsForWord)
        //newARr.push(string)
    };

    // let finalArr = []
    // for (let i = 0; i < possiblePermutations.length; i++) {
    //     let eachSubArr = []
    //     for (let j = 0; j < possiblePermutations.length; j++) {
            
    //         if (array.includes(possiblePermutations[i][j])) {
    //             eachSubArr.push(possiblePermutations[i][j])
    //         }
    //     }
    //     finalArr.push(eachSubArr)
    // }

    return possiblePermutations;
}

let input = ['east', 'eats', 'cars', 'acre', 'arcs', 'teas', 'race'];
console.log(groupAnagrams(input));
//output [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']]
