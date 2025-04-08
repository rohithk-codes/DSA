class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
  }
  
  class BST{
    constructor(){
        this.root=null
    }
    insert(value){
        const NewNode=new Node(value)
        if(!this.root){
            this.root=NewNode
            return
        }
        let current=this.root
        while(true){
            if(value<current.value){
                if(!current.left){
                    current.left=NewNode
                    return
                }
                current=current.left
            }else if(value>current.value){
                if(!current.right){
                    current.right=NewNode
                    return
                }
                current=current.right
            }
        }
    }

levelOrder(node =this.root){
    let queue=[]
    queue.push(node)
    while(queue.length){
        let curr = queue.shift()
        console.log(curr.value)
        if(curr.right){
            queue.push(curr.right)
        }
        if(curr.left){
            queue.push(curr.left)
        }
    }
}

    include(value){
        let current=this.root
        while(current){
            if(value==current.value) return true
            if(value<current.value){
                current=current.left
            }else{
                current=current.right
            }
        }
        return false
    }
    findClosest(target){
        let current=this.root;
        let closest=this.root.value
        while(current){
            if(Math.abs(target-current.value)<Math.abs(target-closest)){
                current=closest
            }
            if(target<current.value){
                current=current.left
            }else {
                current=current.right
            }
        }
        return closest
    }
    findMin(node=this.root){
        if(!node) return null
        while(node.left){
            node=node.left
        }
        return node.value
    }
    findMax(node=this.root){
        if(!node ) return null
        while(node.right){
            node=node.right
        }
         return node.value
    }
    findHeight(node=this.root){
        if(!node) return -1
        return 1+ Math.max(this.findHeight(node.left),this.findHeight(node.right))
    }
    preOrder(node=this.root){
        if(!node) return 
        console.log(node.value)
        this.preOrder(node.left)
        this.preOrder(node.right)
    }
    inOrder(node=this.root){
        if(!node) return 
        this.inOrder(node.left)
        console.log(node.value)
        this.inOrder(node.right)
    } 
    postOrder(node=this.root){
        if(!node) return 
        this.postOrder(node.left)
        this.postOrder(node.right)
        console.log(node.value)
  
    }
    search(value,node=this.root){
        if(!node) return 
        if(value==node.value) return node
        return value<node.value? this.search(value,node.left):this.search(value,node.right)   
    }
    isBST(node=this.root,min=-Infinity,max=Infinity){
        if(!node) return true
        if(node.value<=min || node.value>=max) return false
        return this.isBST(node.left,min,node.value) &&  this.isBST(node.right,node.value,max)
    } //valid
    
  }
  
  const l=new BST()
  l.insert(8)
  l.insert(3)
  l.insert(10)
  l.insert(1)
  l.insert(6)
  l.insert(14)
  l.insert(4)
  l.insert(7)
  l.insert(13)
  
//   console.log(l)
//   console.log(l.include(1))
//   console.log(l.include(123))
//   console.log(l.findClosest(1))
//   console.log(l.findMin())
//   console.log(l.findMax())
//   console.log(l.findHeight())
  l.levelOrder()
  console.log("preOrder")
  l.preOrder()
  console.log("inOrder")
  l.inOrder()
  console.log("postOrder")
  l.postOrder()
  console.log(l.search(5))
  console.log(l.isBST())
  
  
  
  
  
  
  class Node{
      constructor(value){
          this.value=value
          this.left=null
          this.right=null
      }
  }
  class BST{
      constructor(){
          this.root=null
      }
      insert(value){
          const newNode=new Node(value)
          if(!this.root){
              this.root=newNode
              return 
          }
          let current=this.root
          while(true){
              if(value<current.value){
                  if(!current.left){
                      current.left=newNode
                      return 
                  }
                  current=current.left
              }else if(value>current.value){
                  if(!current.right){
                      current.right=newNode
                      return 
                  }
                  current=current.right
              }
          }
      }
      KthSmallest(k){
          let count=0;
          let result=null;
         function inOrder(node){
             if(!node || result!==null) return 
             inOrder(node.left)
                 count++
                 if(count===k){
                     result=node.value
                     return 
                 }    
             inOrder(node.right)         
         }
             inOrder(this.root)
                 return result 
      }
  }
  const l = new BST();
  l.insert(12);
  l.insert(5);
  l.insert(15);
  l.insert(3);
  l.insert(7);
  l.insert(13);
  l.insert(17);
  
  console.log(l.KthSmallest(3));
  console.log(l.KthSmallest(1));
  console.log(l.KthSmallest(5));
  
  
  
  
  class Node{
      constructor(data){
          this.value=data
          this.left=null;
          this.right=null
      }
  }
  class BST{
      constructor(){
          this.root=null
      }
      insert(value){
          const newNode=new Node(value)
          if(!this.root){
              this.root=newNode
              return 
          }
          let current=this.root
          while(true){
              if(value<current.value){
                  if(!current.left){
                    current.left=newNode
                    return 
                  }
                  current=current.left
              }else if(value>current.value){
                  if(!current.right){
                      current.right=newNode
                      return
                  }
                  current=current.right
              }
          }
      }
//largest
      largest(node=this.root){
          if(!node)return
          while(node.right){
            node =node.right
          }
        return node.value
        
      }

  
    secondLargest() {
        if (!this.root || (!this.root.left && !this.root.right)) {
            return null; // No second largest if the tree has only one node or is empty
        }
    
        let curr = this.root;
        let prev = null;
    
        // Step 1: Find the rightmost (largest) node
        while (curr.right) {
            prev = curr; // Store the parent of the largest node
            curr = curr.right;
        }
    
        // Step 2: If the largest node has a left subtree,
        // the second largest is the rightmost node in that left subtree.
        if (curr.left) {
            curr = curr.left;
            while (curr.right) {
                curr = curr.right;
            }
            return curr.value;
        }
    
        // Step 3: If there is no left subtree,
        // the second largest is the parent (`prev`) of the largest node.
        return prev ? prev.value : null;
    }
    


  }

  const t = new BST()


  t.insert(20)

  t.insert(1)
  t.insert(3360)
  t.insert(450)
  console.log(t.largest());
  console.log(t.secondLargest())