class MaxHeap{
    constructor(){
        this.heap = [];
    }

    insert(value){
        this.heap.push(value);
        this.bubbleUp(this.heap.length-1)
    }

    bubbleUp(index){
        while(index > 0){
            let parentIndex = Math.floor((index-1)/2);
            if(this.heap[parentIndex]>=this.heap[index]) break;
            [this.heap[parentIndex],this.heap[index]]=[this.heap[index],this.heap[parentIndex]]
            index = parentIndex
        }
    }

    deleteRoot(){
        if(this.heap.length === 0 ) return null;
        if(this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return root
    }

    heapifyDown(index){
        while(true){
            let largest  = index;
            let left = (2*index)+1;
            let right = (2*index)+2;
            if(left<this.heap.length && this.heap[left]>this.heap[largest]){
                largest = left;
            }
            if(right<this.heap.length && this.heap[right]>this.heap[largest]){
                largest = right;
            }
            if(largest === index) break;
            this.swap(index,largest);
            index = largest
        }
    }
        
    swap(i,j){
        [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
    }      

    printHeap(){
        console.log(this.heap);
    }
}

const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(20);
maxHeap.insert(2); 
maxHeap.insert(6);

console.log("Max Heap:", maxHeap.heap);
console.log("Deleted Root:", maxHeap.deleteRoot());
console.log("Heap After Deletion:", maxHeap.heap);


///1..Find the Maximum Element Without Removing It

///2..Convert an Array into a Max Heap

//3..Heap Sort (Ascending Order)

//4..Check if a Given Array is a Max Heap

//5..Merge Two Max Heaps

//6..Replace the Root with a New Value

//7.Find the N Smallest Elements in a Max Heap
