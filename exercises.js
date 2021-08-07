// -------------------------------------------Helper Functions------------------------------------------------------

function isAlphaNumeric(char) {

    let code = char.charCodeAt(0);
    if (
            !(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)
       ) return false;
    return true;
  };
// ----------------------------------------------------------------------------------------------------------------





// -------------------------------------------Functions------------------------------------------------------

// -------frequency counter-------
// Q-1 given two string, write a function to determine if the second string is an anagram of the first. 
// An anagram is a word, phrase, or name formed by rearranging the leters of another, 
// such as cinema formed by iceman

function isvalidAnagram(string_1, string_2)
{
    let str_resutl = {};
    let str2_result = {};

    if (string_1.length !== string_2.length)
        return false;

    for(var letters of string_1)
    {
        if(isAlphaNumeric(letters))
        {
            letters.toLowerCase();
            str_resutl[letters] = ++str_resutl[letters] || 1;
        }   
    }
    for(var letters of string_2)
    {
        if(isAlphaNumeric(letters))
        {
            letters.toLowerCase();
            str2_result[letters] = ++str2_result[letters] || 1;
        }   
    }
    for(char of string_1)
    {
        if(!(char in str2_result ))
            return false
        if( str2_result[char] !== str_resutl[char] )
            return false
    }
    return true 
}


// -------------------------------------------test cases------------------------------------------------------

if(isvalidAnagram('',''))
{
    console.log("Test passed");
    if(!isvalidAnagram('aaz','zza'))//false
    {
        console.log("Test passed");
        if(isvalidAnagram("anagram","nagaram")) //true
        {
            console.log("Test passed");
            if(!isvalidAnagram("rat","car")) //false
            {
                console.log("Test passed");
                if(!isvalidAnagram("awesome","awesom"))//true
                {
                    console.log("Test passed");
                    if(isvalidAnagram("qwerty","qeywrt"))// true
                    {
                        console.log("Test passed"); 
                        if(isvalidAnagram("texttwisttime","timetwisttext")) //true
                            console.log("Test passed");
                        else
                        console.log("Test Failed");
                    }
                    else
                        console.log("Test Failed");
                }
                else
                    console.log("Test Failed");
            }
            else
                console.log("Test Failed");
        }
        else
            console.log("Test Failed");
    }
    else
        console.log("Test Failed");
} //true


// -----------------------------------------------------------------------------------------------------------