import styled from "styled-components";
export const PaymentRadioSpan = styled.span`

    background-color: hsl(223, 50%, 87%);
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: .4s;
    border-radius: 3.4rem;

  &::before{
    background-color: #fff;
    bottom: 2px;
    content: "";
    height: 18px;
    left: 4px;
    position: absolute;
    transition: .4s;
    width: 18px;
    border-radius: 50%;
  }

  `