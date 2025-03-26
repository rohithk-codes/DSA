
class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class Queue{

    constructor(){
        this.front = null
        this.rear = null
    }

    isEmpty(){
        return this.front === null && this.rear === null
    }

    enqueue(data){
        const node = new Node(data)
        if(this.rear===null){
            this.front = this.rear= node
            return
        }
        this.rear.next = node
        this.rear = node
    }

    dequeue(){
        if(this.isEmpty()){
            console.log("queue is underflow")
            return
        }
        this.front = this.front.next

        if(this.front === null){
            this.rear = null
        }
    }

    getFront(){
        if(this.isEmpty()){
            console.log("que is empty")
            return Number.MIN_VALUE
        }
        return this.front.data
    }
    getRear(){
        if(this.isEmpty()){
            console.log("que is empty")
            return Number.MIN_VALUE
        }
        return this.rear.data
    }

}

const q = new Queue()

q.enqueue(10)
q.enqueue(20)

console.log("get front",q.getFront())
console.log("get rear",q.getRear())

q.dequeue()
q.dequeue()

console.log("get front",q.getFront())
console.log("get rear",q.getRear())

q.enqueue(30);
q.enqueue(40);
q.enqueue(50);

q.dequeue()

console.log("get front",q.getFront())
console.log("get rear",q.getRear())