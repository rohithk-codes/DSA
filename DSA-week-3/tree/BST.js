
class Node{
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
    }
}

class BST{
    constructor(){
        this.root = null
    }

//Insert values in the bst
    insert(value){
        const newNode = new Node(value)
        if(!this.root){
            this.root = newNode
            return
        }
        let curr = this.root
        while(true){
            if(value<curr.value){
                if(!curr.left){
                    curr.left = newNode
                    return
                }
                curr = curr.left
            }else if(value>curr.value){
                if(!curr.right){
                    curr.right=newNode
                    return
                }
                curr = curr.right
            }
        }
    }

preOrder(node=this.root){
    if(!node) return
    console.log(node.value)
    this.preOrder(node.left)
    this.preOrder(node.right)
}

inOrder(root,arr){
    if(root){
        this.inOrder(root.left,arr)
        arr.push(root.value)
        this.inOrder(root.right,arr)
    }
  }

postOrder(node=this.root){
    if(!node)return
    this.postOrder(node.left)
    this.postOrder(node.right)
    console.log(node.value)
}

//search values in bst
search(value,node=this.root){
    if(!node)return
    if(value===node.value)return node
    return value<node.value?this.search(value,node.left):this.search(value,node.right)
}

isBST(node=this.root,min=-Infinity,max=Infinity){
    if(!node)true
    if(node.value<=min||node.value>=max)return false
    return this.isBST(node.left,min,node.value) && this.isBST(node.right,max,node.value)
}

//Second largest in the tree
findSecondLargest(root,parent){
    if(!root.right){
        if(!root.left){
            return parent.value
        }
        return this.findSecondLargest(root.left)
    }
    return this.findSecondLargest(root.right,root)
}

//largest value in the tree
findLargest(node){
    while(node){
        node = node.right
    }
    return node
}

//Nth largest value in a tree
findNthlargest(n){
    let arr =[]
    this.inOrder(this.root,arr)
    return arr[arr.length-n]
}

}

const bst = new BST()
bst.insert(20)
bst.insert(21)
bst.insert(10)
bst.insert(9)
bst.insert(8)
bst.preOrder()

console.log(bst.findNthlargest(5))