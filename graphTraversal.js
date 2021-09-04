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
