---
title: Graphs, DAGs and Topological Sort
description: Notes on directed graphs, cycle detection and topological sort.
summary: Directed graphs, job scheduling, DFS, topo sort. Mostly graph basics.
pubDate: 2024-10-14
---

## Job scheduling and topological sort

Introduction to Directed Graphs

- Directed graphs with no directed cycles are called directed acyclic graphs (DAGs).
- Focus on topological sort of vertices in DAGs.

Directed Graphs and Applications

- Directed graphs express ordered relationships, e.g., one-way streets and exchange rates.
- Job scheduling example: vertices represent tasks, edges represent precedence constraints.

Software Engineering Example

- Example using UTS course prerequisites to illustrate how directed graphs represent course dependencies.

Topological Order

- Topological order: an ordering of vertices such that for every directed edge u to v, u appears before v.
- Example with getting dressed: order is trousers, socks, then shoes.

Multiple Topological Orders

- Graphs can have multiple topological orders.
- Software engineering example: multiple valid orders respecting course prerequisites.

Existence of Topological Order

- A graph with a directed cycle cannot have a topological order.
- Introducing directed acyclic graphs (DAGs) which are graphs without directed cycles.

Directed vs. Undirected Graphs

- DAGs allow for dense graphs, unlike undirected acyclic graphs (forests) which are sparse.
- Example: dense DAG with edges from left to right vertices.

Topological Order and Directed Cycles

- Only DAGs can have a topological order.
- Algorithmic approach to find a topological order using depth-first search.

Algorithm to Detect Directed Cycles

- Detecting directed cycles to determine if a graph is a DAG.
- Example with Fibonacci graph showing exponential number of cycles.

## Detecting a Directed Cycle

- Directed Cycle Detection:
    
    - Using depth-first search (DFS) with a simple modification to detect cycles in directed graphs.
    - Track start and finish times of vertex exploration.
- DFS Implementation:
    
    - An on_stack​ array keeps track of vertices currently in the DFS stack.
    - An edge_to​ array records the path of exploration.
- Cycle Detection Condition:
    
    - If a vertex u is revisited while it is still on the stack, a cycle is detected (back edge).
- Cycle Output:
    
    - Use edge_to​ array to reconstruct and output the detected cycle.
- Algorithm Details:
    
    - Initialize marked​ and on_stack​ arrays to false​.
    - Traverse adjacency list, mark vertices, and check conditions for cycle detection.
- Back Edges:
    
    - Back edges indicate cycles; they go from a vertex to one of its ancestors in the DFS tree.
- Unmarked Path Property:
    
    - Ensures that if there is a path of unmarked vertices from u1 to uk, DFS visit on uk will start and finish within the start and finish of u1.
- Proof of Correctness:
    
    - Demonstrated that detecting a back edge guarantees the existence of a cycle.
    - A cycle reachable from a starting vertex will eventually lead to a back edge detection.

## Topological Sort

- Topological Sort Overview:
    
    - Topological sort arranges vertices so that for every directed edge u to v, u comes before v.
    - Applicable to job scheduling and coursework prerequisites.
    - Exists only in directed acyclic graphs (DAGs).
- DFS Modifications for Topological Sort:
    
    - Modify depth-first search (DFS) to derive topological order.
    - Use preorder (order of starting times), postorder (order of finishing times), and reverse postorder (reverse of postorder).
- Key Orders:
    
    - Preorder: Order of vertices when DFS starts visiting them.
    - Postorder: Order of vertices when DFS finishes visiting them.
    - Reverse Postorder: Reverse of postorder, used to get topological sort in a DAG.
- Reverse Postorder and Topological Sort:
    
    - In a DAG, reverse postorder of vertices gives a topological sort.
    - Ensures all edges go from left to right when vertices are placed in topological order.
- DFS Implementation Details:
    
    - Use marked​ array to track visited vertices.
    - Use on_stack​ array to detect cycles and track vertices in the current DFS path.
    - ​preorder​ and postorder​ vectors store vertices based on their DFS visit order.
- Example Walkthrough:
    
    - Example graph used to illustrate DFS traversal and vertex ordering.
    - Start and finish times of vertices recorded, demonstrating the generation of preorder, postorder, and reverse postorder.
- Proof of Correctness:
    
    - Show that if there is a directed edge from u to v, then DFS visit of u finishes after DFS visit of v.
    - Utilize the properties of DFS to ensure reverse postorder produces a valid topological sort in a DAG.
- Algorithm Complexity:
    
    - Topological sort can be found using DFS with a time complexity of O(V + E) where V is the number of vertices and E is the number of edges.
- Summary:
    
    - Algorithm to find topological sort in any DAG using DFS.
    - Graph has a topological sort if and only if it is a DAG.
    - Reverse postorder of DFS provides the topological order.

## Finding Shortest Paths in a DAG

- Single-Source Shortest Path in DAGs:
    
    - Solving the single-source shortest path problem in a directed acyclic graph (DAG) is straightforward.
    - Negative weights are allowed since there are no cycles in a DAG.
- Algorithm Overview:
    
    - Compute a topological sort of the graph.
    - Iterate over the vertices in topologically sorted order.
    - Relax all outgoing edges of each vertex in this order.
- Topological Sort:
    
    - An ordering of vertices where for every directed edge u to v, u comes before v.
    - When vertices are placed in topological order on a horizontal line, all edges go from left to right.
    - Example: Topological sort for a graph can be 0, 5, 4, 2, 3, 1.
- Relaxation Process:
    
    - Process each vertex by relaxing its outgoing edges.
    - This ensures shortest path calculations are updated in the correct order.
- Algorithm Efficiency:
    
    - Topological sort can be computed using depth-first search (DFS) in O(V + E) time, where V is the number of vertices and E is the number of edges.
    - Relaxing an edge takes constant time.
    - Each edge is relaxed exactly once, making the overall running time O(V + E) in the adjacency list model.
- Why the Algorithm Works:
    
    - Shortest path from vertex 0 to vertex v will have vertices ordered in topological sort as 0 < u1 < u2 < ... < v.
    - Relaxing edges in topological order ensures all edges along the shortest path are processed in sequence.
    - By the end of the algorithm, the shortest path from the source to any vertex can be traced back using the edge_to​ array.

## Minimum spanning trees and Prim's algorithm

1. Spanning Tree: Subgraph that connects all vertices without cycles.
    
2. Minimum Spanning Tree: Spanning tree with the smallest possible total edge weight.
    
3. Prim's Algorithm:
    
    - Start from an arbitrary vertex.
    - Add minimum weight edge connecting the tree to a new vertex.
    - Use a priority queue to manage edges.
4. Algorithm Steps:
    
    - Initialize with one vertex.
    - Expand the tree by adding the minimum weight edge from the priority queue.
5. Running Time: O(Elog⁡E)O(E \log E)O(ElogE) due to priority queue operations.
    
6. Key Property: A spanning tree must contain the minimum weight edge from every cut.
    

## Kruskal's algorithm

- Conceptual Overview:
    
    - Kruskal's Algorithm maintains a forest of trees.
    - Begins with each vertex as a separate tree and merges trees by adding the smallest edge, ensuring no cycles are formed.
    - The invariant is that all edges in the forest are part of the minimum spanning tree (MST).
- Initialization:
    
    - Partition Vertices: Start with each vertex in its own set.
    - Set of Edges (A): Initialize as empty.
- Processing Edges:
    
    - Sort Edges: Process edges in ascending order of weight.
        
    - Edge Consideration: For each edge, check if it connects two different sets.
        
        - If it does, add the edge to set A and merge the sets.
        - If it does not (i.e., both endpoints are in the same set), skip the edge to avoid cycles.
- Maintaining Invariants:
    
    - Ensure each step maintains the forest where each edge added is part of the MST.
    - Use Fact 2: A minimum spanning tree must contain the minimum weight edge from every cut.
- Algorithm Steps:
    
    - Start: Initialize n sets for n vertices.
    - Iterate Edges: Process each edge in sorted order.
    - Merge Sets: If edge connects different sets, merge them and add the edge to A.
    - Continue: Repeat until there is only one set containing all vertices.
- Example Execution:
    
    - Round 1: Add the smallest edge, merge sets containing its vertices.
    - Round 2: Add the next smallest edge, merge sets, and so on.
    - Skipping Edges: If adding an edge would form a cycle, it is skipped.
- Proof of Correctness:
    
    - Invariant Maintenance: Each edge added must be the smallest edge connecting two different sets.
    - Termination: The algorithm terminates with one set containing all vertices, ensuring all edges in A form the MST.
    - Connected Graph Assumption: If the algorithm ends with more than one set, the graph wasn't connected, contradicting our initial assumption.
- Comparison with Prim's Algorithm:
    
    - Prim's Algorithm grows a single tree by adding the smallest edge connecting the tree to a new vertex.
    - Kruskal's Algorithm maintains a forest and adds the smallest edge connecting two different trees.
- Efficiency:
    
    - Sorting edges takes O(Elog⁡E)O(E \log E)O(ElogE).
    - Union-find data structure optimizes the merging and checking of sets.
    - Overall running time: O(Elog⁡E)O(E \log E)O(ElogE), efficient for sparse graphs.

- Conceptual Overview:
    
    - Kruskal's Algorithm maintains a forest of trees.
    - Begins with each vertex as a separate tree and merges trees by adding the smallest edge, ensuring no cycles are formed.
    - The invariant is that all edges in the forest are part of the minimum spanning tree (MST).
- Initialization:
    
    - Partition Vertices: Start with each vertex in its own set.
    - Set of Edges (A): Initialize as empty.
- Processing Edges:
    
    - Sort Edges: Process edges in ascending order of weight.
        
    - Edge Consideration: For each edge, check if it connects two different sets.
        
        - If it does, add the edge to set A and merge the sets.
        - If it does not (i.e., both endpoints are in the same set), skip the edge to avoid cycles.
- Maintaining Invariants:
    
    - Ensure each step maintains the forest where each edge added is part of the MST.
    - Use Fact 2: A minimum spanning tree must contain the minimum weight edge from every cut.
- Algorithm Steps:
    
    - Start: Initialize n sets for n vertices.
    - Iterate Edges: Process each edge in sorted order.
    - Merge Sets: If edge connects different sets, merge them and add the edge to A.
    - Continue: Repeat until there is only one set containing all vertices.
- Example Execution:
    
    - Round 1: Add the smallest edge, merge sets containing its vertices.
    - Round 2: Add the next smallest edge, merge sets, and so on.
    - Skipping Edges: If adding an edge would form a cycle, it is skipped.
- Proof of Correctness:
    
    - Invariant Maintenance: Each edge added must be the smallest edge connecting two different sets.
    - Termination: The algorithm terminates with one set containing all vertices, ensuring all edges in A form the MST.
    - Connected Graph Assumption: If the algorithm ends with more than one set, the graph wasn't connected, contradicting our initial assumption.
- Comparison with Prim's Algorithm:
    
    - Prim's Algorithm grows a single tree by adding the smallest edge connecting the tree to a new vertex.
    - Kruskal's Algorithm maintains a forest and adds the smallest edge connecting two different trees.
- Efficiency:
    
    - Sorting edges takes O(Elog⁡E)O(E \log E)O(ElogE).
    - Union-find data structure optimizes the merging and checking of sets.
    - Overall running time: O(Elog⁡E)O(E \log E)O(ElogE), efficient for sparse graphs.
