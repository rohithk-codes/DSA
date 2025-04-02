
                                                   

 class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
 }
 
 class BST {
  constructor(){
    this.root = null
  }

  isEmpty(){
   return this.root ===null
  }

  insert(value){
    const newNode = new Node(value)
    if(this.isEmpty()){
        return this.root = newNode
    }else{
       this.insertNode(this.root,newNode) 
    }
  }

  insertNode(root,newNode){
    if(root.value>newNode.value){
        if(root.left===null){
            root.left = newNode
        }else{
            this.insertNode(root.left,newNode)
        }
    }else{
        if(root.right===null){
            root.right = newNode
        }else{
            this.insertNode(root.right,newNode)
        }
    }
  }

  findSecondLargest(root,parent){
    if(!root.right){
        if(!root.left){
            return parent.value
        }
        return this.findLargest(root.left)
    }
    return this.findSecondLargest(root.right,root)
  }

  findLargest(node){
    while(node){
        node = node.right
    }
    return node
  }

  inOrder(root,arr){
    if(root){
        this.inOrder(root.left,arr)
        arr.push(root.value)
        this.inOrder(root.right,arr)
    }
  }

  findNthlargest(n){
    let arr =[]
    this.inOrder(this.root,arr)
    return arr[arr.length-n]
  }


 }

 let bst = new BST()
 bst.insert(50)
 bst.insert(30)
 bst.insert(20)
 bst.insert(10)
 bst.insert(80)
 bst.insert(90)

 console.log(bst.findSecondLargest(bst.root,null))
 console.log(bst.findNthlargest(1));
