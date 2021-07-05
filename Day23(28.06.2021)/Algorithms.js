class Set {
    constructor() {
        // This will hold the set
        this.dictionary = {};
        this.length = 0;
    }
    // This method will check for the presence of an element and return true or false
    has(element) {
        return this.dictionary[element] !== undefined;
    }
    // This method will return all the values in the set
    values() {
        return Object.keys(this.dictionary);
    }
    // This method will add an element to the set
    add(element) {
        if (!this.has(element)) {
            this.dictionary[element] = true;
            this.length++;
            return true;
        }

        return false;
    }
    // This method will remove an element from a set
    remove(element) {
        if (this.has(element)) {
            delete this.dictionary[element];
            this.length--;
            return true;
        }

        return false;
    }
    // This method will return the size of the set
    size() {
        return this.length;
    }
    // This is our union method 
    union(set) {
        const newSet = new Set();
        this.values().forEach(value => {
            newSet.add(value);
        })
        set.values().forEach(value => {
            newSet.add(value);
        })

        return newSet;
    }
    // Only change code below this line
    intersection(set) {
        let newSet = new Set();
        let largeSet;
        let smallSet;

        if (this.dictionary.length > set.length) {
            largeSet = this;
            smallSet = set;
        } else {
            largeSet = set;
            smallSet = this;
        }

        smallSet.values().forEach(elm => {
            if (largeSet.dictionary[elm]) {
                newSet.add(elm)
            }
        });
        return newSet;
    }
    // Only change code above this line
}

let set1 = new Set();
set1.add('1');
set1.add('2');
set1.add('3');
console.log(set1);

console.log(set1.intersection({ '1': '1', '4': '4' }));


var Map = function () {
    this.collection = {};
    // Only change code below this line
    this.add = (key, value) => {
        this.collection[key] = value;
        this.collection.length++;
    }
    this.remove = (key) => {
        this.collection[key] = null;
        this.collection.length--;
    }
    this.get = (key) => {
        return this.collection[key];
    }
    this.has = (key) => {
        return this.collection[key] ? true : false;
    }
    this.values = () => {
        let array = [];
        Object.keys(this.collection).forEach(key => {
            array.push(this.collection[key])
        });
        return array;
    }
    this.size = () => {
        return Object.entries(this.collection).length;
    }
    this.clear = () => {
        this.collection = {};
    }
    // Only change code above this line
};



var called = 0;
var hash = string => {
    called++;
    var hashed = 0;
    for (var i = 0; i < string.length; i++) {
        hashed += string.charCodeAt(i);
    }
    return hashed;
};
var HashTable = function () {
    this.collection = {};
    // Only change code below this line
    this.add = (key, value) => {
        let hashKey = hash(key);
        if (!this.collection.hasOwnProperty(hashKey)) {

            this.collection[hashKey] = value;
        }
    }
    this.remove = (key) => {
        this.collection[key] = null;
    }
    this.lookup = (key) => {
        let hashKey = hash(key);
        if (this.collection.hasOwnProperty(hashKey)) {
            return this.collection[hashKey];
        }
        return null;
    }
    // Only change code above this line
};