import React from 'react'
import { AdditionalInfo } from './style'

type Props = {
    children: JSX.Element[];
}
const index = ({children}:Props) => {
  return (
    <AdditionalInfo>{children}</AdditionalInfo>
  )
}

export default index