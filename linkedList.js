class Node {
constructor(value){
    this.value = value
    this.next = null
}

}

class LinkedList {

    constructor(){
        this.head = null;
        this.size = 0
    }

    isEmpty(){
        return this.size ===0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        const node  = new Node(value)
        if(this.isEmpty()){
            this.head = node

        }else{
            node.next = this.head
            this.head = node
        }
       this.size++ 
    }

    append(value){
    
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head;
            while(prev.next){
            prev = prev.next
            }
            prev.next = node
        }
    this.size++

    }

  //Insert element to the specific postion of the list

    insert(value,index){
   
       if(index<0 ||index>this.size){
        return 
       } 
  if(index===0){
    this.prepend(value)
  }else{
    const node = new Node(value);
    let prev = this.head;
    for(let i=0 ; i<index-1;i++){
        prev = prev.next
    }
   node.next = prev.next  
   prev.next = node;
       this.size++                             

  }

    }

    //Remove element from the specific postion of the list

removeFrom(index){
    if(index<0 || index>=this.size){
        console.log("invalid index")
        return null
    } 
    let removedNode
    if(index===0){
        removedNode = this.head
        this.head   = this.head.next
    }else{

        let prev = this.head
        for(let i =0 ; i<index-1; i++){
            prev = prev.next
        }
        removedNode = prev.next
        prev.next = removedNode.next

    }
    this.size--
    return removedNode.value
}

//Remove value from the list

removeValue(value){

    if(this.isEmpty()){
        return null
    }
    if(this.head.value === value){
        this.head = this.head.next
        this.size--
        return value
    }else{
        let prev = this.head
        while(prev.next && prev.next.value != value){
            prev = prev.next
        }
        if(prev.next){
           const removedNode = prev.next
            prev.next = removedNode.next
            this.size--
            return value
        }
      return null
    }
}

//Linked list serarch

search(value){
    if(this.isEmpty()){
        console.log("list is empty")
        return -1
    }

    let i = 0;
    let curr = this.head
    while(curr){
    
        if(curr.value === value){
            return i 
        }
curr = curr.next
i++
    }
    return -1
}

//Reverse the linked list 

reverse(){
    let prev = null
    let curr = this.head
    while(curr){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next 
    }
    this.head = prev
}

    print(){
        if(this.isEmpty()){
            console.log("this list is empty")
        }else{
        let curr = this.head;
        let listValues = ''
        while(curr){
            listValues+= `${curr.value} `
            curr = curr.next    
        }
        console.log(listValues)
    }
    
    }

}



let list = new LinkedList()

console.log("list is empty",list.isEmpty());
console.log("List size",list.getSize())

list.append(10)
list.append(20)
list.append(40)
list.append(50)
list.print()

list.insert(30,2)
list.print()





// Linked list with Tail

// class Node{
//     constructor(value){
// this.value = value
// this.next = null 
//     }
// }

// class TailLinkedList {

//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
       
//         return this.size ===0
//     }

//     getSize(){
//         return this.size
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//             this.tail = node

//         }else{

//             node.next = this.head
//             this.head = node

//         }
//         this.size++
//     }

//     append(value){
 
//         const node = new Node(value)

//         if(this.isEmpty()){
         
//          this.head = node
//          this.tail = node
//         }else{
//           this.tail.next = node
//           this.tail = node
//         }
//     this.size++
//     }

//     arrayTolinkedlist(arr){

//         if(arr.length==0) return null

//         for(let i = 0 ; i<arr.length; i++){
//             this.append(arr[i])
//         }
            
//     }

//     removeFromFront(){
//         if(this.isEmpty()){
//             return null
//         }
//         const value = this.head.value
//         this.head = this.head.next
//         this.size--
//         return value
//     }

//     removeFromEnd(){
//         if(this.isEmpty()){
//             return null
//         }
//         const value = this.tail.value
//         if(this.size===1){
//             this.head = null
//             this.tail = null
//         }else{
//             let prev = this.head
//             while(prev.next !== this.tail){
//                 prev = prev.next
//             }
//             prev.next = null
//             this.tail = prev
//         }
//         this.size--
//         return value
//     }


//         print(){
//         if(this.isEmpty()){
//             console.log("this list is empty")
//         }else{
//         let curr = this.head;
//         let listValues = ''
//         while(curr){
//             listValues+= `${curr.value} `
//             curr = curr.next    
//         }
//         console.log(listValues)
//     }
    
//     }

// }

// const listtail   = new TailLinkedList()

// // console.log("list is empty ",list.isEmpty())
// // console.log("list size",list.getSize())
// // // list.print()

// // list.append(10)
// // list.append(20)
// // list.append(30)
// // list.prepend(40)
// // list.print()

// // console.log("list size ",list.getSize())
// // list.removeFromFront()
// // list.print()
// let arr=[1,3,4,5,6]

// list.arrayTolinkedlist(arr)
// list.print()

