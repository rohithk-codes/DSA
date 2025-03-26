//1 Bubble sort

function bubbleSort(arr){
     
    let n = arr.length
    
    for(let i= 0 ; i<n-1; i++){
        let swapped = false
        for(let j=0 ; j<n-i-1; j++){
            if(arr[j]>arr[j+1]){
                
                [arr[j],arr[j+1]]= [arr[j+1],arr[j]]
                swapped = true
            }
        }
        if(!swapped) break
    }
    return arr
    
}

let arr=[2,4,5,61,4,56]

console.log(bubbleSort(arr))






// let arr=[2,4,56,7,-1,4,3,8]

// function bubblesort(arr){
//     let n = arr.length
//     let swapped = false
// for(let i=0 ; i<n-1;i++){
//     for(let j= 0 ;j<n-1-i;j++){
//         if(arr[j]>arr[j+1]){
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp
//             swapped = true
//         }
//     }
//     if(!swapped) break
// }
// return arr
// }

// console.log(bubblesort(arr))
