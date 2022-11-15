import React from 'react'
import { PlanBillingType } from './style'

type Props = {
  yearlyBilling: boolean;
}
const index = ({yearlyBilling}: Props) => {
  return (
    <PlanBillingType>/ {yearlyBilling ? 'year' : 'month'}</PlanBillingType>
  )
}

export default index