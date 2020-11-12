import React from 'react'
import {useRouteMatch, Link} from 'react-router-dom'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'

import logoImg from "../../assets/logo.svg";

import {Header, RepositoryInfo, Issues} from './styles'

interface RepositoryParams {
    repository: string,

}

// dizendo que o react é uma function component (padrão quando se usa Typescript)
const Repository: React.FC = () => {
    const {params} = useRouteMatch<RepositoryParams>()

    return (
        <>
            <Header>
                <img src={logoImg} alt="Github explorer" />
                <Link to="/">
                    <FiChevronLeft />
                    Voltar
                </Link>
            </Header>

            <RepositoryInfo>
                <header>
                    <img src="https://avatars3.githubusercontent.com/u/36008926?s=460&u=93504f64ca3f549ab847b79393b03e11a752f659&v=4" alt="paaulorobson"/>
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>descrição do repositório</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1085</strong>
                        <span>Stars</span>
                    </li>

                    <li>
                        <strong>48</strong>
                        <span>Forks</span>
                    </li>

                    <li>
                        <strong>67</strong>
                        <span>Issues abertas</span>
                    </li>
                </ul>

            </RepositoryInfo>

            <Issues>
                <Link to="qualquer coisa">
                    <div>
                        <strong>qualquer coisa</strong>
                        <p>qualquer coisa</p>
                    </div>
        
                    <FiChevronRight size={20} color="#C9C9D4" />
                </Link>
            </Issues>
        </> 
    )
}

export default Repository
