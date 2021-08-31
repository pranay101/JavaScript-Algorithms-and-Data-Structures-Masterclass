// ---------------------------------------Introduction----------------------------------------------------

// WHAT IS A PRIORITY QUEUE?
// A data structure where each element has a priority. Elements with higher priorities are served 
// before elements with lower priorities


// OUR PRIORITY QUEUE:

// Write a Min Binary Heap - lower number means higher priority.
// Each Node has a val and a priority.  Use the priority to build the heap.

// Enqueue method accepts a value and priority, makes a new node, and puts it in 
// the right spot based off of its priority.

// Dequeue method removes root element, returns it, and rearranges heap using priority.

// ---------------------------------------Base Code----------------------------------------------------
class Node{
    constructor(value,priority) {
        this.value = value;
        this.priority = priority;
    }
}

class priorityQueue{
    constructor() {
        this.values = []
    }
    Enqueue(value,priority){
        let newNode = new Node(value);
        newNode.priority = this.values.length+1;
        this.values.push(newNode);
        this.bubbleUp();
        return this;
    }
    bubbleUp(){
        let elementIndex = this.values.length-1;
        let parentIndex;
        while (elementIndex > 0) {
            parentIndex = Math.floor((elementIndex-1)/2);
            if (this.values[parentIndex].priority > this.values[parentIndex].priority ) {
                [this.values[elementIndex],this.values[parentIndex]] = [this.values[parentIndex],this.values[elementIndex]]
                elementIndex = parentIndex 
            }
            else
            break;
        }

    }
    // Dequeue(){

    // }
}

let pq = new priorityQueue();
console.log(pq.Enqueue(105,5))
console.log(pq.Enqueue(15,2))
console.log(pq.Enqueue(10335,1))
console.log(pq.Enqueue(1485,8))
console.log(pq.Enqueue(144,0))