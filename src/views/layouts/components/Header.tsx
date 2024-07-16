import { FC } from 'react';
import { Menubar } from 'primereact/menubar';


const Header: FC = () => {
  const items = [
    {
      label: 'Home',
      icon: 'pi pi-home'
    },
    {
      label: 'Features',
      icon: 'pi pi-star'
    },
    {
      label: 'Contact',
      icon: 'pi pi-envelope'
    }
  ];

  return (
    <Menubar model={items} className="rounded-0" />
  );
};

export default Header;