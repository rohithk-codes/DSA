class Stack{
    constructor(element){
        this.stack = []
    }

    push(element){
        this.stack.push(element)
    }

    pop(){
        if(this.isEmpty()){
            return "stack underflow" 
        }
        return this.stack.pop()
    }

    peek(){
        if(this.isEmpty()){
           return " stack is empty"
        }
        return this.stack[this.stack.length-1]
    }

    isEmpty(){
        return this.stack.length==0
    }

    size(){
        return this.stack.length
    }
    
    print(){
        console.log(this.stack)
    }
}


const stack = new Stack()

stack.push(10)
stack.push(30)
stack.push(20)
stack.pop()
console.log(stack.peek())
console.log(stack.size())
console.log(stack.isEmpty())
stack.print()
