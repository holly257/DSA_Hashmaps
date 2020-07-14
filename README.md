# Hashmaps

1. Create a HashMap class
    - value Hobbit = Frodo, value Maiar = Sauron
    - yes, the discrepancy is that the duplicate keys values are not being saved
    - capacity = 24

2. WhatDoesThisDo
    - map1 {key:"hello world.", value: 10} => returns 20 becuase the identical key value is written over
    - map2 {key:"hello world.", value: 20} => returns 10 becuase the identical key value is written over

3. Demonstrate understanding of Hash maps
    1. Show your hash map after the insertion of keys 10, 22, 31, 4, 15, 28, 17, 88, 59 into a hash map of length 11 using open addressing and a hash function k mod m, where k is the key and m is the length.
    - length: 11
    - _capacity: 11
    - _deleted: 0
    - _hashTable: Array(9) 
        k%m   10%11
        10: {key: "10", value: "", DELETED: false}
        0: {key: "22", value: "", DELETED: false}
        9: {key: "31", value: "", DELETED: false}
        4: {key: "4", value: "", DELETED: false}
        5: {key: "15", value: "", DELETED: false}
        6: {key: "28", value: "", DELETED: false}
        7: {key: "17", value: "", DELETED: false}
        0: {key: "88", value: "", DELETED: false}
        8: {key: "59", value: "", DELETED: false}
    2. Show your hash map after the insertion of the keys 5, 28, 19, 15, 20, 33, 12, 17, 10 into the hash map with collisions resolved by separate chaining. Let the hash table have a length m = 9, and let the hash function be k mod m.
    - length: 9
    - _capacity: 9
    - _deleted: 0
    - _hashTable: Array(9) 
        k%m   5%9
        5: {key: "5", value: "", DELETED: false}
        1: {
            value: {key: "28", value: "", DELETED: false} next: value.key:19
            value: {key: "19", value: "", DELETED: false} next: value.key:10
            value: {key: "10", value: "", DELETED: false}
        }
        6: {
            value: {key: "15", value: "", DELETED: false} next: value.key:33
            value: {key: "33", value: "", DELETED: false}
        }
        2: {key: "20", value: "", DELETED: false}
        3: {key: "12", value: "", DELETED: false}
        8: {key: "17", value: "", DELETED: false}

4. Remove duplicates
    - Implement a function to delete all duplicated characters in a string and keep only the first occurrence of each character. For example, if the input is string “google”, the result after deletion is “gole”. Test your program with a sentence as well such as "google all that you think can think of".
5. Any permuatation a palindrome
    - Write an algorithm to check whether any anagram of some string is a palindrome. 
    - Given some string, "acecarr", the algorithm should return true, because the letters in "acecarr" can be rearranged to the anagram "racecar", which itself is a palindrome. 
    - In contrast, given the word "north", the algorithm should return false, because there's no anagram for "north" that would be a palindrome.
6. Anagram grouping
    - Write an algorithm to group a list of words into anagrams. 
    - For example, if the input was ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'], the output should be: [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']].