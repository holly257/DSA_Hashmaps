class HashMap_Chaining {
    constructor(initialCapacity = 8) {
        this.length = 0;
        this._hashTable = [];
        this._capacity = initialCapacity;
        this._deleted = 0;
    }

    get(key) {
        const index = this._findSlot(key);
        if (this._hashTable[index] === undefined) {
            throw new Error('Key error');
        }
        return this._hashTable[index].value;
    }

    set(key, value) {
        const loadRatio = (this.length + this._deleted + 1) / this._capacity;
        if (loadRatio > HashMap_Chaining.MAX_LOAD_RATIO) {
            this._resize(this._capacity * HashMap_Chaining.SIZE_RATIO);
        }
        //Find the slot where this key should be in
        const index = this._findSlot(key);

        if (!this._hashTable[index]) {
            this.length++;
        }

        //if slot taken, create linked list
        if (index[1] === 'taken') {
            let takenKey = this._hashTable[index[0]];
            this._createLinkedList(takenKey, value);
        } else {
            //if slot is empty, create new item
            this._hashTable[index] = {
                key,
                value,
                DELETED: false,
                next: null,
            };
        }
    }

    delete(key) {
        const index = this._findSlot(key);
        const slot = this._hashTable[index];
        if (slot === undefined) {
            throw new Error('Key error');
        }
        slot.DELETED = true;
        this.length--;
        this._deleted++;
    }

    _findSlot(key) {
        const hash = HashMap_Chaining._hashString(key);
        const start = hash % this._capacity;

        for (let i = start; i < start + this._capacity; i++) {
            const index = i % this._capacity;
            const slot = this._hashTable[index];
            //if the slot is empty, return
            if (slot === undefined) {
                return index;
            } else {
                //if the slot is already taken, return to create linked list
                let val = [index, 'taken'];
                return val;
            }
        }
    }

    _createLinkedList(takenKey, value) {
        //if first value for index, create linked list
        if (takenKey.next === null) {
            takenKey.next = { value, DELETED: false, next: null };
        } else {
            //if more than one value, loop until you find an empty next value
            takenKey = takenKey.next;
            this._createLinkedList(takenKey, value);
        }
    }

    _resize(size) {
        const oldSlots = this._hashTable;
        this._capacity = size;
        // Reset the length - it will get rebuilt as you add the items back
        this.length = 0;
        this._deleted = 0;
        this._hashTable = [];

        for (const slot of oldSlots) {
            if (slot !== undefined && !slot.DELETED) {
                this.set(slot.key, slot.value);
            }
        }
    }

    static _hashString(string) {
        let hash = 5381;
        for (let i = 0; i < string.length; i++) {
            //Bitwise left shift with 5 0s - this would be similar to
            //hash*31, 31 being the decent prime number
            //but bit shifting is a faster way to do this
            //tradeoff is understandability
            hash = (hash << 5) + hash + string.charCodeAt(i);
            //converting hash to a 32 bit integer
            hash = hash & hash;
        }
        //making sure hash is unsigned - meaning non-negtive number.
        return hash >>> 0;
    }
}

export default HashMap_Chaining;
