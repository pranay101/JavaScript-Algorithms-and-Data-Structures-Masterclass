// ---------------------------------------Helper Function------------------------------------------------
function merge(arr1,arr2)
{
    let arr_final= [];
    var i =0, j=0;
    while (i < arr1.length || j < arr2.length) 
    {
        if(i < arr1.length)
		{
        	if (arr1[i] < arr2[j]) 
			{
				arr_final.push(arr1[i])
				i++
			}
		}
		else
		{
			arr_final.push(arr2[j])
			j++
		}
		if(j <= arr2.length)
		{
			if (arr1[i] > arr2[j])
			{
				arr_final.push(arr2[j])
				j++
			}
		}
	    else{
		    arr_final.push(arr1[i])
		    i++
	    }

    }
    return arr_final
}

console.log(merge([1,10,50],[2,14,99,100,123,13424,454355]))
