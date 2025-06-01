import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

type PlantIconProps = {
  size: 'sm' | 'md' | 'lg';
};

export const PlantIcon = ({ size }: PlantIconProps) => {
  const sizeMap = {
    sm: 16,
    md: 24,
    lg: 32,
  };

  return <LocalFloristIcon fontSize="inherit" style={{ fontSize: sizeMap[size] }} />;
};