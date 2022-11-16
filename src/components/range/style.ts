import styled from "styled-components";
import icon from '../../images/icon-slider.svg';
export const Range = styled.input.attrs((props: {value: number}) => props)`
    grid-area: range;
    
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 0.8rem;
    border-radius: 0.8rem;
    outline: none;
    background: ${(props) =>
            `linear-gradient(to right,
             hsl(174, 77%, 80%) 0%,
             hsl(174, 77%, 80%) ${props.value *25}%,
             hsl(224, 65%, 95%) ${props.value *25}%,
             hsl(224, 65%, 95%) 100%);`};

        

    
    &::-webkit-slider-thumb{
        -webkit-appearance: none;
        height: 3.5rem;
        width: 3.5rem;

        background-color: hsl(174, 86%, 45%);
        background-image: url(${icon});
        background-repeat: no-repeat;
        background-position:center;

        box-shadow: 3px 10px 5px 5px hsla(174, 77%, 80%, 0.4);
        border-radius: 50%;
        cursor: pointer;


        
        &:active{
            cursor: grabbing;
            background-color: #0caa9b;
        }
    }

   

    &::-moz-range-thumb{
        -moz-appearance: none;

        height: 3.5rem;
        width: 3.5rem;
        background-color: hsl(174, 86%, 45%);
        box-shadow: 3px 10px 5px 5px hsla(174, 77%, 80%, 0.4);
        border-radius: 50%;
        cursor: pointer;
        
        &:active{
            cursor: grabbing;
            background-color: #0caa9b;
        }
    }

    &::-ms-thumb{
        appearance: none;

        height: 3.5rem;
        width: 3.5rem;
        background-color: hsl(174, 86%, 45%);
        box-shadow: 3px 10px 5px 5px hsla(174, 77%, 80%, 0.4);
        border-radius: 50%;
        cursor: pointer;
        
        &:active{
            cursor: grabbing;
            background-color: #0caa9b;
        }
    }

   

   

    
  

`