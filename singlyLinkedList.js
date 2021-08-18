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
            return;
        }
        else{
            let temp = this.head;
            let pre;
            while (temp.next !== null) {
                temp = temp.next
                pre = temp
            }
            this.tail = pre
            this.tail.next = null
            this.length--
            return this
        }
    }
}

let list =  new SingleLinkedList()
list.push(20)
list.push(30)
list.push(40)
list.push(50)
list.traverse()
list.pop()
list.pop()
list.pop()
list.pop()
list.pop()
list.traverse()
