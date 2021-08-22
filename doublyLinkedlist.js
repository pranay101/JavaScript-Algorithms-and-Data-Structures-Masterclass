// ---------------------------------------Introduction----------------------------------------------------
// Linked list dont have any indexes.
// connected via nodes with a next pointer
// random access of elements is not allowed
// need to keep track of head -> first_element, tail -> the_last_element and length -> length of the list
// doubly linked list allows us to access elements from both direction






// ---------------------------------------Base Code------------------------------------------------------
class Node{
    constructor(value){
        this.val = value;
        this.next = null;
        this.prev = null;
    }
}

class doublyLinkedlist{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(data){
        let newNode = new Node(data);
        if (this.length === 0 ) {
            this.head = newNode;
            this.tail = newNode
        }
        else{
            this.tail.next = newNode;
            newNode.prev = this.tail
            this.tail = newNode;;
        }
        this.length++
        return this
    }
    pop()
    {
        if(!this.head) return undefined
        let temp = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.length--;
        return temp;
    }
    traverse(){
        if (!this.head) {
            console.log("Empty list!!")
        }
        else{
            let temp = this.head
            while (temp){
                console.log(temp.value);
                temp = temp.next;
            }
        }
    }
}
let list =  new doublyLinkedlist

list.push(10)
list.push(20)
list.push(30)
console.log(list)
list.pop()
console.log(list)