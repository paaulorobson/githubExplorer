import React, { useState, FormEvent } from "react";
import { FiChevronRight } from "react-icons/fi";
import api from "../../services/api";

import logoImg from "../../assets/logo.svg";

import { Title, Form, Repositories, Error } from "./styles";

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;

    }
}

// dizendo que o react é uma function component (padrão quando se usa Typescript)
const Dashboard: React.FC = () => {
  const [input, setInput] = useState('')
  const [inputError, setInputError] = useState('')  
  const [repositorios, setRepositorios] = useState<Repository[]>([])

 async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
      //adição de um novo repositório..
      //consumir api do github.
      //salvar novo repositório no estado.
      event.preventDefault()
      if(!input) {
        setInputError('Digite o autor/nome do repositório')
        return
      }

      try {
        const response = await api.get<Repository>(`repos/${input}`)
        const repository = response.data
  
        setRepositorios([...repositorios, repository])
        setInput('')
        setInputError('')
      } catch(err){
        setInputError('Erro na busca por esse repositório')
        
      }
     
  }

  return (
    <>
        <img src={logoImg} alt="Github explorer" />
        <Title>Explore repositórios no Github</Title>

        <Form hasError={!!inputError} onSubmit={handleAddRepository}>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)} 
                type="text" 
                placeholder="Digite o nome do repositório" />
            <button type="submit">Pesquisar</button>
        </Form>

        {inputError && <Error>{inputError}</Error>}

        <Repositories>
            {repositorios.map(repository => (
                <a key={repository.full_name} href="teste">
                <img
                    src={repository.owner.avatar_url}
                    alt={repository.owner.login}
                />
                <div>
                    <strong>{repository.full_name}</strong>
                    <p>{repository.description}</p>
                </div>
    
                <FiChevronRight size={20} color="#C9C9D4" />
            </a>
            ))}
        </Repositories>
    </>
  );
};

export default Dashboard;
