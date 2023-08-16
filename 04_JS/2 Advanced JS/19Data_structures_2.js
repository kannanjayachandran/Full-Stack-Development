class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addStart(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.size++;
    }

    addEnd(value) {
        const node = new Node(value);
        let current = this.head;

        if (current == null) {
            this.head = node;
            return;
        }

        while (current != null && current.next != null) {
            current = current.next;
        }
        current.next = node;
        this.size++;
    }

    getSize() {
        console.log("The length of the linkedList is : ", this.size);
    }
}

const list = new LinkedList();
list.addStart(1);
list.addStart(3);
list.addStart(5);
list.addEnd(10); // 5 3 1 10    

console.log(list.head.value);
list.getSize();