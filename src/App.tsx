import React from 'react';
import  AdditionalInfo  from './components/additionalInfo/';
import  AdditionalInfoButton from './components/additionalInfoButton/';
import  AdditionalInfoItem  from './components/additionalInfoItem/';
import  AdditionalInfoItems  from './components/additionalInfoItems/';
import  Card  from './components/card/';
import  PaymentDiscount  from './components/paymentDiscount/';
import PaymentInfo  from './components/paymentInfo/';
import  PaymentType  from './components/paymentType/';
import  PlanBillingType  from './components/planBillingType/';
import  PlanInfo  from './components/planInfo/';
import  PlanPageviews  from './components/planPageviews/';
import  PlanBillingPrice  from './components/planBillingPrice/';
import  Range  from './components/range/';
import TextComponent  from './components/textComponent/';
import TextParagraph  from './components/textParagraph/';
import TextTitle  from './components/textTitle/';
import GlobalStyle from './styles/global'
import PlanBilling  from './components/PlanBilling/';
import  HorizontalRow  from './components/horizontalRow/';

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <TextComponent>
        <TextTitle />
        <TextParagraph />
      </TextComponent>

      <Card>
        <PlanInfo>
          <PlanPageviews />
          <PlanBilling>
            <PlanBillingPrice />
            <PlanBillingType />
          </PlanBilling>
         
        </PlanInfo>

        <Range />

        <PaymentInfo>
          <PaymentType>Monthly Billing</PaymentType>
          <PaymentType>Yearly Billing</PaymentType>
          <PaymentDiscount></PaymentDiscount>
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