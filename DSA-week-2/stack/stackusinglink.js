class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}
class Stack{
    constructor(){
        this.top = null
        this.size = 0 
    }
    push(data){
        const newNode = new Node(data)
        newNode.next = this.top
        this.top = newNode
        this.size++
    }
    pop(){
if(this.isEmpty()){
    return "stack is empty"
}
  const popedvalue = this.top.data
  this.top = this.top.next
  this.size--
  return popedvalue
    }

    peek(){
        return this.isEmpty() ? null : this.top.data
    }

    isEmpty(){
        return this.size==0
    }

    size(){
        return this.size
    }

    printStack(){
     let curr = this.top
     let stackvalues = []
     while(curr){
        stackvalues.push(curr.data)
        curr = curr.next
     }
     console.log("stack:",stackvalues.join("->"))
    }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.pop()
console.log("peekelement",stack.peek())
stack.printStack()