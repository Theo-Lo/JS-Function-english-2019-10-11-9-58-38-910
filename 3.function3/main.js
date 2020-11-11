function alphabetSort(message){
    // wirte your code here
    var splitStr = message.split("");
    var sortArr = splitStr.sort();
    var joinArr = sortArr.join("");
    return joinArr;
  }
  alphabetSort('hello'); // should return 'ehllo'