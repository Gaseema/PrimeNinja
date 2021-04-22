import React, { useState } from 'react'



type Props = {
  saveLeader: (e: React.FormEvent, formData: ILeadersBoard | any) => void
}

const AddLeader: React.FC<Props> = ({ saveLeader }) => {
  const [formData, setFormData] = useState<ILeadersBoard | {}>()
  const [query, setQuery] = useState('');

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {

    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  // This function is called when the input changes
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value;

    setQuery(enteredName);
  };
  function doMath(num: number) {
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
  return (
    <form className='Form' onSubmit={(e) => saveLeader(e, formData)}>
      <div>
        <div>
          <label htmlFor='name'>Name</label>
          <input onChange={handleForm} type='text' id='name' />
          <input
            value={query}
            onChange={inputHandler}
            placeholder="Search products"
            className="input"
          />
          <p>{query}</p>
          <p>{doMath(Number(query))}</p>
        </div>
        <div>
          <label htmlFor='score'>Score</label>
          <input onChange={handleForm} type='number' id='score' />
        </div>
      </div>
      <button disabled={formData === undefined ? true : false} >Add Leader</button>
    </form>
  )
}

export default AddLeader