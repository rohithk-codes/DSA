//  ///1. fibonaci recursive  
// function recursiveFibonaci(n){

//     if(n<2){
//         return n
//     }

//     return recursiveFibonaci(n-1)+recursiveFibonaci(n-2)
// }

// console.log(recursiveFibonaci(6))

// ///2. fcactorial of n number

// function recursivefactorial(n){

//     if(n==0){
//         return 1
//     }

//     return n * recursivefactorial(n-1)
// }

// console.log(recursivefactorial(5))

// 3.
//  function printFun(test){

//     if(test<1){

// return 
//     }else{
//         console.log(test)
//         printFun(test-1)
//         console.log(test)
//         return
//     }

// }
// printFun(3)

// 4. 
// function f(n){

//     if(n<=1)
//         return 
//     f(n-1)
//     console.log(n)
//     f(n-1)
// }

// f(5)

// let arr=[1,3,4,5,7]

// function recursiveBinary(arr,target){

//     return search(arr,target,0,arr.length-1 )

// }

// function search(arr,target,leftIndex,rightIndex){
// if(leftIndex>rightIndex){

//     return-1
// }

// let middleIndex = Math.floor((leftIndex+rightIndex)/2)
// if(target==arr[middleIndex]){

//     return middleIndex

// }

// if(target<arr[middleIndex]){
//     return search(arr,target,leftIndex,middleIndex-1)
// }else{

//     return search(arr,target,middleIndex+1,rightIndex)
// }
     

// }

// console.log(recursiveBinary(arr,3));


let arr=[1,2,3,4,5]

function sumOfarray(arr,index){
    if(index<0){
        return 0
    }

    return arr[index]+=sumOfarray(arr,index-1)
}

console.log(sumOfarray(arr,arr.length-1))