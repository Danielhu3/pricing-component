import React from 'react'
import { Range } from './style'

type Props = {
  rangeValue:number;
  setRangeValue: React.Dispatch<React.SetStateAction<number>>;
}
const Index = ({rangeValue, setRangeValue}: Props) => {

  interface Event {
    target: HTMLInputElement;
  }
  function handleChange(e:Event){
    setRangeValue(Number(e.target.value))

  }

  
  return (
    <Range type='range' min='0' max='4' step='1' value={rangeValue} onChange={(e)=> handleChange(e)}></Range>
  )
}

export default Index