import styles from './FilmsCard.module.css';

import { Button } from "../atoms/Button";

type FilmsCardProps = {
    id: string;
    name: string;
    image: string;
    gender: string;
    age: number;
    onSeeDetails: () => void; 
};

export const FilmsCard = ({ name, image, gender, age, onSeeDetails }: FilmsCardProps) => {

  return (

    <div className={styles.filmsCard}>

        <h2>{name}</h2>
        <img src={`/img/${image}`} alt={`Capa do filme ${name}`} />
        <p>Genero do Filme: {gender}</p>
        <p>Idade Indicada: {age}</p>

        <Button text="Ler Sinopse" onClick={onSeeDetails} />

    </div>

  );
};