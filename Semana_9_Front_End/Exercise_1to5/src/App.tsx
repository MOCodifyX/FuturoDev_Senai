import './App.css'

import { useState, useEffect, useRef } from "react";
import NovaTarefa from "./components/NovaTarefa";
import Tarefa from "./components/Tarefas";

export type TarefaType = {
  id: string;
  descricao: string;
  turnos: string[];
  concluida:boolean;
};

function App() {
  const [tarefas, setTarefas] = useState<TarefaType[]>([]);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    console.log("→ Carregando tarefas:", localStorage.getItem("tarefas"));
    const tarefasSalvas = localStorage.getItem("tarefas");
    if (tarefasSalvas) {
      setTarefas(JSON.parse(tarefasSalvas));
    }
  }, []);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    console.log("→ Salvando tarefas:", tarefas);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  const adicionarTarefa = (novaTarefa: Omit<TarefaType, 'id' | 'concluida'>) => {
    setTarefas(prev => [...prev, { ...novaTarefa, id: crypto.randomUUID(), concluida: false }]);
  };

  const total = tarefas.length;
  const concluidas = tarefas.filter(t => t.concluida).length;
  const porcentagem = total === 0 ? 0 : Math.round((concluidas / total) * 100);

  const toggleConcluida = (id: string) => {
    setTarefas(prev =>
      prev.map(t =>
        t.id === id ? { ...t, concluida: !t.concluida } : t
      )
    );
  };

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

