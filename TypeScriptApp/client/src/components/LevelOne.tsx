import React, { useState } from 'react'
import {fetchPreviousPrimeNumber} from '../utils/PrimeNumber'



type Props = {
}

const LevelOne: React.FC<Props> = () => {
  const [query, setQuery] = useState('');
  
  // This function is called when the input changes
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredValue = event.target.value;
    if (isNaN(Number(enteredValue))) {
      return 0;
    }
    setQuery(enteredValue);
  };
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