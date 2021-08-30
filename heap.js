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
}

let heap = new MaxBinaryHeap;
