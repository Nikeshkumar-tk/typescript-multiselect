import { useState } from 'react'
import './App.css'
import Select from './Select'
import {SelectOptons} from './Select'


const options = [
  {label:"First",value:1},
  {label:"second",value:1},
  {label:"third",value:1},
  {label:"fourth",value:1}
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
