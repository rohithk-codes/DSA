class TreeNode{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

const root = new TreeNode(1)
const value1 = new TreeNode(2)
const value2 = new TreeNode(3)
const value3 = new TreeNode(4)
const value4 = new TreeNode(5)

root.right=value1
root.left=value2

value1.left=value3
value1.right=value4
root

function preOrder(node){
    if(!node) return 
    console.log(node.value)    
preOrder(node.left)
preOrder(node.right)
}

preOrder(root)

//console.log(root)