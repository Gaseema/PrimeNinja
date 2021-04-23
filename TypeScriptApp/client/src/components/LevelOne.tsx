import React, { useState } from 'react'



type Props = {
}

const LevelOne: React.FC<Props> = () => {
  const [query, setQuery] = useState('');
  
  // This function is called when the input changes
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value;
    if (isNaN(Number(enteredName))) {
      return 0;
    }
    setQuery(enteredName);
  };
  function fetchPreviousPrimeNumber(num: number) {
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
      <div className='levelInfo'>
        <p>Enter a positive number on the input below and I will return the highest prime number lower than the input number</p>
      </div>
      <form className='Form'>
        <div>
          <input
            value={query}
            onChange={inputHandler}
            placeholder="Enter Number"
          />
          <div className='levelOneResults'>
            <p>Your Input: {query}</p>
            <p>Result: {fetchPreviousPrimeNumber(Number(query))}</p>
          </div>
          {/* <p className='invalidInput'>{validNum === true ? 'Enter a valid number' : ''}</p> */}
        </div>
      </form>
    </div>
  )
}

export default LevelOne