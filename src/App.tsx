import { useState } from 'react'
import './App.css'
import Select from './Select'
import {SelectOptons} from './Select'


const options = [
  {label:"Firt",value:1},
  {label:"Firt",value:1},
  {label:"Firt",value:1},
  {label:"Firt",value:1}
]
function App() {
const [value, setValue] = useState<SelectOptons | undefined>(options[0])

  return (
    <div className="App">
     
     <Select options = {options} value = {value} onChange = {o => setValue(o)}/>

    </div>
  )
}

export default App
