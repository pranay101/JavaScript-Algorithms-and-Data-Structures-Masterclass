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
            if (condition) {
                
            }
        }
    }
}

const tree = new BinarySearchTree();
