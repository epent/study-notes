class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToTheEnd(value) {
        let node = new Node(value);

        if (this.length === 0) {
            this.head = node;
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = new Node(value);
        }

        this.length++;
    }

    removeFromPosition(position) {
        let current = this.head;

        if (position === 0) {
            this.head = current.next;
        } else {
            let prev = null;
            let index = 0;

            while (index < position) {
                prev = current;
                current = current.next;
                index++;
            }

            prev.next = current.next;
        }

        this.length--;
        return current.value;
    }

    
}

