// ---------------------------------------Helper Function------------------------------------------------
function pivot(array,start=0, end = array.length-1)
{
    pivot_point_count = start
    for (let i = start+1; i <= end; i++) {
        if (array[i] < array[start]){
            pivot_point_count++;
            [array[i], array[pivot_point_count]] = [array[pivot_point_count], array[i]]
        }
    }
    [array[start], array[pivot_point_count]] = [array[pivot_point_count], array[start]]
    return pivot_point_count
}


function quickSort(array,left=0,right= array.length-1) {
    if (left < right) {
        let pivotIndex = pivot(array,left,right)
        quickSort(array,left,pivotIndex-1)
        quickSort(array,pivotIndex+1,right)
    }
    return array
    
}
console.log(quickSort([444,222,1,2222,4,257,9222,3]))