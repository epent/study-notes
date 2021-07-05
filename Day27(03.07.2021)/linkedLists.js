
// Doubly linked list
var Node = function (data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
};
var DoublyLinkedList = function () {
    this.head = null;
    this.tail = null;

    // add at the end
    this.add = function (element) {
        let node = new Node(element, this.tail);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            let current = this.tail;
            current.next = node;
            this.tail = node;
        }
    }

    // remove all occurencies of element
    this.remove = function (element) {
        if (!this.head) return null

        if (this.head.data === element) {
            this.head = this.head.next;
            this.head.prev = null;
        } else if (this.tail.data === element) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            let current = this.head;
            let previous = null;

            while (current !== this.tail) {
                if (current.data === element) {
                    previous.next = current.next;
                }
            }
        }
    }
};

