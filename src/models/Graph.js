class Graph {
    constructor() {
        this.adjList = new Map();
    }

    // Add a vertex to the graph
    addVertex(vertex) {
        // Checks if the vertex already exists. If not, create a new entry in the adjacency list with an empty array for neighbors
        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex, []);
        }
    }

    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
        // Checks if both vertices exist. If they exist, add vertex2 as a neighbor of vertex1 and vice versa
        if (this.adjList.has(vertex1) && this.adjList.has(vertex2)) {
            this.adjList.get(vertex1).push(vertex2);
            this.adjList.get(vertex2).push(vertex1);
        }
    }

    // Perform a Depth-First Search (DFS) starting from a given vertex
    dfs(start) {
        // Creates a set to keep track of visited vertices
        const visited = new Set();
        // Calls the helper function to perform the actual DFS traversal
        this._dfsHelper(start, visited);
    }

    // Helper function for DFS that recursively visits vertices
    _dfsHelper(vertex, visited) {
        // If the vertex hasn't been visited yet
        if (!visited.has(vertex)) {
            // Mark the vertex as visited
            visited.add(vertex);
            // Log the vertex
            console.log(vertex);
            // Get the list of neighbors of the current vertex
            const neighbors = this.adjList.get(vertex);
            // Recursively explore each unvisited neighbor
            for (const neighbor of neighbors) {
                this._dfsHelper(neighbor, visited);
            }
        }
    }

    // Perform a Breadth-First Search (BFS) starting from a given vertex
    bfs(start) {
        const visited = new Set();
        // Creates a queue to store vertices to be explored in BFS order
        const queue = [start];
        // Marks the starting vertex as visited
        visited.add(start);

        // While the queue is not empty:
        while (queue.length > 0) {
            // Dequeue a vertex from the queue (vertex to be explored)
            const vertex = queue.shift();
            // Log the vertex
            console.log(vertex);
            // Get the list of neighbors of the current vertex
            const neighbors = this.adjList.get(vertex);
            // Explore each unvisited neighbor
            for (const neighbor of neighbors) {
                // If the neighbor hasn't been visited yet
                if (!visited.has(neighbor)) {
                    // Mark the neighbor as visited
                    visited.add(neighbor);
                    // Enqueue the neighbor for later exploration
                    queue.push(neighbor);
                }
            }
        }
    }
}

module.exports = { Graph }; // Exports the class