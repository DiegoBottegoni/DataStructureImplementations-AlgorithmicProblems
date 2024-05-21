function bfsShortestPath(graph, start, end) {
    const queue = [[start]]; // Start with a path containing only the starting node
    // Initialize a set to keep track of visited nodes
    const visited = new Set();
  
    // Loop as long as there are paths to explore in the queue
    while (queue.length > 0) {
      // Dequeue the first path from the queue (explore neighbors first)
      const path = queue.shift();
      // Get the last node from the current path
      const node = path[path.length - 1];
  
      // If the current node hasn't been visited yet:
      if (!visited.has(node)) {
        // Get the list of neighbors for the current node from the graph.
        const neighbors = graph[node];
        // Loop through each neighbor:
        for (let neighbor of neighbors) {
          // Create a new path by adding the neighbor to the current path.
          const newPath = [...path, neighbor];
          // Enqueue the new path for further exploration.
          queue.push(newPath);
  
          // Check if the neighbor is the end node (destination):
          if (neighbor === end) {
            // If found, return the complete path (shortest path from start to end).
            return newPath;
          }
        }
        // Mark the current node as visited to avoid revisiting it.
        visited.add(node);
      }
    }
  
    // If the loop finishes without finding the end node, return null (no path exists).
    return null;
  }
  
  module.exports = { bfsShortestPath }; // Exports the function
  