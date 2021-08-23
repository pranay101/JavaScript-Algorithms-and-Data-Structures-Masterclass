// ---------------------------------------Introduction----------------------------------------------------
// stack follows LIFO i.e. last in first out
// used in : Managin function invocation, redo-undo, Routing(history objects) is treated like stack



// ---------------------------------------Base Code------------------------------------------------------
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class stack{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }
    pop()
    {
        if (this.size === 0) {
            return undefined
        }
        else{
            let temp = this.first;
            this.first = temp.next;
            this.size--
            if (this.size === 0) {
                this.first = null
                this.last = null
            }
            return temp.value
        }
    }
    push(value)
    {
        let newNode = new Node(value)
        if (this.size === 0) {
            this.first = newNode
            this.last = newNode
            this.size++
            return this;
        }
        else{
            newNode.next = this.first;
            this.first = newNode
            this.size++
            return this
        }
    }
}


var Stack = new stack
Stack.push(10)
Stack.push(20)
Stack.push(30)
console.log(Stack);
Stack.pop()
Stack.pop()
Stack.pop()
console.log(Stack);



// ---------------------------------------Recap------------------------------------------------------
// time complexity
// insertion - O(1)
// removal - O(1)
// Access - O(N)
// searching - O(N)