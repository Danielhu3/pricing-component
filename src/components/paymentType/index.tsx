import React from 'react'
import { PaymentType } from './style'

type Props = {
    children: string;
}
const index = ({children}:Props) => {
  return (
    <PaymentType>{children}</PaymentType>
  )
}

export default index