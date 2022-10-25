import { useEffect, useState } from 'react';
import styles from './select.module.css'

export type SelectOptons = {
  label: string;
  value: number;
}

interface Props {
  value?: SelectOptons;
  options: SelectOptons[];
  onChange: (value: SelectOptons | undefined) => void

}
const Select = ({ value, onChange, options }: Props) => {
  const [show, setShow] = useState(false)
  const [highLightedIndex, setHighLightedIndex] = useState(0)
  const clearOption = () => {
    onChange(undefined)
  }

  const selectOptions = (option: SelectOptons) => {

   if(option === value)
   {
     
    onChange(option)
  
  }



  }
  const isOptionSelected = (option: SelectOptons) => {
    return option === value
  }
  useEffect(() => {
    if(show){
      setHighLightedIndex(0)
    }
  },[show])
  return (
    <div className={styles.container} tabIndex={0} onClick={() => setShow(c => !c)}
      onBlur={() => setShow(false)}
    >
      <span className={styles.value}> {value?.label} </span>
      <button className={styles["close-btn"]} onClick={(e) => {
        e.stopPropagation()
        clearOption()
      }}>&times;</button>
      <div className={styles.divider}></div>
      <div className={styles.caret} ></div>
      <ul className={`${styles.options} ${show ? styles.show : ""}`}>
        {
          options.map((option, index) => (
            <li className={`${styles.option} ${isOptionSelected(option) ? styles.selected : ""} ${index === highLightedIndex ? styles.highlighted : ""}`} value={option.value}
              onClick={() => selectOptions(option)}
              onMouseEnter={() => setHighLightedIndex(index)}

            >{option.label}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Select