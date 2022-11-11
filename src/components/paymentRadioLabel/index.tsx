import React from 'react'
import { PaymentRadioLabel } from './style'

type Props = {
    children: JSX.Element[];
}
const index = ({children}: Props) => {
  return (
    <PaymentRadioLabel>{children}</PaymentRadioLabel>
  )
}

export default index