import React, { useState } from 'react'



type Props = {
}

const LevelOne: React.FC<Props> = () => {
  const [query, setQuery] = useState('');


  // This function is called when the input changes
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value;
    setQuery(enteredName);
  };
  function fetchPreviousPrimeNumber(num: number) {
    if (isNaN(num))
      return 0;
    let greater = 0;
    let isPrime = (num: number) => {
      for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
      return num > 1;
    }
    function getPrevPrime(num: number) {
      for (let count = num - 1; ; --count) {
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
  return (
    <div>
      <form className='Form'>
        <div>
          <input
            value={query}
            onChange={inputHandler}
            placeholder="Enter Number"
          />
          <p>{query}</p>
          <p>{fetchPreviousPrimeNumber(Number(query))}</p>
        </div>
      </form>
    </div>
  )
}

export default LevelOne