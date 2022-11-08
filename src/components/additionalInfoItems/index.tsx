import React from 'react'
import { AdditionalInfoItems } from './style'

type Props = {
  children: JSX.Element[];
}
const index = ({children} : Props) => {
  return (
    <AdditionalInfoItems>{children}</AdditionalInfoItems>
  )
}

export default index