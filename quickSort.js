// ---------------------------------------Helper Function------------------------------------------------
function pivot(array)
{
    pivot_point = 0
    pivot_point_count = 0
    pivot_point_swap = 1
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[pivot_point]){
            pivot_point_count++;
            [array[i], array[pivot_point_swap]] = [array[pivot_point_swap], array[i]]
            pivot_point_swap++
        }
    }
    [array[pivot_point], array[pivot_point_count]] = [array[pivot_point_count], array[pivot_point]]
    console.log(array)
    return pivot_point_count
}

console.log(pivot([5,2,1,8,4,7,6,3]))