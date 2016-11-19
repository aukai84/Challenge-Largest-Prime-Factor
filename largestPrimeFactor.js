exports.largestPrimeFactor = function(factoredNum){

  function isPrime(num) {
    //go down every number betwen 2 and num, if any are divisible (mod i === 0)
    // memoization
    //evaluating the Big-O notation of the algorithm(s)
    for (var i = 2; i <= num/ 2; i++) {
      if ( num % i === 0) {
        //found a factor is not prime
        return false;
      }
      }
      return true;
    }


  var primeNumber = 0;
  //for loop from 2 to n
  for (var i = 2; i < factoredNum; i++) {
    //must be evenly divisible by n
    //must also be prime
    //then set primeNubmer to i
    if (factoredNum % i === 0 && isPrime(i)) {
      primeNubmer = i;
    }
  }
  return primeNubmer;
};

