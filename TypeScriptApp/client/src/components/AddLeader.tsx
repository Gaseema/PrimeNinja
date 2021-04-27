import React, { useState } from 'react'
import {fetchPreviousPrimeNumber} from '../utils/PrimeNumber'



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
  return (
    <form className='Form' onSubmit={(e) => saveLeader(e, formData)}>
      <div>
        <div>
          <label htmlFor='name'>Name</label>
          <input onChange={handleForm} type='text' id='name' />
          <input
            value={query}
            onChange={inputHandler}
            placeholder="Enter Numberrr"
          />
          <p>{query}</p>
          <p>{fetchPreviousPrimeNumber(Number(query))}</p>
        </div>
        <div>
          <label htmlFor='score'>Score</label>
          <input onChange={handleForm} type='number' id='score' disabled/>
        </div>
      </div>
      <button disabled={formData === undefined ? true : false} >Add Leader</button>
    </form>
  )
}

export default AddLeader