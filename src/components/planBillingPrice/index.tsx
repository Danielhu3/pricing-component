import React from 'react'
import { PlanBillingPrice } from './style'

type Props = {
  price:number;
  yearlyBilling: boolean;
}
const index = ({price, yearlyBilling}:Props) => {
  if(yearlyBilling){
    price *= 12 * 0.75;
  }
  return (
    <PlanBillingPrice>${price}.00</PlanBillingPrice>
  )
}

export default index