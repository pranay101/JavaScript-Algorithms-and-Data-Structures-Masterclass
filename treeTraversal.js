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
}

const tree = new BinarySearchTree();
tree.addvalues()
