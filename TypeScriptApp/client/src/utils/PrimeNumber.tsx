export function fetchPreviousPrimeNumber(num: number) {
  var greater = 0;
  var isPrime = (num: number) => {
    for (let i = 2; i < num; i++)
      if (num % i === 0) return false;
    return num > 1;
  }
  function getPrevPrime(num: number) {
    for (var count = num - 1; ; --count) {
      if (count <= 0)
        break;
      if (isPrime(count)) {

        greater = count;
        break;
      }
    }
  }
  getPrevPrime(num)

  return greater;
}