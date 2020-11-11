function palindrome(message){
    // wirte your code here
  	var lowStr = message.toLowerCase();
  	var reverseStr = lowStr.split('').reverse().join(''); 
  	return reverseStr === lowStr;
  }
  palindrome('hello'); // should return false
  palindrome('abcba'); // should return true