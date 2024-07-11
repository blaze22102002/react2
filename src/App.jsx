import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Textinput from './components/Textinput'
import Apiget from './components/Apiget'

import Cardapi from './components/Cardapi'

function App() {const [count, setCount] = useState(0)

  return (
    <>
  
  {/* <Textinput /> */}
      {/* <Apiget/> */}
      <Cardapi/>
    </>
  )
}

export default App
