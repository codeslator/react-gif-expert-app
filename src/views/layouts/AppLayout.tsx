import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header,Footer } from './components';

const AppLayout: FC = () => {
  return (
    <div className="h-screen w-full flex flex-column justify-content-between">
      <Header />
      <div className="py-5 px-3 md:px-8">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;