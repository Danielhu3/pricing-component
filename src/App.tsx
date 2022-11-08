import React from 'react';
import  AdditionalInfo  from './components/additionalInfo/';
import  AdditionalInfoButton from './components/additionalInfoButton/';
import  AdditionalInfoItem  from './components/additionalInfoItem/';
import  AdditionalInfoItems  from './components/additionalInfoItems/';
import  Card  from './components/card/';
import  PaymentDiscount  from './components/paymentDiscount/';
import PaymentInfo  from './components/paymentInfo/';
import  PaymentType  from './components/paymentType/';
import  PlanInfo  from './components/planInfo/';
import  PlanPageviews  from './components/planPageviews/';
import  PlanPrice  from './components/planPrice/';
import  Range  from './components/range/';
import TextComponent  from './components/textComponent/';
import TextParagraph  from './components/textParagraph/';
import TextTitle  from './components/textTitle/';
import GlobalStyle from './styles/global'

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
          <PlanPrice />
        </PlanInfo>

        <Range />

        <PaymentInfo>
          <PaymentType>Monthly Billing</PaymentType>
          <PaymentType>Yearly Billing</PaymentType>
          <PaymentDiscount></PaymentDiscount>
        </PaymentInfo>

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
  - additional info

  -> on mobile more rows will be created
  


 

  
  
  

  Start my trial
*/