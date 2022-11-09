import styled from "styled-components";
import icon from '../../images/icon-check.svg'
export const AdditionalInfoItems = styled.ul`
    list-style: url(${icon});
    color: hsl(225, 20%, 60%);
    font-size: 1.2rem;
    
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`