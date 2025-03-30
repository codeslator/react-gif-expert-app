import { FC } from 'react';
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';


const Header: FC = () => {
  const navigate = useNavigate();
  const items = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      command: () => {
        navigate('/');
      }
    },
    {
      label: 'Search GIFs',
      icon: 'pi pi-images',
      command: () => {
        navigate('/gifs');
      }
    },

  ];

  return (
    <Menubar model={items} className="border-none border-noround surface-0" />
  );
};

export default Header;