import React from 'react'
import { PlanBilling } from './style'

type Props = {
    children: JSX.Element[];
}
const index = ({children}: Props) => {
  return (
    <PlanBilling>{children}</PlanBilling>
  )
}

export default index