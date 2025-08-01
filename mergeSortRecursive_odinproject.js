function mergeSort(arr) {
    if(arr.length === 1) return arr;
    else if(arr.length === 2) {
        if(arr[0] > arr[1]) {
            return [arr[1], arr[0]];
        }
        else {
            return arr;
        }
    }
    else {
        let newArr = [];
        let arr1 = mergeSort(arr.slice(0, arr.length/2))
        let arr2 = mergeSort(arr.slice(arr.length/2, arr.length))
        let index=0, i=0, j=0;
        while(i<arr1.length && j<arr2.length) {
            if(arr1[i] < arr2[j]) {
                newArr[index] = arr1[i];
                i++;
            }
            else {
                newArr[index] = arr2[j];
                j++;
            }
            index++;
        }
        while(i<arr1.length) {
            newArr[index] = arr1[i];
            i++
            index++;
        }
        while(j<arr2.length) {
            newArr[index] = arr2[j] 
            j++
            index++;
        }
        return newArr;
    }

}
console.log(mergeSort([105, 79, 600, 100, 110, 90, 24, 13, 70, 45, 38, 200, 250, 5]))