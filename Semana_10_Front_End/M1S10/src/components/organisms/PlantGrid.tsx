import styles from "./PlantGrid.module.css"

import { useTheme, useMediaQuery } from "@mui/material";
import { PlantCard } from "../molecules/PlantCard";

export type Plant = {
  id: string;
  name: string;
  price: number;
  light: "sun" | "shade";
};

type PlantGridProps = {
  plants: Plant[];
  onAddToCart: (id: string) => void;
};

export const PlantGrid = ({ plants, onAddToCart }: PlantGridProps) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); 
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md")); 

  let columns = 1;
  if (isMobile) columns = 1;
  if (isTablet) columns = 2;
  if (isDesktop) columns = 3;

  return (
    <div
      className={styles['plant-grid']}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {plants.map((plant) => (
        <PlantCard key={plant.id} {...plant} onAddToCart={() => onAddToCart(plant.name)} />
      ))}
    </div>
  );
};
