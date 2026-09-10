// breadth first search for graph 

class Graph{
  constructor(){
    this.adjacencyList = {}
  }

  addVertex(vertex){
    if(!this.adjacencyList[vertex]){
      this.adjacencyList[vertex] = []
    }
  }

  addEdge(v1,v2){
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v1].push(v1);
  }

  bfs(startNode){
    const queue = [startNode]

    const visited = {};
    const result = [];

    //makr the starting node as visited
    visited[startNode] = true;

    while(queue.length > 0 ){
      // remove the first element from the queue
      const currentNode = queue.shift();
      result.push(currentNode);
      const adj = this.adjacencyList[currentNode];
      for( const neighbor of adj){
        if(!visited[neighbor]){
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }

    return result;
  }
}

// -- usage example 

const g = new Graph(); 

// Adding vertices
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");

// Adding edges
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");

console.log(g.bfs("A")); 
// Output: [ 'A', 'B', 'C', 'D', 'E' ]
