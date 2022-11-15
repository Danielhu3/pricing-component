import React from 'react'
import { PaymentRadioInput } from './style'

interface HandleChangeInterface {
  target: HTMLInputElement;
}

type Props = {
  setYearlyBilling: React.Dispatch<React.SetStateAction<boolean>>;
}

const Index = ({setYearlyBilling}:Props) => {
  const [checked, setChecked] = React.useState(false)

  function handleChange(event: HandleChangeInterface){
    setChecked(event.target.checked);

    setYearlyBilling((actualValue)=>!actualValue)
  }
  return (
    <PaymentRadioInput type='checkbox' aria-checked={checked} checked={checked} onChange={handleChange}></PaymentRadioInput>
  )
}

export default Index