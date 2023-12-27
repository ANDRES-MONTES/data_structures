class HashTable {
    constructor(size) {
        this.size = size
        this.table = new Array(size)
    }

    hash(key) {
        let hash = 0
        for(let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }

        return hash % this.size
    }

    set(key, value) {
        const index = this.hash(key)
        if (!this.table[index]) {
            this.table[index] = []
        }

        this.table[index].push([key, value])
        return this.table
    }

    get(key) {
        const indexOfKey = this.hash(key)
        if (this.table[indexOfKey]) {
            for(let i = 0; i < this.table[indexOfKey].length; i++){
                if(this.table[indexOfKey][i][0] === key) {
                    return this.table[indexOfKey][i][1]
                }
            }            
        }

        return undefined
    }

    delete(key) {
        const indexOfKey = this.hash(key)
        if(this.table[indexOfKey]) {
            for(let i = 0; i < this.table[indexOfKey].length; i++){
                if (this.table[indexOfKey][i][0] === key) {
                    const valueDeleted = this.table[indexOfKey][i]
                    this.table[indexOfKey].splice(valueDeleted, 1)
                    return valueDeleted
                }
            }
        }
    }

    keys() {
        let keys = []
        for(let i = 0; i < this.table.length; i++) {
            if(this.table[i] === undefined){
                continue
            }
            for(let j = 0; j < this.table[i].length; j++) {
                keys.push(this.table[i][j][0])
            }
        }

        return keys
    }

}

const myHashTable = new HashTable(50)
myHashTable.set('diego', 2001)
myHashTable.set('mariana', 'trece')
myHashTable.set('felipe', 2002)
myHashTable.set('laura', 2005)


console.log(myHashTable)

const value = myHashTable.get('mejor')

console.log(myHashTable.keys())




