function reverseString(message){
    // wirte your code here
    var splitStr = message.split("");
    var reverseArr = splitStr.reverse();
    var joinArr = reverseArr.join("");
    return joinArr;
  }
  reverseString('hello'); // should return 'olleh'