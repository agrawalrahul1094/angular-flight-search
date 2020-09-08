export class Graph {
  private noOfVertices;
  private AdjList;

  // defining vertex array and adjacent list
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }

  // add vertex to the graph
  addVertex(v) {
    // initialize the adjacent list with a null array
    this.AdjList.set(v, []);
  }

  // add edge to the graph
  addEdge(src, dest, weight) {
    this.AdjList.get(src).push({ node: dest, desc: weight });
  }

  // Prints the vertex and adjacency list
  printGraph() {
    // get all the vertices
    const getKeys = this.AdjList.keys();

    // iterate over the vertices
    for (const i of getKeys) {
      // great the corresponding adjacency list
      // for the vertex
      const getValues = this.AdjList.get(i);
      let conc = "";

      // iterate over the adjacency list
      // concatenate the values into a string
      for (const j of getValues) {
        conc += j.node + ", ";
      }
      // print the vertex and its adjacency list
      console.log(i + " -> " + conc);
    }
  }

  // function to performs BFS
  bfs(startingNode) {
    // create a visited array
    const visited = [];
    const getKeys = this.AdjList.keys();
    // iterate over the vertices
    for (const i of getKeys) {
      visited[i] = false;
    }

    // Create an object for queue
    const q = new Array();

    // add the starting node to the queue
    visited[startingNode] = true;
    q.push(startingNode);

    // loop until queue is element
    while (q.length !== 0) {
      // get the element from the queue
      const getQueueElement = q.shift();

      // passing the current vertex to callback funtion
      console.log(getQueueElement);

      // get the adjacent list for current vertex
      const getList = this.AdjList.get(getQueueElement);

      // loop through the list and add the element to the
      // queue if it is not processed yet
      for (let i in getList) {
        const neigh = getList[i];

        if (!visited[neigh]) {
          visited[neigh] = true;
          q.push(neigh);
        }
      }
    }
  }

  public getAllPaths(src, dest) {
    const isVisited = [];
    const getKeys = this.AdjList.keys();

    // iterate over the vertices
    for (const i of getKeys) {
      isVisited[i] = false;
    }

    const pathList = new Array();
    // add source to path[]
    pathList.push(src);

    // Call recursive utility
    this.getAllPathsUtil(src, dest, isVisited, pathList);
  }

  private getAllPathsUtil(u, d, isVisited: boolean[], localPathList) {
    if (u === d) {
      console.log(localPathList);
      // if match found then no need to traverse more till depth
      return;
    }

    // Mark the current node
    isVisited[u] = true;
    const getList = this.AdjList.get(u);

    // Recur for all the vertices adjacent to current vertex
    for (const i of getList) {
      if (!isVisited[i['node']]) {
        // store current node in path[]
        localPathList.push(i);
        this.getAllPathsUtil(i['node'], d, isVisited, localPathList);

        // remove current node in path[]
        // const index = localPathList.indexOf(i);
        // index >= 0 && localPathList.splice(index, 1);
      }
    }

    // Mark the current node
    isVisited[u] = false;
  }

}
