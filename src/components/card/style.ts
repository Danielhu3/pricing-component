import styled from "styled-components";
export const Card = styled.div`
    background-color: hsl(0, 0%, 100%);
    box-shadow: 5px 10px 10px 2px hsla(240, 18%, 77%, 0.4);

    display: grid;
    grid-template-areas: 'plan-info'
                        'range'
                        'payment-select'
                        'horizontal-row'
                        'additional-info';

    gap: 2.5rem;
    padding: 5rem;
    width: 50rem;

`