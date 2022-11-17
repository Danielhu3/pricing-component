import React from 'react';
import AdditionalInfo  from './components/additionalInfo/';
import AdditionalInfoButton from './components/additionalInfoButton/';
import AdditionalInfoItem  from './components/additionalInfoItem/';
import AdditionalInfoItems  from './components/additionalInfoItems/';
import Card  from './components/card/';
import PaymentDiscount  from './components/paymentDiscount/';
import PaymentInfo  from './components/paymentInfo/';
import PaymentType  from './components/paymentType/';
import PlanBillingType  from './components/planBillingType/';
import PlanInfo  from './components/planInfo/';
import PlanPageviews  from './components/planPageviews/';
import PlanBillingPrice  from './components/planBillingPrice/';
import Range  from './components/range/';
import TextComponent  from './components/textComponent/';
import TextParagraph  from './components/textParagraph/';
import TextTitle  from './components/textTitle/';
import GlobalStyle from './styles/global'
import PlanBilling  from './components/PlanBilling/';
import HorizontalRow  from './components/horizontalRow/';
import PaymentRadioInput  from './components/paymentRadioInput';
import PaymentRadioLabel  from './components/paymentRadioLabel/';
import PaymentRadioSpan  from './components/paymentRadioSpan/';

const plans = [
  {
    pageviews: '10K',
    price: 8
  },

  {
    pageviews: '50K',
    price: 12
  },

  {
    pageviews: '100K',
    price: 16
  },
  
  {
    pageviews: '500K',
    price: 24
  },
  
  {
    pageviews: '1M',
    price: 36
  },
  

]
function App() {
  const [rangeValue,setRangeValue] = React.useState(2);
  const [pageviews,setPageviews] = React.useState('')
  const [price,setPrice] = React.useState(0)
  const [yearlyBilling, setYearlyBilling] = React.useState(false)

  React.useEffect(()=>{
    const actualPlan= plans.at(rangeValue);
    if(actualPlan){
      setPageviews(actualPlan.pageviews)
      setPrice(actualPlan.price)
    }
    
  },[rangeValue])

  const [width, setWidth] = React.useState(window.innerWidth);

  function updateWidth(){
    setWidth(window.innerWidth)
  }

  React.useEffect(()=>{
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth);
  },[width])



  return (
    <div className="App">
      <GlobalStyle />
  

      <TextComponent>
        <TextTitle />
        <TextParagraph />
      </TextComponent>

      <Card>
        <PlanInfo>
          <PlanPageviews pageviews={pageviews}/>
          <PlanBilling>
            <PlanBillingPrice price={price} yearlyBilling = {yearlyBilling} />
            <PlanBillingType yearlyBilling = {yearlyBilling}/>
          </PlanBilling>
         
        </PlanInfo>

        <Range rangeValue={rangeValue} setRangeValue={setRangeValue}/>

        <PaymentInfo>
          <PaymentType>Monthly Billing</PaymentType>

          <PaymentRadioLabel>
            <PaymentRadioInput setYearlyBilling={setYearlyBilling} />
            <PaymentRadioSpan />
          </PaymentRadioLabel>

          <PaymentType>Yearly Billing</PaymentType>
          <PaymentDiscount>{width > 570 ? '25% discount': '-25%'}</PaymentDiscount>
        </PaymentInfo>

        <HorizontalRow />

        <AdditionalInfo>
          <AdditionalInfoItems>
            <AdditionalInfoItem>Unlimited websites</AdditionalInfoItem>
            <AdditionalInfoItem>100% data ownership</AdditionalInfoItem>
            <AdditionalInfoItem>Email reports</AdditionalInfoItem>
          </AdditionalInfoItems>

          <AdditionalInfoButton />
        </AdditionalInfo>

      </Card>
      
  
    </div>
  );
}

export default App;
/* 
  Grid Rows:
  - plan info
  - range
  - payment select
  - horizontal row
  - additional info

  -> on mobile more rows will be created
  
*/