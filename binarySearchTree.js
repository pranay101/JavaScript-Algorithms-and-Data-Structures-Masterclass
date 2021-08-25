// ---------------------------------------Introduction----------------------------------------------------
// Objective:
// Define what is tree?
// Compare and Contrast trees and lists
// Explin the diffrence between trees, binary tree and binary search tree?
// Implemented opration on BST
// 


// Parts of a tree
// root: top-most node
// Child: A node directly connected to another node when moving away from the root 
// parent: the converse notion of a child
// Siblings: Group nodes with same parents
// Leaf: node with no childern
// Edge: The connection between two nodes

// Uses:
// HTML DOM
// Network Routing
// Abstract syntax tree
// artificial intelligence(decision tree)
// Folders in Operating system
// Computer file system

// How binary search tree works:
// Every parent node has at most 2 nodes
// Every node on the left of the parent node is always less than the parent.
// Every node on the Rigth of the parent node is always greator than the parent.


// ---------------------------------------Base Code------------------------------------------------------
class  Node{
    constructor(value)
    {
        this.value = value;
        this.left = null;
        this.right = null;
        this.frequency = 0
    }
}
class BinarySearchTree{
    constructor() {
        this.root = null
    }
    insert(value){
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this
        }
        else{
            let temp = this.root;
            while (true) {
                if (value === temp.value) {
                    temp.frequency++;
                    return this
                }
                if (value > temp.value) {
                    if (!temp.right) {
                        temp.right = newNode;
                        return this
                    }
                    else{
                        temp = temp.right;
                    }
                }   

                if (value < temp.value) {
                    if (!temp.left) {
                        temp.left = newNode;
                        return this
                    }
                    else{
                        temp = temp.left;
                    }
                }   
            }
        }
    }
    find(value){
        if (!this.root) {
            console.log("Empty tree!!");
            return undefined;
        }
        else if(this.root.value === value){
            console.log("Found value!!");
            return true
        }
        else{
            if (value > this.root.value)
                var temp = this.root.right
            else
                var temp =  this.root.left
           
            while (temp !== null) {
                if (temp.value === value) {
                    return true
                }
                else if(temp.value > value)
                    temp = temp.left
                else
                    temp  = temp.right
            }
            return false
        }
    }
}

const tree = new BinarySearchTree();
