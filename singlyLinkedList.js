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
            return null
        }
        else{
            let temp = this.head
            let temp_count = 0
            while (temp_count !== index) {
                temp = temp.next
                temp_count++
            }
            return temp
        }
    }
    set(index,value)
    {
        let foundIndex = this.get(index)
        if (foundIndex) {
            foundIndex.value = value
            return true
        }
        console.log("An error occured!!!");
        return false
    }
    insert(index,val)
    {
        if (index < 0 || index > this.length) {
            console.log("Invalid Index!!")
            return false
        }
        if (index === this.length) {
            this.push(val)
            return true
        }
        if (index === 0) {
            this.unshift(val)
            return true
        }
        else{
            let tempIndex = this.get(index-1);
            if (tempIndex)
            {    let newNode = new Node(val);
                newNode.next = tempIndex.next;
                tempIndex.next = newNode;
                this.length++
                return true
            }
            else
            {
                console.log("An error Occured!!");
                return false;
            }
        }
    }
    remove(index){
        if (index > this.length || index < 0) {
            return false
        }
        if (index === this.length) {
            this.pop()
            return true
        }
        if (index ===  0) {
            this.shift()
            return true
        }
        else{
            let tempIndexLower = this.get(index-1);
            let tempIndexUpper = tempIndexLower.next
            tempIndexLower.next = tempIndexUpper.next
            this.length--
            return true
        }
    }
    reverse(){
        let node = this.head;
        this.head =this.tail;
        this.tail = node;
        let  next, prev = null;
        for (let index = 0; index < this.length; index++){
            next = node.next
            node.next = prev;
            prev = node
            node = next;
        }
        return true
    }
}

let list =  new SingleLinkedList()


list.push(10)
list.push(20)
list.push(30)
list.reverse()
list.traverse()