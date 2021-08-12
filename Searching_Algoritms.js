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




console.log(linear_search([8,6,3,2,6,8,3],2))
console.log(linear_search([8,6,3,2,6,8,3],1))