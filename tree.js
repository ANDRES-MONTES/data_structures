//      10
 //   4     20
// 2  8  17  170

class Node  {
    constructor (value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor (){
        this.root = null
    }
//      10
//   4     20
// 2  8  17  170

    insert(value){
        const newNode = new Node(value)
        if(this.root === null){
            this.root = newNode
        } 
        else {
            let currentNode = this.root   
            while(true) {
                if(value > currentNode.value){
                    if(!currentNode.right){
                        currentNode.right = newNode
                        return this
                    }
                    currentNode = currentNode.right
                } else if (value < currentNode.value) {
                    if(!currentNode.left){
                        currentNode.left = newNode
                        return this
                    }
                    currentNode = currentNode.left
                }
            }     
        }
    }
//      10
//   4     20
// 2  8  17  170
    search(value){
        let currentNode = this.root
        if(value === currentNode.value){
            return currentNode
        } else {
            while(currentNode !== null){
                if(value > currentNode.value){
                    currentNode = currentNode.right
                } else if(value < currentNode.value) {
                    currentNode = currentNode.left
                } else {
                    return currentNode
                }
            }
            return null
        }
    }    
}


const myTree = new Tree()
myTree.insert(10)
myTree.insert(4)
myTree.insert(20)
myTree.insert(2)
myTree.insert(8)
myTree.insert(17)
myTree.insert(170)

console.log(myTree)

const sera = myTree.search(20)
console.log('encontrado', sera)