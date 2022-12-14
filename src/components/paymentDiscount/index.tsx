import React from 'react'
import { PaymentDiscount } from './style'

type Props = {
  children: string;
}
const index = ({children}: Props) => {
  return (
    <PaymentDiscount>{children}</PaymentDiscount>
  )
}

export default index