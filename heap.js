// ---------------------------------------Introduction----------------------------------------------------

// OBJECTIVES
// Define what a binary heap is
// Compare and contrast min and max heaps
// Implement basic methods on heaps
// Understand where heaps are used in the real world and what other data structures can 
// be constructed from heaps.


// WHAT IS A BINARY HEAP?
// Very similar to a binary search tree, but with some different rules!
// In a MaxBinaryHeap, parent nodes are always larger than child nodes. 
// In a MinBinaryHeap, parent nodes are always smaller than child nodes

// Find child in a bianry heap
// childern of element at index n is locatated at 2n+1(left child) 2n+2(right child)

// difference between binary seach tree and binary heap is about the order.


// ---------------------------------------Base Code------------------------------------------------------
class MaxBinaryHeap{
    constructor() {
        this.values = [];
    }
    insert(value){
        this.values.push(value);
        this.bubbleUp()
        return this
    }
    bubbleUp(){
        let index = this.values.length - 1;
        let swapIndex;
        while(index > 0){
            swapIndex = Math.floor((index-1)/2); 
            if(this.values[index] > this.values[swapIndex])
            {
                console.log("swap");
                [this.values[index],this.values[swapIndex]] = [this.values[swapIndex],this.values[index]] 
                index = swapIndex;
            }
            else 
                break;
        }
    }
    extractMax(){
        let head = 0
        let deletedNode = this.values[head];
        let end = this.values.pop()
        if (this.values.length > 0) {
            [this.values[head],end] = [end,this.values[head]]
            this.bubbleDown()
        }
        return deletedNode
    }
    bubbleDown(){
        let parentIndex = 0;
        let leftIndex = parentIndex,rightIndex=parentIndex;
        while (true) {
            leftIndex = parentIndex*2 + 1
            rightIndex = parentIndex*2 + 2
            let swap = null;
            if (leftIndex < this.values.length) {
                if (this.values[leftIndex]> this.values[parentIndex]){
                    swap = leftIndex
                }
            }
            if (rightIndex < this.values.length) {
                if ( 
                    swap === null && this.values[rightIndex]> this.values[parentIndex] ||
                    swap !== null && this.values[rightIndex]> this.values[leftIndex] 
                    ) {
                    swap = rightIndex
                }
            } 
            if (swap === null) {
                break
            }
            let temp = this.values[parentIndex] 
            this.values[parentIndex] = this.values[swap]
            this.values[swap] = temp
            parentIndex = swap;
        }
    }
}

let heap = new MaxBinaryHeap;
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log((heap.extractMax()))
console.log((heap.extractMax()))
