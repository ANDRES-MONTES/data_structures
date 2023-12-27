class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(){
        this.first = null
        this.last = null
        this.lenght = 0
    }

    peek(){
        return this.first
    }

    enqueue(value){
        const newNode = new Node(value)
        if (this.lenght === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }

        this.lenght += 1
        return this
    }
// * - * - * 
    dequeue(){
        this.first = this.first.next
        this.lenght -= 1
        return this
    }
}


const myQueue = new Queue()
myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
console.log(myQueue)
myQueue.dequeue()
myQueue.dequeue()
console.log(myQueue)