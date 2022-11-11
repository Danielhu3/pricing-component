import styled from "styled-components";
export const PaymentRadioLabel = styled.label`
    position: relative;
    display: inline-block;
    width: 4.3rem;
    height: 2.2rem;


    input:checked + span{
        background-color: hsl(174, 86%, 45%);
    }

    input:checked + span::before{
        transform: translateX(18px);

    }
   
`