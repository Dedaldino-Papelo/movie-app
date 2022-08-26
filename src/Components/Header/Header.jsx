import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './Header.style.css'
import InputForm from '../inputForm/InputForm'

const Header = () => {
    const [inputText, setInput] = useState('')
    const navigate = useNavigate()

   const Handlesubmit = (e) => {
    e.preventDefault()

    navigate(`search?q=${inputText}`)
    setInput("")
   }

    return (
        <div className='Header'>
            <div className='overlay'>
            <div className='content'>
                <h1>Welcome to The Movies</h1>
                <p>Ouse, Desfrute e aproveite os melhores filmes de sempre <br /> Explore já.</p>
                <InputForm
                handleSubmit={Handlesubmit}
                value={inputText}
                onChange={(event) => setInput(event.target.value)}
                 />
            </div>
            </div>
        </div>
    )
}

export default Header
