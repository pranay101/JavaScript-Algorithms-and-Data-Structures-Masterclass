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
