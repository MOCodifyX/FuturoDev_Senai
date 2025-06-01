import styles from './PlantCard.module.css';

import { Button } from "@mui/material";
import { PlantIcon } from "../atoms/PlantIcon";
import { PriceTag } from "../atoms/PriceTag";


type PlantCardProps = {
    id: string;
    name: string;
    price: number;
    light: "sun" | "shade"
    onAddToCart: () => void; 
};

export const PlantCard = ({ id, name, price, light, onAddToCart }: PlantCardProps) => {

  return (

    <div className={styles['plant-card']}>

      <h2><PlantIcon size="sm"/>{name}<PlantIcon size="sm"/></h2>

      <PriceTag value={price} />

      <p>Iluminação Adequada: {light === "sun" ? "☀️ Sol" : "🌑 Sombra"}</p>

      <Button variant="contained" onClick={onAddToCart}> Adicionar ao Carrinho </Button>

    </div>

  );
};