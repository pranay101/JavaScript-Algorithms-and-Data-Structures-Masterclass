// ---------------------------------------Introduction----------------------------------------------------

// Shortest Path Algorithm

// ---------------------------------------Base Code------------------------------------------------------
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(value) {
    if (!this.adjacencyList[value]) this.adjacencyList[value] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  dijkstrasAlgorithm(startingPoint, Destination) {
    let node = new priorityQueue();
    let distances = {};
    let previous = {};
    let path = [];
    let nodeDequeue;
    for (let element in this.adjacencyList) {
      if (element === startingPoint) {
        distances[element] = 0;
        node.enqueue(element, 0);
      } else {
        distances[element] = Infinity;
        node.enqueue(element, Infinity);
      }
      previous[element] = null;
    }
    while (node.values.length) {
      nodeDequeue = node.dequeue().value;
      if (nodeDequeue === Destination) {
        while (previous[nodeDequeue]) {
            path.push(nodeDequeue);
            nodeDequeue = previous[nodeDequeue];
        }
        break;
      }
      if (nodeDequeue || distances[nodeDequeue] !== Infinity) {
        for (const neighbor in this.adjacencyList[nodeDequeue]) {
          let nextNode = this.adjacencyList[nodeDequeue][neighbor];
          let candidate = nextNode.weight + distances[nodeDequeue];
          if (candidate < distances[nextNode.node]) {
           distances[nextNode.node] = candidate;
           previous[nextNode.node] = nodeDequeue;
           node.enqueue(nextNode.node,candidate)
          }
        }
      }
    }
    return path.concat(nodeDequeue).reverse()
  }
}

class priorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    this.values.push({ value, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);


console.log(graph.dijkstrasAlgorithm("A", "E") )