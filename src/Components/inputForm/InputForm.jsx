import React from 'react'
import './input.style.css'

const InputForm = ({handleSubmit, ...props}) => {
  return (
    <div className='form-element'>
      <form onSubmit={handleSubmit}>
        <input {...props} className='input-element' placeholder='Pesquisar...' />
        <button className='btn-pesquisar'>Pesquisar</button>
      </form>
    </div>
  )
}

export default InputForm
