import React, { useState } from 'react'

type Props = { 
  saveLeader: (e: React.FormEvent, formData: ILeadersBoard | any) => void 
}

const AddLeader: React.FC<Props> = ({ saveLeader }) => {
  const [formData, setFormData] = useState<ILeadersBoard | {}>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form className='Form' onSubmit={(e) => saveLeader(e, formData)}>
      <div>
        <div>
          <label htmlFor='name'>Name</label>
          <input onChange={handleForm} type='text' id='name' />
        </div>
        <div>
          <label htmlFor='score'>Score</label>
          <input onChange={handleForm} type='number' id='score' />
        </div>
      </div>
      <button disabled={formData === undefined ? true: false} >Add Leader</button>
    </form>
  )
}

export default AddLeader