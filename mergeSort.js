function mergeSort(arr) {
    if (arr.length <= 1) return arr; // Base case: already sorted

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid)); // Recursively sort left half
    const right = mergeSort(arr.slice(mid)); // Recursively sort right half

    return merge(left, right); // Merge the sorted halves
}

function merge(left, right) {
    let sortedArray = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArray.push(left[i]);
            i++;
        } else {
            sortedArray.push(right[j]);
            j++;
        }
    }

    return sortedArray.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); 
console.log(mergeSort([105, 79, 100, 110]));       
