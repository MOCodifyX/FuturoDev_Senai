import styles from './FilmsGrid.module.css';

import { FilmsCard } from "./FilmsCard";

type Film = {
  id: string;
  name: string;
  image: string;
  gender: string;
  age: number;
};

type FilmsGridProps = {
  films: Film[];
  onSeeDetails: (id: string) => void;
};

export const FilmsGrid = ({ films, onSeeDetails }: FilmsGridProps) => {
  return (
    <div className={styles.filmsGrid}>
      {films.map(film => (
        <FilmsCard
          key={film.id}
          {...film}
          onSeeDetails={() => onSeeDetails(film.id)}
        />
      ))}
    </div>
  );
};