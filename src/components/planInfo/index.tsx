import React from 'react'
import { PlanInfo } from './style'

type Props = {
    children: JSX.Element[];
}
const index = ({children}: Props) => {
  return (
    <PlanInfo>{children}</PlanInfo>
  )
}

export default index