import { FC } from 'react';
import { Skeleton } from 'primereact/skeleton';

const ItemSkelleton: FC = () => {
  return (
    <div className="col-12 md:col-4 lg:col-2 p-2">
      <div className="w-full">
        <Skeleton height="2rem" className="mb-2" />
        <Skeleton height="10rem" className="mb-2" />
        <Skeleton height="6rem" className="mb-2" />
      </div>
    </div>
  );
};

export default ItemSkelleton;