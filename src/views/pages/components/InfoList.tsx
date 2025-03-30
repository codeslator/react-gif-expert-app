import { FC } from 'react';

interface InfoListProps {
  items: string[];
}

const InfoList: FC<InfoListProps> = ({ items }) => {
  return (
    <ul className="list-none p-0">
      {items.map((item: string, index: number) => (
        <li key={index} className="flex align-items-center mb-2">
          <i className="pi pi-check-circle mr-2 text-primary" style={{ fontSize: '1.25rem' }}></i>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default InfoList;