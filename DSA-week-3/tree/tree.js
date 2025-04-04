class Node {
    constructor(value){
        this.value = value
        this.children = []
    }

    addchild(child){
        this.children.push(child)
    }
}

const tree = new Node("root")
const child1 = new Node("child1")
const child2 = new Node("child2")

tree.addchild(child1)
tree.addchild(child2)

const grandchild1 = new Node("grandchild1")
const grandchild2 = new Node("grandchild2")

child1.addchild(grandchild1)
child1.addchild(grandchild2)



function traverse(node){
    if(!node) return
    console.log(node.value)

    for(let child of node.children){
        traverse(child)
    }
}

traverse(tree)

// console.log(tree);