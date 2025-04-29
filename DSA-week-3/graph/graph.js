class Graph{
    constructor(){
        this.Graph={}
    }

    addVertex(vertex){
        if(!this.Graph[vertex]){
            this.Graph[vertex]= new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.Graph[vertex1]) this.addVertex(vertex1)
        if(!this.Graph[vertex2]) this.addVertex(vertex2)
         this.Graph[vertex1].add(vertex2)   
         this.Graph[vertex2].add(vertex1)   
    }

       // Remove a vertex and its edges
       removeVertex(vertex) {
        if (this.Graph[vertex]) {
            for (let neighbor of this.Graph[vertex]) {
                this.Graph[neighbor].delete(vertex); 
            }
            delete this.Graph[vertex];
        }
    }

    BFS(start){
        if(!this.Graph[start]) return
        let queue=[start]
        let result=[]
        let visited=new Set()
        visited.add(start)

        while(queue.length){
            let current=queue.shift()
            result.push(current)
            this.Graph[current].forEach((item)=>{
                if(!visited.has(item)){
                    queue.push(item)
                    visited.add(item)
                }
            })
        }
        return result
    }

    DFS(start){
        if(!this.Graph[start]) return []
        let stack=[start]
        let result=[]
        let visited=new Set()
        visited.add(start)

        while(stack.length){
            let current = stack.pop()
            result.push(current)
            this.Graph[current].forEach((item)=>{
                if(!visited.has(item)){
                    stack.push(item)
                    visited.add(item)
                }
            })
        }
return result
    }

    shortestPath(start,end){
        if(!this.Graph[start] || !this.Graph[end]){
            return null
        }
        let queue=[start]
        let visited=new Set()
        visited.add(start)

        while(queue.length){
            let path=queue.shift()
            let node=path[path.length-1]

            if(node==end) return path
            for(let item of this.Graph[node]){
                if(!visited.has(item)){
                    visited.add(item)
                    queue.push([...path,item])
                }
            }
        }
        return null
    }   
}


const graph = new Graph()


// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D');
// graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('D', 'E');
///graph.removeVertex('D')

console.log("Graph before removing a vertex:");
// console.log(graph);

console.log(graph.shortestPath("A","E"))




