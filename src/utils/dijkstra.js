const { PriorityQueue } = require('../models/PriorityQueue.js'); // Import class

function dijkstra(graph, start, end) {
  // Initialize objects to store distances, priority queue, previous nodes, path, and smallest node
  const distances = {}; // Stores distances from the start node to each vertex
  const pq = new PriorityQueue(); // Priority queue to efficiently prioritize vertices
  const previous = {}; // Stores the previous node in the shortest path for each vertex
  let path = []; // Array to store the shortest path nodes (reconstructed later)
  let smallest; // Stores the vertex with the minimum tentative distance at each iteration

  // Initialize distances and priority queue for all vertices in the graph
  for (let vertex in graph) {
    if (vertex === start) {
      // Set distance to 0 for the starting node
      distances[vertex] = 0;
      // Enqueue the starting node with priority 0 (highest priority)
      pq.enqueue(vertex, 0);
    } else {
      // Set initial distance to infinity for other vertices (unknown)
      distances[vertex] = Infinity;
      // Enqueue other vertices with priority Infinity (initially low priority)
      pq.enqueue(vertex, Infinity);
    }
    // Initialize 'previous' to null for all vertices (no previous node known yet)
    previous[vertex] = null;
  }

  // Dijkstra's algorithm main loop:
  while (pq.values.length) {
    // Dequeue the vertex with the minimum tentative distance (highest priority)
    smallest = pq.dequeue().val;

    // If the destination node is found, reconstruct the shortest path
    if (smallest === end) {
      // Traverse backward from the end node using the 'previous' object
      while (previous[smallest]) {
        // Prepend each previous node to the path array
        path.push(smallest);
        // Move to the previous node in the shortest path
        smallest = previous[smallest];
      }
      // Break out of the loop once the path is reconstructed
      break;
    }

    // Relaxation step for neighbors if the current vertex has a finite distance
    if (smallest && distances[smallest] !== Infinity) {
      // Iterate through the neighbors of the current vertex
      for (let neighbor in graph[smallest]) {
        let nextNode = graph[smallest][neighbor]; // Weight of the edge to the neighbor
        // Calculate the tentative distance to the neighbor
        let candidate = distances[smallest] + nextNode;
        let nextNeighbor = neighbor; // Neighbor vertex

        // If the tentative distance is less than the current distance for the neighbor:
        if (candidate < distances[nextNeighbor]) {
          // Update the distance of the neighbor in the 'distances' object
          distances[nextNeighbor] = candidate;
          // Update the previous node for the neighbor in the 'previous' object
          previous[nextNeighbor] = smallest;
          // Re-enqueue the neighbor in the priority queue with the updated distance (potentially higher priority now)
          pq.enqueue(nextNeighbor, candidate);
        }
      }
    }
  }

  // Return the shortest path in reversed order (start node first)
  return path.concat(smallest).reverse();
}

module.exports = { dijkstra }; // Exports the function
