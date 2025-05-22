import './NovaTarefa.css'

import { useState } from "react";
import type { TarefaType } from "../App";

interface Props {
  setTarefa: (tarefa: TarefaType) => void;
}

function NovaTarefa({ setTarefa }: Props) {
  const [descricao, setDescricao] = useState("");
  const [turnoSelecionado, setTurnoSelecionado] = useState<string>("");

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTurnoSelecionado(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!descricao.trim() || turnoSelecionado === "") {
      alert("Preencha a descrição e selecione um turno.");
      return;
    }

    setTarefa({
      descricao,
      turnos: [turnoSelecionado], 
      concluida: false,
    });

    setDescricao("");
    setTurnoSelecionado("");
  };

  return (
    <section id="tela-nova-tarefa">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Descrição da Tarefa"
          value={descricao}
          onChange={e => setDescricao(e.target.value)}
        />

        <label>
          <input
            type="radio"
            name="turno"
            value="Manhã"
            checked={turnoSelecionado === "Manhã"}
            onChange={handleRadioChange}
          />
          Manhã
        </label>

        <label>
          <input
            type="radio"
            name="turno"
            value="Tarde"
            checked={turnoSelecionado === "Tarde"}
            onChange={handleRadioChange}
          />
          Tarde
        </label>

        <label>
          <input
            type="radio"
            name="turno"
            value="Noite"
            checked={turnoSelecionado === "Noite"}
            onChange={handleRadioChange}
          />
          Noite
        </label>

        <button type="submit">Adicionar Nova Tarefa</button>
        
      </form>
    </section>
  );
}

export default NovaTarefa;

