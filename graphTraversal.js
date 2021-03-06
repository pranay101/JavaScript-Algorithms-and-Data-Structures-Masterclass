// ---------------------------------------Introduction----------------------------------------------------

// traversing a graph can be done in 2 ways:
// DFS(Recursive and itetratively ), BFS


// ---------------------------------------Base Code------------------------------------------------------
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(value) {
        if (!this.adjacencyList[value])
            this.adjacencyList[value] = [];

        return this
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
        return this
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
        return this
    }
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
        return this
    }
    DFSRecursive(start) {
        var resultArray = [];
        var visitedNode = {};
        const adjacencyList = this.adjacencyList;
        function DFS(vertex) {
            if (!vertex) {
                return null
            }
            resultArray.push(vertex)
            visitedNode[vertex] =  true
            adjacencyList[vertex].forEach(element => {
                if (!visitedNode[element]) {
                    DFS(element);
                }
            });
        }
        DFS(start)
        return resultArray;
    }

    DFSIterative(start){
        var stack = []
        var resultArray = [];
        var visitedNode = {};
        stack.push(start)
        visitedNode[start] = true;
        while(stack.length) {
            let vertex = stack.pop();
            resultArray.push(vertex);
            this.adjacencyList[vertex].forEach(element => {
                if(!visitedNode[element]){
                    visitedNode[element] = true;
                    stack.push(element);      
                }
                
            });
            
        }
        return resultArray
    }
    BFSIterative(start){
        var queue = [start];
        var resultArray = [];
        var visitedNode = {};
        let currentVertex;
        visitedNode[start] = true;
        while (queue.length) {
            currentVertex = queue.shift();
            resultArray.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(element => {
                if(!visitedNode[element]){
                    visitedNode[element] = true;
                    queue.push(element); 
                }
            })
        }
        return resultArray;


    }
}

let g = new Graph;

console.log(g.addVertex("A"));
console.log(g.addVertex("B"));
console.log(g.addVertex("C"));
console.log(g.addVertex("D"));
console.log(g.addVertex("E"));
console.log(g.addVertex("F"));


console.log(g.addEdge("A", "B"));
console.log(g.addEdge("A", "C"));
console.log(g.addEdge("D", "B"));
console.log(g.addEdge("C", "E"));
console.log(g.addEdge("D", "E"));
console.log(g.addEdge("D", "F"));
console.log(g.addEdge("E", "F"));

console.log(g.DFSRecursive("A"));
console.log(g.DFSIterative("A"));
console.log(g.BFSIterative("A"));
