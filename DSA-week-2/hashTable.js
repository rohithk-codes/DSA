
class hashTable{
    constructor(size){
        this.size = size
        this.table = new Array(size)
        for(let i=0; i<size; i++){
            this.table[i] = new Array()
        }
    }

    insertItem(x){
        const index = this.hashFuncion(x)
        this.table[index].push(x)
    }

    deleteItem(key){
    const index = this.hashFuncion(key)
    const i = this.table[index].indexOf(key);
    if(i!==-1){
        this.table[index].splice(i,1)

    }
    }

hashFuncion(x){
    return x % this.size
}

displayHash(){
    for(let i=0; i<this.size; i++){
        let str = `${i}`
        for(let j=0; j<this.table[i].length; j++){
            str+= `--->${this.table[i][j]}`;
        } 
        console.log(str)
    }
}


}

const a = [15, 11, 27, 18, 12];
const n = a.length

const h = new hashTable(7)

for(let i=0 ; i<n ; i++){
    h.insertItem(a[i])
}

h.deleteItem(12)

h.displayHash()