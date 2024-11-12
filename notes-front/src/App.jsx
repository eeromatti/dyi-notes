// import React from 'react'
import './App.css'
import { useState } from 'react'

const App = () => {

  // const [list, setList] = useState(['juttu1', 'juttu2'])
  
  const Header = () => {
    return (
      // <p className='big'>
      //   nakki
      // </p>
      <form> 
        <input type="text" className='header-input'/>
      </form>
    )
  }
  
  return (
    <div>
      <Header/>
    </div>
  )
}

export default App
