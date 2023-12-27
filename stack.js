class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.bottom = null
        this.length = 0
    }

    peek() {
        const value = this.top
        return value
    }

    push(value) {
        const newNode = new Node(value)

        if (this.length === 0) {
            this.top = newNode
            this.bottom = newNode
        } else {
            const holdinPointer = this.top
            this.top =  newNode
            newNode.next = holdinPointer
        }

        this.length += 1
        return this

    }

// *
// *
// *
// *
    pop() {
        const newTop = this.top.next
        this.top = newTop
        this.length -= 1
        return this
    }
}



const myStack = new Stack()
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.push(4)

console.log(myStack)
myStack.pop()
console.log(myStack)