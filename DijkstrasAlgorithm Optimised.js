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
    let node = new PriorityQueue();
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
            node.enqueue(nextNode.node, candidate);
          }
        }
      }
    }
    return path.concat(nodeDequeue).reverse();
  }
}
class PriorityQueue {
  constructor(){
      this.values = [];
  }
  enqueue(val, priority){
      let newNode = new Node(val, priority);
      this.values.push(newNode);
      this.bubbleUp();
  }
  bubbleUp(){
      let idx = this.values.length - 1;
      const element = this.values[idx];
      while(idx > 0){
          let parentIdx = Math.floor((idx - 1)/2);
          let parent = this.values[parentIdx];
          if(element.priority >= parent.priority) break;
          this.values[parentIdx] = element;
          this.values[idx] = parent;
          idx = parentIdx;
      }
  }
  dequeue(){
      const min = this.values[0];
      const end = this.values.pop();
      if(this.values.length > 0){
          this.values[0] = end;
          this.sinkDown();
      }
      return min;
  }
  sinkDown(){
      let idx = 0;
      const length = this.values.length;
      const element = this.values[0];
      while(true){
          let leftChildIdx = 2 * idx + 1;
          let rightChildIdx = 2 * idx + 2;
          let leftChild,rightChild;
          let swap = null;

          if(leftChildIdx < length){
              leftChild = this.values[leftChildIdx];
              if(leftChild.priority < element.priority) {
                  swap = leftChildIdx;
              }
          }
          if(rightChildIdx < length){
              rightChild = this.values[rightChildIdx];
              if(
                  (swap === null && rightChild.priority < element.priority) || 
                  (swap !== null && rightChild.priority < leftChild.priority)
              ) {
                 swap = rightChildIdx;
              }
          }
          if(swap === null) break;
          this.values[idx] = this.values[swap];
          this.values[swap] = element;
          idx = swap;
      }
  }
}

class Node {
  constructor(val, priority){
      this.val = val;
      this.priority = priority;
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

console.log(graph.dijkstrasAlgorithm("A", "E"));
