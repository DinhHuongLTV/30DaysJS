const reverseArray = (e6L2Arr) => {
    let left = 0, right = e6L2Arr.length - 1;
    while (left < right) {
        [e6L2Arr[left], e6L2Arr[right]] = [e6L2Arr[right], e6L2Arr[left]];
        left++;
        right--;
    }
    return e6L2Arr;
};

console.log(reverseArray([1, 2, 3, 4, 5]));
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']));
//['C', 'B', 'A']