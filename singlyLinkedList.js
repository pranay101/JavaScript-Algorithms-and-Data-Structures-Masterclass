// ---------------------------------------Introduction----------------------------------------------------
// Linked list dont have any indexes.
// connected via nodes with a next pointer
// random access of elements is not allowed
// need to keep track of head -> first_element, tail -> the_last_element and length -> length of the list







// ---------------------------------------Base Code------------------------------------------------------
class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}



class SingleLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(data)
    {
        let newNode = new Node(data)
        if(!this.head)
        {
            this.head = newNode;
            this.tail = this.head
        }
        else
        {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++;
        return this
    }
}

let list =  new SingleLinkedList()
list.push(20)
list.push(30)
console.log(list.head);
console.log(list.tail);