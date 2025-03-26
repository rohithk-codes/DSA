
class Queue{

constructor(){
    this.q = []
}

 isEmpty(){
    return this.q.length==0
 }

 enqueue(data){
    this.q.push(data)
 }

 dequeue(){
    if(!this.isEmpty()) this.q.shift()
 }

getFront(){
    return this.isEmpty()? -1 : this.q[0]
}

display(){
    console.log(this.q.join(' '))
}


}

const q = new Queue()

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.dequeue()
q.display()
console.log(q.getFront());
q.enqueue(4)
q.display()
