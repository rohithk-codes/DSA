
class stackusingQueue{
    
    constructor(){
        this.q1=[]
        this.q2=[]
    }
    
    push(x){
    while(this.q1.length>0){
        this.q2.push(this.q1.shift())
    }
    this.q1.push(x)
    while(this.q2.length>0){
        this.q1.push(this.q2.shift())
    }
    }
    
    pop(){
        if(this.q1.length==0) return console.log("empty")
        this.q1.shift()
    }
    
    top(){
        if(this.q1.length==0)return 'empty'
        console.log(this.q1[0])
    }
    
    displsay(){
        console.log(this.q1)
    }
}


const stack = new stackusingQueue()

stack.push(10)
stack.push(20)
stack.push(30)
stack.pop()
stack.top()
stack.displsay()



