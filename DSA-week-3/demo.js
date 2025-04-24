
// // 1.REVERSING STRING

// let s = "Hello world"
// let e = ''
// for(let i=s.length-1 ; i>=0; i--){
//     e+=s[i]
// }

// console.log(e)

// ///////////////////////////////////////////////////////////////////////////

// // 2.MOVE ALL 0'S TO END

// let arr=[1,3,0,7,8,0,5,0,7,8]

// let index = 0

// for(let i = 0 ; i<arr.length; i++){
    
//     if(arr[i] != 0){
//         let temp = arr[index]
//         arr[index] = arr[i]
//         arr[i] = temp
        
//         index++
        
//     }
    
// }

// console.log(arr)

// ///////////////////////////////////////////////////////////////////////////

// // 3.LARGEST AMOUNG THE THREE NUMBERS

// let arr = [1, 3, 0, 7, 8, 0, 5, 0, 7, 8];

// for(let i=0; i<=arr.length-3; i++){
//    let  first = arr[i]
//    let  second = arr[i+1]
//    let third = arr[i+2]  
   
//    let largest = first
//    if(second>first){
//        largest = second
//    }
//    if(third>first){
//        largest = third
//    }
   
//    console.log("Largest in", first, second, third, "is", largest);
   
// }

// ///////////////////////////////////////////////////////////////////////////

// // 4. REMOVE DUPLICATE ELEMENT FROM THE ARRAY

// let arr = [1,2,3,2,4,5,4,3,6,7,7,8];

// for(let i=0 ; i<arr.length; i++){
    
//     for(let j=i+1 ; j<arr.length; j++){
        
//         if(arr[i]==arr[j]){
            
//         for(k=j;k<arr.length-1;k++){
        
//         arr[k]= arr[k+1]
        
//         }  
        
//         arr.length--
            
//         }
        
//     }
// }

// ///////////////////////////////////////////////////////////////////////////


// // 5.FIND UNIQUE AND REMOVE UNIQUE FROM THE ARRAY

// let arr = [1,2,3,2,4,5,4,3,6,7,7,8,8];


// for(let i=0 ;i<arr.length; i++){
//     let count = 0 
//     for(let j=0; j<arr.length; j++){
//         if(arr[i]==arr[j]){
//             count++
            
//         }
//     }
//     if(count==1){
//         for(let k=i ; k<arr.length-1; k++){
            
//             arr[k] = arr[k+1]
//         }
//         arr.length--;
//         i--
//     }
    
// }

// ///////////////////////////////////////////////////////////////////////////

// // 6.REMOVE MULTIPELS OF THREE FROM ARRAY

// let arr = [1,2,3,2,4,5,4,3,6,7,7,8,8];


// for(let i=0 ;i<arr.length; i++){
    
//     if(arr[i]%2==0){
//         for(let k=i ; k<arr.length-1; k++){
            
//             arr[k] = arr[k+1]
//         }
//         arr.length--;
//         i--
//     }
    
// }

// ///////////////////////////////////////////////////////////////////////////

// // 7.REVERSE THE ARRAY

// let arr = [1,2,3,2,4,5,4,3,6,7,7,8,8];


// for(let i=0, j=arr.length-1 ;i<arr.length/2; i++ ,j--){
    
//    let temp = arr[i]
//    arr[i] = arr[j]
//    arr[j] = temp
    
// }

// console.log(arr)

// ///////////////////////////////////////////////////////////////////////////

// // 8.INSERT ELEMENT IN THE ARRAY WITHOUT USING INBUILT METHOD 

// let arr=[1,2,34,5,6,7,8]

// let position = 0

// for(let i = arr.length ; i>position; i--){
//     arr[i] = arr[i-1]
// }

// arr[position] = 99

// ///////////////////////////////////////////////////////////////////////////


// // 9 MERGE TWO ARRAY

// let arr=[1,2,3,4,5]
// let arr1=[6,7,8,9,10]

//    let size = arr.length
   
// for(let i =0 ; i<arr1.length; i++){

//     arr[size++]= arr1[i]
    
// }


// ///////////////////////////////////////////////////////////////////////////


// // 10.FIND PRIME NUMBER

// let arr = [ 1,2,-3,4,-5,6,7,-8,9,-7]

// for(let i =0 ; i<arr.length ; i++){
    
//     let isprime = 0 ;
    
//     if(arr[i]<2){
//         continue;
//     }

// for(let j = 2 ; j<=arr[i]/2 ; j++){
  
//     if(arr[i]%j==0){
        
//       isprime = 1
//       break;
      
//     }
// }   
// if(isprime==1){
//     console.log(arr[i])
//   }

// }

// ///////////////////////////////////////////////////////////////////////////

// // 11.REVERSE STRING WITHOUT USING ANY IN BUILT METHOD


//   var str = "Hello World";
//   let word = ""
//   let result= ""
  
//   function  reverse(str){
  
//   for(let i= 0 ; i<str.length; i++){
      
//       if(str[i] !==""){
          
//           word= str[i]+word
//       }else{
          
//           result = str[i]+""
//           word =""
//       }
      
//   }
//   result+=word
//   return result
  
//   }
  
//   console.log(reverse(str))

// ///////////////////////////////////////////////////////////////////////////

// // 12.FIND MISSING VALUE FROM AN ARRAY

// let arr =[1,7,2,5,6,9]

// function findmissing(arr){
//     let sorted = arr.sort((a,b)=>a-b)
//         let s = sorted[0]
//         let n = sorted[sorted.length-1]
        
//         let set = new Set(arr)
        
//      for(let i=s;i<=n ; i++){
//          if(!set.has(i)){
//              console.log(i)
//          }
//      }
// }

// findmissing(arr)


// ///////////////////////////////////////////////////////////////////////////

// // 13.FUNCTION TO FIND DIVISION OF TWO NUMBERS

// function division(a,b){
//     return b>0 ? a/b :'not divisible'
// }

// console.log(division(10,0))


// ///////////////////////////////////////////////////////////////////////////

// // 14.FUNCTION TO REMOVE ODD

// let arr =[1,2,3,4,5,6,7,8]

// function remmoveOdd(arr){
    
//     let c=0 
//     for(let i=0 ; i<arr.length; i++){
//         if(arr[i]%2==0){
//             arr[c++] = arr[i]
//         }
//     }
//     arr.length = c
//     return arr
// }

// console.log(remmoveOdd(arr))


// ///////////////////////////////////////////////////////////////////////////


// // 15. FUNCTION TO MERGE TWO SORTED ARRAY INTO SORTED ARRAY

let arr1=[1,2,4,5,8,9]
let arr2=[3,4,5,6]

function mergeTwoArray(arr1,arr2){
    
    let i=0 
    let j=0
    let result = []
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            result.push(arr1[i])
            i++
        }else{
            result.push(arr2[j])
            j++
        }
    }
    
    while(i<arr1.length){
        result.push(arr1[i])
        i++
    }
     while(j<arr2.length){
        result.push(arr2[j])
        j++
    }
    
    return result
    
}

console.log(mergeTwoArray(arr1,arr2))

