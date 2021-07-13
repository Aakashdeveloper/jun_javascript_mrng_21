1221
12321
123412

var palindrome = (data) => {
    var rem, temp, final = 0;
    temp = data;
    while(data>0){
        rem = data%10;
        data = parseInt(data/10);
        final = final*10+rem
    }
    if(final == temp){
        console.log(`Number ${temp} is palindrome`)
    }else{
        console.log(`Number ${temp} is not a palindrome`)
    }
}

palindrome(1221)
Number 1221 is palindrome
undefined
palindrome(12231)
Number 12231 is not a palindrome
