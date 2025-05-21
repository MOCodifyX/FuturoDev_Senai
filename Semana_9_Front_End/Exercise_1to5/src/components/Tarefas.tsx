import type { TarefaType } from "../App";

interface Props {
  tarefas: TarefaType[];
  toggleConcluida: (index: number) => void;
}

function Tarefa({ tarefas, toggleConcluida }: Props) {
  return (
    <section id="tela-tarefas">
      <div id="manha">
        <h2>Manhã</h2>
        {tarefas
          .filter(t => t.turnos.includes("Manhã"))
           .map(t => {
            const index = tarefas.indexOf(t);
            return (
              <div key={index}>
                <p>{t.descricao}</p>
                <input type="checkbox" checked={t.concluida} onChange={() => toggleConcluida(index)}/>
              </div>
            );
          })}
      </div>

      <div id="tarde">
        <h2>Tarde</h2>
        {tarefas
          .filter(t => t.turnos.includes("Tarde"))
           .map(t => {
            const index = tarefas.indexOf(t);
            return (
              <div key={index}>
                <p>{t.descricao}</p>
                <input type="checkbox" checked={t.concluida} onChange={() => toggleConcluida(index)}/>
              </div>
            );
          })}
      </div>

      <div id="noite">
        <h2>Noite</h2>
        {tarefas
          .filter(t => t.turnos.includes("Noite"))
           .map(t => {
            const index = tarefas.indexOf(t);
            return (
              <div key={index}>
                <p>{t.descricao}</p>
                <input type="checkbox" checked={t.concluida} onChange={() => toggleConcluida(index)}/>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default Tarefa;