//1. Insertion sort

let arr=[2,5,32,2,65,45]

function insertionsort(arr){
    let n = arr.length
    for(let i=1;i<n;i++){
        let key = arr[i]
        let j = i-1
        
        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = key
    }
    return arr
}

console.log(insertionsort(arr))

//2.
