// ---------------------------------------Introduction----------------------------------------------------
// Linked list dont have any indexes.
// connected via nodes with a next pointer
// random access of elements is not allowed
// need to keep track of head -> first_element, tail -> the_last_element and length -> length of the list
// doubly linked list allows us to access elements from both direction






// ---------------------------------------Base Code------------------------------------------------------
class Node{
    constructor(value){
        this.value = value;
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
        if(!this.head) {
            console.log("Empty List!!");
            return undefined}
        let temp = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else{
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return temp;
    }
    traverse(){
        if (!this.head) {
            console.log("Empty list!!")
        }
        else{
            let temp = this.head
            for (let i = 0; i < this.length; i++){
                console.log(temp.value);
                temp = temp.next;
            }
        }
    }
    shift(){
        if (!this.length === 0) {
            console.log("Empty list!!");
            return undefined
        }
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null
        }
        else{
            this.head = this.head.next;
            this.prev = null
            oldHead.nex = null
        }
        this.length--
        return oldHead;
    }
    unshift(value){
        let newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else
        {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++
        return this
    }
    get(index){
        if (index >= this.length || index < 0) {
            console.log("Invaild index!")
            return undefined
        }
        if (index > this.length/2) {
            let temp = this.tail;
            let i = this.length;
            while(true && i >= this.length/2)
            {
                if (i === index) {
                    return temp
                }
                i-- 
                temp = temp.prev;
            }
        }
        else{
            let temp = this.head;
            let i = 0
            while(i <= this.length/2)
            {
                if (i === index) {
                    return temp
                }
                i++
                temp = temp.next;
            }
        }
    }
    set(index,value){
        let temp = this.get(index)
        if (temp !== null) {
            temp.value = value
            return true
        }
        return false;
    }
    insert(index,value){
        if (index > this.length || index < 0) {
            return false
        }
        if (index === this.length) {
            this.push(value)
            return true
        }
        if (index === 0) {
            this.unshift(value)
            return true
        }
        else{
            let temp = this.get(index-1)
            let newNode = new Node(value);
            let nextNode = temp.next;
            temp.next = newNode;
            newNode.prev = temp;
            newNode.next = nextNode;
            nextNode.prev = newNode
            this.length++
            return true
        }
    }
    remove(index)
    {
        if (index > this.length || index < 0) {
            return false
        }
        if (index === this.length) {
            this.pop()
            return true
        }
        if (index === 0) {
            this.shift()
            return true
        }
        else
        {
            let temp = this.get(index);
            temp.prev.next = temp.next;
            temp.next.prev = temp.prev;
            temp.next = null;
            temp.prev = null;
            this.length--
            return temp;
        }
    }
}
let list =  new doublyLinkedlist



// --------------------------------------------Recap------------------------------------------------------
// doubly linked list are almost identical to singly linked list except there is an additional pointer to previous Node.
// better than singly linked list for finding nodes and can be done in half the time!
// however, they do take up more memory considering the extra pointer