import { FC } from 'react';

interface GifGridProps {
  category: string;
}

const GifGrid: FC<GifGridProps> = ({ category }) => {
  return (
    <div>GifGrid {category}</div>
  );
};

export default GifGrid;