import React, { useState, FormEvent } from "react";
import { FiChevronRight } from "react-icons/fi";
import api from "../../services/api";

import logoImg from "../../assets/logo.svg";

import { Title, Form, Repositories } from "./styles";

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
  const [repositorios, setRepositorios] = useState<Repository[]>([]);

 async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
      //adição de um novo repositório..
      //consumir api do github.
      //salvar novo repositório no estado.
      event.preventDefault()
      const response = await api.get<Repository>(`repos/${input}`)
      const repository = response.data

      setRepositorios([...repositorios, repository])
      setInput('')


  }

  return (
    <>
      <img src={logoImg} alt="Github explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form onSubmit={handleAddRepository}>
        <input
            value={input}
            onChange={(e) => setInput(e.target.value)} 
            type="text" 
            placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

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
