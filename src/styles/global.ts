import {createGlobalStyle} from 'styled-components'

import githubBackground from '../assets/github.svg'

export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #f0f0f5 url(${githubBackground}) no-repeat 70% top; // adiciona a variavel que tem o caminho da imagem
        -webkit-font-smoothing: antialiased; //deixa a fonto mais detalhada
    }

    body, input, button {
        font: 16px Roboto, sans-serif;
    }

    #root {
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    button {
        cursor: pointer;
    }

`;