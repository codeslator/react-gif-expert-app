import { FC } from 'react';
import { ItemSkelleton } from './';

const GridSkelleton: FC = () => {
  return (
    <div className="grid">
      <ItemSkelleton />
      <ItemSkelleton />
      <ItemSkelleton />
      <ItemSkelleton />
      <ItemSkelleton />
      <ItemSkelleton />
      <ItemSkelleton />
      <ItemSkelleton />
      <ItemSkelleton />
      <ItemSkelleton />
      <ItemSkelleton />
      <ItemSkelleton />
    </div>
  );
};

export default GridSkelleton;