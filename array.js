// const array = ['Andres', 'paula', 'laura', 'juliana']

class MyArray {
    constructor () {
        this.len = 0
        this.data = {}
    }

    obtener(index) {
        return this.data[index]
    }

    add(item) {
        this.data[this.len] = item
        this.len += 1
        return this.data
    }

    pop() {
        const lastItem = this.data[this.len - 1]
        delete this.data[this.len - 1]
        this.len -= 1
        return lastItem
    }

    delete(index) {
        const deleteElemt = this.data[index]
        this.shiftIndex(index)
        return deleteElemt
    }

    shiftIndex (index) {
        for (let i = index; i < this.len; i++) {
            this.data[i] = this.data[i + 1]
        }

        delete this.data[this.len - 1]
        this.len -= 1
    }

    deleteStart() {
        const item = 0
        const value = this.data[item]
        this.shiftIndex(item)
        return value
    }

    addStar(item) {
        const lastElement = this.data[this.len - 1]
        this.add(lastElement)
        for (let i = this.len - 1; i > 0; i--) {
            this.data[i] = this.data[i - 1]
        }

        this.data[0] = item
        return this.data
    }

}

const array  = new MyArray ()
array.add(1)
array.add(2)
array.add(3)
array.add(4)
array.add(5)

console.log(array)

array.addStar(8)
array.addStar(9)
array.addStar(10)



console.log(array)
