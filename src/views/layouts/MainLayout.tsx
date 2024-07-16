import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header,Footer } from './components';

const MainLayout: FC = () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;