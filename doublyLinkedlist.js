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
}