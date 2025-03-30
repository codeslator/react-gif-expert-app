import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { ScrollTop } from 'primereact/scrolltop';
import { Header,Footer } from './components';

const AppLayout: FC = () => {
  return (
    <div className="h-screen w-full flex flex-column justify-content-between">
      <Header />
      <main className="py-5 px-3 md:px-8">
        <Outlet />
        <ScrollTop className="bg-primary" />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;