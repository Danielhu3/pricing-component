import React from 'react'
import { PlanPageviews } from './style'

type Props = {
  pageviews: string;
}
const index = ({pageviews}:Props) => {
  return (
    <PlanPageviews>{pageviews} PAGEVIEWS</PlanPageviews>
  )
}

export default index