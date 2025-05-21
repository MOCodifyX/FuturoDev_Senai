import './App.css'

import { useState } from "react";
import NovaTarefa from "./components/NovaTarefa";
import Tarefa from "./components/Tarefas";

export type TarefaType = {
  descricao: string;
  turnos: string[];
  concluida:boolean;
};

function App() {
  const [tarefas, setTarefas] = useState<TarefaType[]>([]);

  const adicionarTarefa = (novaTarefa: TarefaType) => {
    setTarefas(prev => [...prev, { ...novaTarefa, concluida: false }]);
  };

  const toggleConcluida = (index: number) => {
    setTarefas(prev =>
      prev.map((t, i) =>
        i === index ? { ...t, concluida: !t.concluida } : t
      )
    )
  };

  const total = tarefas.length;
  const concluidas = tarefas.filter(t => t.concluida).length;
  const porcentagem = total === 0 ? 0 : Math.round((concluidas / total) * 100);

  return (
    <>
      <NovaTarefa setTarefa={adicionarTarefa} />
      <Tarefa tarefas={tarefas} toggleConcluida={toggleConcluida} />
      <p>Total concluídas: {concluidas}</p>

      <div style={{ margin: '1rem 0' }}>
      <p>Total de Tarefas: {total}</p>
      <p>Tarefas Concluídas: {concluidas} ({porcentagem}%)</p>

      <div style={{
        width: '100%',
        height: '20px',
        backgroundColor: '#ccc',
        borderRadius: '10px',
        overflow: 'hidden',
        marginTop: '0.5rem'
      }}>
        <div style={{
          width: `${porcentagem}%`,
          height: '100%',
          backgroundColor: 'green'
        }} />
      </div>
    </div>
        </>
      );
    }

export default App;

