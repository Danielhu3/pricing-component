import React from 'react'
import { PaymentRadioInput } from './style'

interface HandleChangeInterface {
  target: HTMLInputElement;
}
const Index = () => {
  const [checked, setChecked] = React.useState(false)

  function handleChange(event: HandleChangeInterface){
    setChecked(event.target.checked);
    console.log(checked)
  }
  return (
    <PaymentRadioInput type='checkbox' aria-checked='false' checked={checked} onChange={handleChange}></PaymentRadioInput>
  )
}

export default Index