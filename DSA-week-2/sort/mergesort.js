//1 Merge sort

function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    let mid=Math.floor(arr.length/2)
    let left=arr.slice(0,mid)
    let right=arr.slice(mid)

    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
    let sorted =[]
    while(left.length && right.length){
        if(left[0]<=right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }
    return [...sorted,...left,...right]
}


console.log(mergeSort([2,4,6,9,6,1,5,4]));



// function mergeSort(arr){

//     if(arr.length<=1)return arr
//     let mid = Math.floor(arr.length/2)
//     let left = mergeSort(arr.slice(0,mid))
//     let right = mergeSort(arr.slice(mid))

//     return merge(left,right)
// }

// function merge(left,right){

//     let result=[]
//     let i=0 ; 
//     let j=0;

//     while(i<left.length && j<right.length){
//        if(left[i]<right[j]){
//         result.push(left[i])
//         i++
//        }else{
//         result.push(right[j])
//         j++
//        }

//     }

//     return result.concat(left.slice(i)).concat(right.slice(j))

// }

// let arr=[3,5,31,1,23,4]
// console.log(mergeSort(arr))




















// let arr1=[1,2,4,5,6]
// let arr2=[1,2,4,5,5,7,5,9,11]
// function merge(arr1,arr2){
//     let result=[]
//     let i = 0 
//     let j= 0
//     while(i<arr1.length && j<arr2.length){
//         if(arr1[i]<arr2[j]){
//             result.push(arr1[i])
//             i++
//         }else{
//             result.push(arr2[j])
//             j++
//         }
//     }
//     while(i<arr1.length)result.push(arr1[i++])
//     while(j<arr2.length)result.push(arr2[j++])
//     return result
// }

//  console.log(merge(arr1,arr2))

