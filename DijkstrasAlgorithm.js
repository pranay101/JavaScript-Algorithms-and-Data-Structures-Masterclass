// ---------------------------------------Introduction----------------------------------------------------

// Shortest Path Algorithm

// ---------------------------------------Base Code------------------------------------------------------
class weightedGraph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(value) {
        if (!this.adjacencyList[value])
            this.adjacencyList[value] = [];
    } 
    addEdge(vertex1,vertex2,weight) {
        this.adjacencyList[vertex1].push({node:vertex2,weight})
        this.adjacencyList[vertex2].push({node:vertex1,weight})
    }
}
 
let graph = new weightedGraph;
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.addEdge("B","C",10)
graph.addEdge("A","C",11)
graph.addEdge("B","A",12)

console.log(graph.adjacencyList)