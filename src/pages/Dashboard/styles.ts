import styled from 'styled-components'

export const Title = styled.h1 ` 
    font-size: 38px;
    color: #343434;
    max-width: 400px;
    line-height: 56px;

    margin-top: 80px;

`;

export const Form = styled.form `
    margin-top: 40px;
    max-width: 700px;

    display: flex;

    input {
        flex: 1;
        height: 50px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #333;

        &:focus{
            outline: none;
        }

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 210px;
        height: 50px;
        background: #2ecc71;
        border: 0;
        border-radius: 0 5px 5px 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
            background: #27ae60;
            color: #fff;
        }

    }

`;

export const Repositories = styled.div `
    margin-top: 80px;
    max-width: 700px;

    a {
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;

        display: flex;
        align-items: center;
        transition: transform 0.2s;

        &:hover {
            transform: translateX(10px);
        }
        // quando há um elemento precedido do outro que há uma mesma estilização..
        & + a {
            margin-top: 10px;
        }
        
        img {
            width:64px;
            height: 64px;
            border-radius:50%;
        }

        div {
            margin-left: 16px;

            strong {
            font-size: 20px;
            color: #3D3D4D;

            }

            p {
            margin-top: 10px;
            font-size: 18px;
            color: #A8A8B3;

            }
        }

        svg {
            margin-left: auto;
        }
    }
    

   
`;