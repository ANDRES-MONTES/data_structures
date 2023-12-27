/*
    2 - 0
   / \
  1 - 3

*/

//Edge list: 
//representa las conexiones que existen en el grafo en arrays
const grafo = [
    [2, 0],
    [2, 3],
    [1, 2],
    [1, 3],
]


// Adjacent list
//               0      1        2        3
const grafo2 = [[2], [2, 3], [0, 1, 3], [1, 2]]

const grafo3 = {
    0: [2],
    1: [2, 3],
    2: [0, 1, 3],
    3: [1, 2],
}
/*
    2 - 0
   / \
  1 - 3

*/
// Adjacent Matrix
const grafo4 = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
]


const grafo5 = {
    0: [0, 0, 1, 0],
    1: [0, 0, 1, 1],
    2: [1, 1, 0, 1],
    3: [0, 1, 1, 0] 
}
 //-----------------------------------------------------------
class Graph{
    constructor(){
        this.length = 0
        this.adjacentList = {}
    }

    addVertex(node){
        this.adjacentList[node] = []
        this.length +=1
    }

    addEdge(node1, node2){
        this.adjacentList[node1].push(node2)
        this.adjacentList[node2].push(node1)
    }

}

const myGraph = new Graph()
myGraph.addVertex(1)
myGraph.addVertex(6)
myGraph.addVertex(3)
myGraph.addVertex(4)
myGraph.addVertex(5)
myGraph.addVertex(8)

myGraph.addEdge(1, 6)
myGraph.addEdge(1, 3)
myGraph.addEdge(1, 4)
myGraph.addEdge(6, 3)
myGraph.addEdge(3, 5)
myGraph.addEdge(4, 5)
myGraph.addEdge(4, 8)
console.log(myGraph)

















const arr = [1, 2, 3];

arr.push(4)

console.log(arr)