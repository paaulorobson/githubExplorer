import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import {Title, Form, Repositories} from './styles'

// dizendo que o react é uma function component (padrão quando se usa Typescript)
const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form>
                <input type="text" placeholder="Digite o nome do repositório"/>
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="">
                    <img src="https://avatars3.githubusercontent.com/u/36008926?s=460&u=93504f64ca3f549ab847b79393b03e11a752f659&v=4" alt="Paulo Robson"/>
                    <div>
                        <strong>paaulorobson/pokerapi</strong>
                        <p>Interface que integra com api do pokemon</p>
                    </div>

                    <FiChevronRight size={20} color="#C9C9D4"/>
                </a>

                <a href="">
                    <img src="https://avatars3.githubusercontent.com/u/36008926?s=460&u=93504f64ca3f549ab847b79393b03e11a752f659&v=4" alt="Paulo Robson"/>
                    <div>
                        <strong>paaulorobson/pokerapi</strong>
                        <p>Interface que integra com api do pokemon</p>
                    </div>

                    <FiChevronRight size={20} color="#C9C9D4"/>
                </a>

                <a href="">
                    <img src="https://avatars3.githubusercontent.com/u/36008926?s=460&u=93504f64ca3f549ab847b79393b03e11a752f659&v=4" alt="Paulo Robson"/>
                    <div>
                        <strong>paaulorobson/pokerapi</strong>
                        <p>Interface que integra com api do pokemon</p>
                    </div>

                    <FiChevronRight size={20} color="#C9C9D4"/>
                </a>
            </Repositories>
        </>
        )
}

export default Dashboard
