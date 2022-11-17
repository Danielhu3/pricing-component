import styled from "styled-components";
export const AdditionalInfo = styled.div`
    grid-area: additional-info;

    display: flex;
    justify-content: space-between;

    @media screen and (max-width:570px){
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
    `