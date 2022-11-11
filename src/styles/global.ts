import {createGlobalStyle} from 'styled-components'
import background from '../images/bg-pattern.svg'

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600;800&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Manrope', sans-serif;
        box-sizing: border-box;
    }
    html{
        font-size: 62.5%;
    }

    body{
        font-size: 1.5rem;
        font-weight: 600;
    }

    .App{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 3rem;

        height: 100vh;

        background:hsl(230, 100%, 99%);
        background: url(${background});
        background-repeat: no-repeat;

        
        

        


    }
`