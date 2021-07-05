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
        return Object.values(this.dictionary);
    }
    // This method will add an element to the set
    add(element) {
        if (!this.has(element)) {
            this.dictionary[element] = element;
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
    // Only change code below this line
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
    // Only change code above this line
}

let set1 = new Set();
set1.add(1);
set1.add(2);
set1.add(3);
console.log(set1);
set1.union({ '3': 3, '4': 4 });
console.log(set1);


// union(newSet) {
//     for (let elm in newSet) {
//         if (!this.has(elm)) {
//             this.dictionary[elm] = elm;
//             this.length++;
//         }

//     }
//     return this.dictionary;
// }