import { FC } from 'react';
import { GifItem, GridSkelleton } from './';
import { useGifs } from '../../../hooks';
import { Gif } from '../../../global';

interface GifGridProps {
  category: string;
}

const GifGrid: FC<GifGridProps> = ({ category }) => {
  const { gifs, isLoading } = useGifs(category);

  return (
    <div>
      <h1>{category}</h1>
      {isLoading ? (
        <GridSkelleton />
      ) : (
        <div className="grid">
          {gifs.map((gif: Gif) => (
            <div key={gif.id} className="col-12 md:col-4 lg:col-2">
              <GifItem gif={gif} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GifGrid;