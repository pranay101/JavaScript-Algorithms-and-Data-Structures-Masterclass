// ---------------------------------------------Linear Searching-------------------------------------------------

function linear_search(arr,element)
{
    for(let i =0; i<arr.length; i++)
    {
        if(arr[i] === element)
            return i
    }
    return -1
}

// Similar function is javaScript that uses linear linear_search
// find()
// indexof()
// findindex()
// includes()
// --------------------------------------------------------------------------------------------------------------



// ---------------------------------------------Binary Searching-------------------------------------------------

function binary_search(arr,element)
{
    let high = arr.length-1;
    let low = 0
    let middle ;
    
    while (low < high)
    {
        middle = Math.ceil((low+high)/2);
        if(arr[middle] === element)
            return middle
        if(arr[middle] > element)
            high =  middle
        else(arr[middle] < element)
            low = middle
    }
    return -1
}

// --------------------------------------------------------------------------------------------------------------


// console.log(linear_search([8,6,3,2,6,8,3],2))
// console.log(linear_search([8,6,3,2,6,8,3],1))

console.log(binary_search([2,3,5,6,7,8,18],8))
console.log(binary_search([2,3,5,6,7,8,18],4))
