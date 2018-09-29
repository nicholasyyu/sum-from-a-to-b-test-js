
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if (fromN === toN) {
    return fromN;
  }

  let result = fromN + 1;

  if(result <= toN){
  	return fromN + sum(result, toN);
  }

}
console.log(sum(4,8));
module.exports = sum;