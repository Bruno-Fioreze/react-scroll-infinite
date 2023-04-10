import React, { useState, useEffect } from 'react';
import dadosMock from './dadosMock.json';

function App() {
  const [dados, setDados] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);

  useEffect(() => {
    // Carrega os primeiros 10 dados ao montar o componente
    setDados(dadosMock.slice(start, end));
  }, []);

  function handleScroll(event) {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollTop + clientHeight >= scrollHeight) {
      // Adiciona mais 10 dados quando a rolagem chegar ao final
      setStart(start + 10);
      setEnd(end + 10);
      setDados([...dados, ...dadosMock.slice(start + 10, end + 10)]);
    }
  }

  return (
    <div
      className="tabela-scroll-infinito"
      style={{ height: '200px', overflowY: 'scroll' }}
      onScroll={handleScroll}
    >
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Cidade</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((dado) => (
            <tr key={dado.id}>
              <td>{dado.id}</td>
              <td>{dado.nome}</td>
              <td>{dado.idade}</td>
              <td>{dado.cidade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;