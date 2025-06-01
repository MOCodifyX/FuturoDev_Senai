
import { Button } from "../atoms/Button";

type FilmsCardProps = {
    id: string;
    name: string;
    image: string;
    gender: string;
    age: number;
    SeeDetails: () => void; 
};

export const FilmsCard = ({ id, name, image, gender, age, SeeDetails }: FilmsCardProps) => {

  return (

    <div className={styles['plant-card']}>

        <h2>{name}</h2>
        <img src={`/img/${image}`} alt={`Capa do filme ${name}`} />
        <p>Genero do Filme: {gender}</p>
        <p>Idade Indicada: {age}</p>

        <Button onClick={SeeDetails}> Ler Sinopse </Button>

    </div>

  );
};