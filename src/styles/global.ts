import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600;800&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Manrope', sans-serif;
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

        height: 100vh;

        gap: 3rem;
    }
`