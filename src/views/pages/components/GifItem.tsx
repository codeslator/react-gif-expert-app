import { FC } from 'react';
import { Card } from 'primereact/card';
import { Gif } from '../../../global';

interface GifItemProps {
  gif: Gif;
}

interface ItemHeaderProps {
  title: string;
  url: string;
}

const ItemHeader = ({ title, url }: ItemHeaderProps) => {
  return (
    <img alt={title} src={url} />
  )
};

const GifItem: FC<GifItemProps> = ({ gif }) => {
  return (
    <Card
      title={gif.title}
      header={(
        <ItemHeader title={gif.title} url={gif.url} />
      )}
      className="h-full"
    />
  );
};

export default GifItem;