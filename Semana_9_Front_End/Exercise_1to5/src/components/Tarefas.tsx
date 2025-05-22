import './Tarefas.css'

import type { TarefaType } from "../App";

interface Props {
  tarefas: TarefaType[];
  toggleConcluida: (id: string) => void;
}

function Tarefa({ tarefas, toggleConcluida }: Props) {
  return (
    <section id="tela-tarefas">
      <div id="manha">
        <h2>Manhã</h2>
        {tarefas 
          .filter(t => t.turnos.includes("Manhã"))
           .map(t => {
          
            return (
              <div key={t.id} className="tarefa-item">
                <p>{t.descricao}</p>
                <input type="checkbox" checked={t.concluida} onChange={() => toggleConcluida(t.id)}/>
              </div>
            );
          })}
      </div>

      <div id="tarde">
        <h2>Tarde</h2>
        {tarefas
          .filter(t => t.turnos.includes("Tarde"))
           .map(t => {

            return (
              <div key={t.id} className="tarefa-item">
                <p>{t.descricao}</p>
                <input type="checkbox" checked={t.concluida} onChange={() => toggleConcluida(t.id)}/>
              </div>
            );
          })}
      </div>

      <div id="noite">
        <h2>Noite</h2>
        {tarefas
          .filter(t => t.turnos.includes("Noite"))
           .map(t => {

            return (
              <div key={t.id} className="tarefa-item">
                <p className="tarefa-descricao">{t.descricao}</p>
                <input type="checkbox" checked={t.concluida} onChange={() => toggleConcluida(t.id)}/>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default Tarefa;