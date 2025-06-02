import styles from './SynopsisCard.module.css';

type Film = {
  id: string;
  name: string;
  image: string;
  gender: string;
  age: number;
  synopsis: string;
};

type SynopsisCarProps = {
  film: Film;
  onBack: () => void;
};

export const SynopsisCard = ({ film, onBack }: SynopsisCarProps) => {
  return (
    <div className={styles.filmDetails}>
      <h1>{film.name}</h1>
      <img src={`/img/${film.image}`} alt={`Capa do filme ${film.name}`} />
      <p><strong>Gênero:</strong> {film.gender}</p>
      <p><strong>Idade Indicada:</strong> {film.age} anos</p>
      <p><strong>Sinopse:</strong> {film.synopsis}</p>
      <button onClick={onBack}>Voltar</button>
    </div>
  );
};