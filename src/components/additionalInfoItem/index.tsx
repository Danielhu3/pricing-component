import React from 'react'
import { AdditionalInfoItem } from './style'
type Props = {
    children: string;
}
const index = ({children}: Props) => {
  return (
    <AdditionalInfoItem>{children}</AdditionalInfoItem>
  )
}

export default index