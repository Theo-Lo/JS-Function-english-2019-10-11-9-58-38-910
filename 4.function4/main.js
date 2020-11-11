function countWords(message){
    // wirte your code here
    var splitStr = message.split(" ");
    var count = splitStr.length;
    return count;
  }
  countWords('Good morning, I love JavaScript.'); // should return 5