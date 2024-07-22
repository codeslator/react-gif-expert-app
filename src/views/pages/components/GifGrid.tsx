import { FC, useEffect } from 'react';
import { useGifs } from '../../../hooks';
import { Gif } from '../../../global';
import GifItem from './GifItem';

interface GifGridProps {
  category: string;
}

const GifGrid: FC<GifGridProps> = ({ category }) => {
  const { gifs, fetchGifs } = useGifs();

  useEffect(() => {
    fetchGifs(category);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>{category}</h1>
      <div className="grid">
        {gifs.map((gif: Gif) => (
          <div key={gif.id} className="col-12 md:col-4 lg:col-2">
            <GifItem gif={gif} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GifGrid;