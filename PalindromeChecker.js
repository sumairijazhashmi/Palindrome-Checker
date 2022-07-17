function palindrome(str) {
    str = cleanString(str);
    if(str.length <= 1)
    {
        return true;
    }
    if(str[0] === str[str.length - 1])
    {
       let smaller = str.slice(1, str.length - 1);
       return palindrome(smaller); 
    }
    return false;
    
}

function cleanString(str)
{
    str = str.toLowerCase();
    str = str.replace(/[^a-z0-9]/gi, "");
    return str;
}

console.log(palindrome("_eye"));