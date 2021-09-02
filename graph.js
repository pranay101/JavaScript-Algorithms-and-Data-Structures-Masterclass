// ---------------------------------------Introduction----------------------------------------------------

// 1. directed graph
// 2. undirected graph
// 3. unweighted directed graph
// 4. weighted directed graph
// 

// Two ways to implemet graph
// 1. adjacency List 
// 2. Adjecency Matrix
// 

// Adjacency List
// Takes up more space (in sparse graphs)
// Slower to iterate over all edges
// Faster to lookup specific edge


// Adjacency Matrix
// Can take up less space (in sparse graphs)
// Faster to iterate over all edges
// Can be slower to lookup specific edge


// DIFFERENCES & BIG O

// OPERATION	ADJACENCY LIST	ADJACENCY MATRIX
// Add Vertex	    O(1)	        ​O(|V^2|)
// Add Edge	        O(1)	        O(1)
// Remove Vertex	O(|V| + |E|)	​O(|V^2|)
// Remove Edge  	O(|E|)	        O(1)
// Query	        O(|V| + |E|)	O(1)
// Storage      	O(|V| + |E|)	​O(|V^2|)
// 
// 


// ---------------------------------------Base Code------------------------------------------------------
class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(value){
        if ( !this.adjacencyList[value])
            this.adjacencyList[value] = [];
    
        return this 
    }
    addEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
        return this
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].pop(vertex2)
        this.adjacencyList[vertex2].pop(vertex1)
        return this
    }
    removeVertex(Vertex){
        this.adjacencyList.forEach(element => {
            element.pop(Vertex)
        });
        delete this.adjacencyList[vertex]
        return this
    }
}

let g = new Graph;

console.log(g.addVertex("Tokoyo"));
console.log(g.addVertex("Newyork"));
console.log(g.addVertex("London"));
console.log(g.addVertex("Delhi"));
console.log(g.addVertex("Paris"));
console.log(g.addVertex("Barcelona"));

console.log(g.addEdge("Tokoyo","Newyork"));
console.log(g.addEdge("Delhi","Tokoyo"));
console.log(g.addEdge("Paris","Barcelona"));
console.log(g.addEdge("Paris","Tokoyo"));
console.log(g.addEdge("Delhi","Tokoyo"));
console.log(g.addEdge("Delhi","Paris"));

console.log(g.removeVertex("Tokoyo"));