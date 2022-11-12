import React from 'react'
import { PlanBillingPrice } from './style'

type Props = {
  price:number;
}
const index = ({price}:Props) => {
  return (
    <PlanBillingPrice>${price}.00</PlanBillingPrice>
  )
}

export default index