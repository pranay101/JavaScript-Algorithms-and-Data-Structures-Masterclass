// ---------------------------------------Introduction----------------------------------------------------

// OBJECTIVES
// Explain what a hash table is
// Define what a hashing algorithm
// Discuss what makes a good hashing algorithm
// Understand how collisions occur in a hash table
// Handle collisions using separate chaining or linear probing

// Dealing with Collision

// Separate Chaining:
// With separate chaining, at each index in our array we store values using a 
// more sophisticated data structure (e.g. an array or a linked list).
// This allows us to store multiple key-value pairs at the same index.

// Linear Probing:
// With linear probing, when we find a collision, we search through the array to 
// find the next empty slot.

// Unlike with separate chaining, this allows us to store a single key-value at each index.




// ---------------------------------------Base Code------------------------------------------------------
class HashTable {
    constructor(size = 4) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    set(key, value) {
        let hash = this._hash(key);
        if (!this.keyMap[hash]) {
            this.keyMap[hash] = ([]);

        }
        this.keyMap[hash].push([key, value]);
        return this
    }
    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i];
                }
            };
        }
        return undefined;
    }
    values() {
        let valueArray = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valueArray.includes(this.keyMap[i][j][1]))
                        valueArray.push(this.keyMap[i][j][1])
                }
            }

        }
        return valueArray;
    }

    keys() {
        let keysArray = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArray.includes(this.keyMap[i][j][0]))
                        keysArray.push(this.keyMap[i][j][0])
                }
            }

        }
        return keysArray;
    }
}

let hashTable = new HashTable;
console.log(hashTable.set("hello", 56))
console.log(hashTable.set("pranay", 36))
console.log(hashTable.set("prajapati", 46))
console.log(hashTable.set("prajatbttpati", 46))
console.log(hashTable.get("hellco"))

// ---------------------------------------Recap------------------------------------------------------
// time complexity:
// insertion : O(1)
// removal: O(1)
// Access: O(1)

// Hash tables are collections of key-value pairs
// Hash tables can find values quickly given a key
// Hash tables can add new key-values quickly
// Hash tables store data in a large array, and work by hashing the keys
// A good hash should be fast, distribute keys uniformly, and be deterministic
// Separate chaining and linear probing are two strategies used to deal with 
// two keys that hash to the same index
// When in doubt, use a hash table!
