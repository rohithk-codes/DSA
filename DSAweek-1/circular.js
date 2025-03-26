class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class linkedlist{
  constructor(){
  this.head = null
  this.size = 0
  this.tail = null
  } 
  
  append(data){
    const node = new Node(data)
    if(!this.head)
    { this.head= node
    this.tail = node
    this.tail.next = this.head
    }
    else{
    this.tail.next = node
    this.tail= node
    this.tail.next = this.head
    }
    this.size++
  }
 
 
 print(){
     let curr = this.head
     let val =""
     while(curr){
       val+=curr.data+" "
       curr = curr.next
     }
     console.log(val)
 }

}

const list = new linkedlist()
list.append(10)
list.append(20)
list.append(30)
list.print()


let arr = [1,3,5,67,7,4]

