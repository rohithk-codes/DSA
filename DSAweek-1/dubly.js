class Node{
    
    constructor(data){
        this.data = data
        this.prev = null
        this.next = null
        
        
    }
}

class LinikedList {
    
    
    constructor(){
        
        this.head = null
        this.size = 0 
    }
    
    prepend(data){
        const node = new Node(data)
        if(this.size==0){
            this.head = node
        }else{
         let curr = this.head 
         
         node.next = curr
          curr.prev = node
          this.head = node
        }
        this.size++
    }
    
    append(data){
        const node = new Node(data)
        if(this.size==0){
            this.head = data
        }else{
         let curr = this.head 
         while(curr.next){
      curr = curr.next
         }
         node.prev = curr
         curr.next = node
         
        }
        this.size++
        
        
    }
    
    reverse(){
        
       let curr = this.head
        let val=''
        while(curr.next){
            
            curr = curr.next
        }
        while(curr){
            val += curr.data+" "
            curr = curr.prev
        }
        console.log(val)
    }
    
    print(){
        if(!this.head) return console.log("list is empty")
        let curr = this.head
        let  val =''
    while(curr){
        val+= `${curr.data} `
        curr = curr.next
    }
      console.log(val)  
        
    }
    
    
}

const list = new LinikedList()
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.append(50)
list.append(70)



list.print()
list.reverse()
