// ---------------------------------------Naive Selection sort ------------------------------------------
function naiveSelectionSort(array)
{
    let small;
    console.log(array)
    for (let i = 0; i < array.length; i++) {
        small = i
        for (let j = i+1; j < array.length; j++) {
            if (array[small] > array[j]) small = j
        }
        [array[i],array[small] ]= [array[small],array[i]]
    }
    console.log(array)
}


naiveSelectionSort([8,177,267,3,433,5246,16,7])