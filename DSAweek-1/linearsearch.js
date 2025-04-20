
function linearsearch(arr,target){

    for(let i = 0 ; i<arr.length; i++){
        if(arr[i]==target){
            return i
        }
    }
    return -1

}

console.log(linearsearch(arr,target));

let arr=[1,3,4,5,7]

function binarySearch(arr,target){

    let leftIndex = 0;
    let rightIndex = arr.length-1
    while(leftIndex<=rightIndex){
        let middle = Math.floor((leftIndex+rightIndex)/2)

        if(target===arr[middle]){
            return middle
        }
        if(target<arr[middle]){
            rightIndex = middle-1
        }else{
            leftIndex = middle+1
        }

    }
    return -1
}



console.log(binarySearch(arr,5));

