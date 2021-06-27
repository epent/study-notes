// Stack of plates (from the book)
function SetOfStacks() {
    this.collection = [];
    this.printCollection = function () {
        console.log(this.collection);
    };
    this.isEmpty = function () {
        return this.collection.length === 0;
    };
    this.push = function (item) {
        if (this.isEmpty()) {
            this.collection.push([item]);
            return this.collection;
        }

        let lastSet = this.collection.length - 1;
        if (this.collection[lastSet].length < 5) {
            this.collection[lastSet].push(item);
        } else {
            this.collection = [...this.collection, []];
            lastSet = this.collection.length - 1;
            this.collection[lastSet].push(item);
        }
        return this.collection;
    };
    this.pop = function () {
        if (this.isEmpty()) {
            return 'The collection is empty';
        }

        let lastSet = this.collection.length - 1;
        if (lastSet === 0) {
            this.collection[lastSet].pop();
        } else {
            this.collection[lastSet].pop();
        }
        return this.collection;
    };
}

let stackOne = new SetOfStacks();

stackOne.push('plate1');


stackOne.push('plate2');



stackOne.push('plate3');
stackOne.push('plate4');
stackOne.push('plate5');


stackOne.push('plate6');
stackOne.push('plate7');
stackOne.push('plate8');


stackOne.push('plate9');
stackOne.push('plate10');

stackOne.push('plate11');
stackOne.push('plate12');
console.log(stackOne.collection);

stackOne.pop();
console.log(stackOne.collection);