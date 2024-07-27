import { Button } from 'primereact/button';
import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <div className="grid grid-nogutter surface-50 text-800 border-round">
      <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section>
          <span className="block text-6xl font-bold mb-1">Create the screens</span>
          <div className="text-6xl text-primary font-bold mb-3">your visitors deserve to see</div>
          <p className="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

          <Button label="Learn More" type="button" className="mr-3 p-button-raised" />
          <Button label="Live Demo" type="button" className="p-button-outlined" />
        </section>
      </div>
      <div className="col-12 md:col-6 p-6">
        <span className="block text-3xl font-bold mb-1">Create the screens</span>
        <ul className="list-none p-0">
          <li className="flex align-items-center mb-2">
            <i className="pi pi-check-circle mr-2 text-primary" style={{ fontSize: '1.25rem' }}></i>
            At least 10 characters
          </li>
          <li className="flex align-items-center mb-2">
            <i className="pi pi-check-circle mr-2 text-primary" style={{ fontSize: '1.25rem' }}></i>
            At least one lowercase character
          </li>
          <li className="flex align-items-center mb-2">
            <i className="pi pi-check-circle mr-2 text-primary" style={{ fontSize: '1.25rem' }}></i>
            At least one special character, e.g., ! @ # ?
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;