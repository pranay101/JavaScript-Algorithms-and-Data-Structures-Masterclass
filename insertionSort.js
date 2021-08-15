// ---------------------------------------Naive insertion sort ------------------------------------------
function insertionSort(array)
{ 
    console.log("hello")
    console.log(array)
    for (let i = 1; i < array.length; i++) {
        let currentVal = array[i]
	    for(var j = i-1; j >= 0 && array[j]>currentVal; j--)
	    {
            array[j+1] = array[j]
        }
        array[j+1] = currentVal
    }
    console.log(array)
}

insertionSort([8,177,267,3,433,5246,16,7])
