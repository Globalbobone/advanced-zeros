module.exports = function getZerosCount(number, base) {
  var count = 0; 
  var expon = 1;
  var n = base;

  for (var i = 2; i < base; i++){
    if (base % i == 0){
      n = i;
    }
    
  }
  while (Math.pow(n, expon) < number){
    count += parseInt(number / Math.pow(n, expon))
    expon++;
  }
  return count;
}