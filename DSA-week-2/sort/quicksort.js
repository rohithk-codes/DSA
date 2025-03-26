

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: arrays of length 0 or 1 are already sorted
    }

    const pivot = arr[arr.length - 1]; // Choosing the last element as pivot
    const left = []; // Subarray for elements smaller than pivot
    const right = []; // Subarray for elements greater than pivot

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively sort left and right subarrays and concatenate them
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
let numbers = [10, 7, 8, 9, 1, 5];
console.log("Sorted Array:", quickSort(numbers));