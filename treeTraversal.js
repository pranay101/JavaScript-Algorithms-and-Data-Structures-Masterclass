// ---------------------------------------Introduction----------------------------------------------------
// there are two ways to traverse a tree. 1. breadth first search 2. Depth first search.
// three ways to perform DFS(depth first search) 1. in-order 2. pre-order 3. post-order.




// ---------------------------------------Base Code--------------------------------------------------------
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
    addvalues(){
        let data = [10,6,15,3,8,20];
        data.forEach(element => {
            this.insert(element)
        });
    }
    BFS(){
        var queue = [], 
            visited = [],
            currentNode = this.root;
        queue.push(currentNode);
        while (queue.length){
            currentNode = queue.shift();
            visited.push(currentNode.value)
            if (currentNode.left)
                queue.push( currentNode.left)
            if (currentNode.right)
                queue.push(currentNode.right) 
        }
        return visited;
    }
    DFSPreOrder(){
        let data = [];
        let currentNode = this.root;
        function traverse(node) {
            data.push(node.value)
            if (node.left) {
                traverse(node.left)
            }
            if (node.right) {
                traverse(node.right)
            }
            return
        }
        traverse(currentNode)
        return data;
    }
// output : [ 10, 6, 3, 8, 15, 20 ]

    DFSPostOrder(){
        let data = [];
        let currentNode = this.root;
        function traverse(node) {
            if (node.left) {
                traverse(node.left)
            }
            if (node.right) {
                traverse(node.right)
            }
            data.push(node.value)
        }
        traverse(currentNode)
        return data;
    }
// output : [ 3, 8, 6, 20, 15, 10 ]


    DFSInOrder(){
        let data = [];
        let currentNode = this.root;
        function traverse(node) {
            if (node.left) {
                traverse(node.left)
            }
            data.push(node.value)
            if (node.right) {
                traverse(node.right)
            }
        }
        traverse(currentNode)
        return data;
    }
// output : [ 3, 6, 8, 10, 15, 20 ]
}

const tree = new BinarySearchTree();
