// 1 --> 2 --> 3 --> 4 --> 5 --> null

let myLinkeList = {
    head: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: null,
                }
            }
        }
    }
}

class Node {
    constructor(value){
        this.value = value,
        this.next = null
    }
}

class MysingleLinkedList {
    constructor(value){
        this.head  = {
            value: value,
            next: null
        }

        this.tail = this.head
        this.lenght = 1
    } 



    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.lenght += 1
        return this

    }

    preappend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.lenght += 1
    }

    insert(index, value) {
        const newNode = new Node(value)
        if(index >= this.lenght) {
            return this.append(value)
        }
        const firstIndex = this.getTheIndex(index - 1)
        const holdingNodes = firstIndex.next
        firstIndex.next = newNode
        newNode.next = holdingNodes
        this.lenght += 1
        return this

    }

    getTheIndex(index) {
        let counter = 0
        let currenNode = this.head

        while(counter !== index) {
            currenNode = currenNode.next
            counter += 1
        }

        return currenNode
    }


    remove(index) {
        if (index === this.lenght - 1) {
            let beforeTheIndexToRemove = this.getTheIndex(index - 1)
            this.tail = beforeTheIndexToRemove
            beforeTheIndexToRemove.next = null
            this.lenght -= 1
            return this
        } 
          else if (index === 0) {
            let nextToTheFirst = this.getTheIndex(index + 1)
            this.head = nextToTheFirst
            this.lenght -= 1
            return this
        } else {
            let indexToRemove = this.getTheIndex(index)
            let beforeTheIndexToRemove = this.getTheIndex(index - 1)
            let holdTheREst = indexToRemove.next
            beforeTheIndexToRemove.next = holdTheREst
            this.lenght -= 1
            return this
        }
    }


}


let myLinkedList = new MysingleLinkedList(1)
myLinkedList.append(2)
myLinkedList.append(3)
myLinkedList.append(4)
myLinkedList.remove(0)

console.log(myLinkedList)








