module.exports = function getZerosCount(number, base) {
  let exp = 0;
  let n = base;
  let v = 0;
  let m = 0;
  let z = 0;
  let res = number;

  for (let i = 2; i <= base; i++){
    if (n % i == 0){
      exp = 0;
      while (n % i == 0){
        n = (n / i);
        exp++;} 
      v = 0;
      m = number
      while (m / i > 0){
        v = v + Math.floor(m / i);
        m = (m / i);}
      z = (v / exp);
      if (res > z){
        res = z;}
    }
  }
  return res;
}

