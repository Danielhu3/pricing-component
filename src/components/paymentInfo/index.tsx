import React from 'react'
import { PaymentInfo } from './style'

type Props = {
    children: JSX.Element[]
}
const index = ({children}: Props) => {
  return (
    <PaymentInfo>{children}</PaymentInfo>
  )
}

export default index