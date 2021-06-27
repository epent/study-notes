// Priority Queue 
const collection = [['kitten', 2], ['dog', 2], ['rabbit', 4]];
const isEmpty = () => {
    return collection.length === 0;
};
const enqueue = (item) => {
    if (isEmpty()) {
        collection.push(item);
    }
    let index = 0;
    for (let i = 0; i < collection.length; i++) {
        if (item[1] > collection[i][1]) {
            index++;
        }
    }
    collection.splice(index, 0, item);
    return collection;
};

console.log(collection);
console.log(enqueue(['human', 1]));
console.log(enqueue(['something', 3]));
console.log(enqueue(['smth3', 10]));
console.log(enqueue(['smth', 5]));
console.log(enqueue(['smth2', 4]));
console.log(enqueue(['smth4', 15]));



function PriorityQueue() {
    this.collection = [];
    this.printCollection = function () {
        console.log(this.collection);
    };
    // Only change code below this line
    this.enqueue = function (item) {
        if (this.isEmpty()) {
            return this.collection.push(item);
        }
        let index = 0;
        for (let i = 0; i < this.collection.length; i++) {
            if (item[1] > this.collection[i][1]) {
                index++;
            }
        }
        this.collection.splice(index, 0, item);
        return this.collection;
    };
    this.dequeue = function () {
        if (!this.isEmpty()) {
            return this.collection.shift()[0];
        }
    };
    this.size = function () {
        return this.collection.length;
    };
    this.front = function () {
        return this.collection[0][0];
    };
    this.isEmpty = function () {
        return this.collection.length === 0;
    };
    // Only change code above this line
}


function PriorityQueue() {
    this.collection = [];
    this.printCollection = function () {
        console.log(this.collection);
    };
    // Only change code below this line
    this.enqueue = function (newitem) {
        if (this.isEmpty()) {
            return this.collection.push(newitem);
        }

        this.collection = this.collection.reverse();
        var found_index = this.collection.findIndex(function (item) {
            return newitem[1] >= item[1];
        });
        if (found_index === -1) {
            this.collection.push(newitem);
        } else {
            this.collection.splice(found_index, 0, newitem);
        }
        this.collection = this.collection.reverse();
    };
    this.dequeue = function () {
        if (!this.isEmpty()) {
            return this.collection.shift()[0];
        } else {
            return "The queue is empty.";
        }
    };
    this.size = function () {
        return this.collection.length;
    };
    this.front = function () {
        return this.collection[0][0];
    };
    this.isEmpty = function () {
        return this.size() > 0 ? false : true;
    };
    // Only change code above this line
}