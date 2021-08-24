// ---------------------------------------Introduction----------------------------------------------------
// stack follows FIFO i.e. first in first out
// used in : Background tasks, Uploading resources, printing and task processing



// ---------------------------------------Base Code------------------------------------------------------
class Node{
    constructor(value){
    this.value = value;
    this.next = null;
    }
}
class Queue{
    constructor(){
        this.start = null
        this.end = null
        this.length = 0
    }
    Enqueue(value){
        let newNode = new Node(value)
        if (this.start === null ) {
            this.start = newNode;
            this.end = newNode        
        }
        else{
            this.end.next = newNode;
            this.end = newNode;
        }
        return this.length++;

    }
    Dequeue(){
        if (!this.start){
            console.log("empty queue!!");
            return false
        }
        if (this.start === this.end) {
            this.end = null
        }
        let temp = this.start;
        this.start = this.start.next;
        temp.next = null
        this.length --
        return temp.value
    }
}

let q=  new Queue