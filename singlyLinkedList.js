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
    traverse()
    {
        let temp = this.head;
        while (temp){
            console.log(temp.value)
            temp = temp.next
        }
    }
    pop()
    {
        if (this.length <= 0) {
            console.log("List is empty!!")
            return undefined;
        }
        else{
            let temp = this.head;
            let pre = temp;
            while (temp.next) {
                pre = temp
                temp = temp.next
            }
            this.tail = pre
            this.tail.next = null
            this.length--
            if (this.length === 0) {
                this.head = null
                this.tail = null
            }
            return temp
        }
    }
    shift()
    {
        if (this.length === 0) {
            return undefined
        }
        else{
            let temp = this.head;
            this.head = temp.next;
            this.length--
            if (this.length === 0) {
                this.head = null
                this.tail = null
            }
            return temp
        }
    }
    unshift(value)
    {
        let newNode = new Node(value)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
            this.length++
            return this;
        }
        else{
            newNode.next = this.head;
            this.head = newNode
            this.length++
            return this
        }
    }
    get(index)
    {
        if (index < 0 || this.length <=0) {
            return undefined
        }
        else{
            let temp = this.head
            let temp_count = 0
            while (temp_count !== index) {
                temp = temp.next
                temp_count++
            }
            return temp.value
        }
    }
}

let list =  new SingleLinkedList()
