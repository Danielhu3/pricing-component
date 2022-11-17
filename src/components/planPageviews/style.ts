import styled from "styled-components";
export const PlanPageviews = styled.p`
    color: hsl(225, 20%, 60%);
    
    grid-area: plan-info;
    align-self: center;

    @media screen and (max-width:570px){
        grid-area: pageviews;
        justify-self: center;
    }
`