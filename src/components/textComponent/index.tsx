import React from 'react'
import { TextComponent } from './style'

type Props ={
  children: JSX.Element[];
}
const index = ({children}: Props) => {
  return (
    <TextComponent>{children}</TextComponent>
  )
}

export default index