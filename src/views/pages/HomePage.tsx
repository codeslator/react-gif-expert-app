import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { InfoList } from './components';
import { environment, features, info, ROUTES } from '../../global';

const HomePage: FC = () => {
  const navigate = useNavigate();

  const goToDemo = () => {
    navigate(ROUTES.GIFS);
  };

  const goToCode = () => {
    window.open(environment.GITHUB_REPO_URL, '_blank', 'noopener,noreferrer')
  };

  return (
    <div className="grid grid-nogutter surface-50 text-800 border-round">
      <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section>
          <span className="text-6xl font-bold mb-1">GifExpert App - </span>
          <span className="text-6xl text-primary font-bold mb-3">React</span>
          <p className="mt-3 mb-2 text-700 line-height-3">
            Explore the world of GIFs in seconds! Use the search bar to find GIFs in real-time.
            This app was created using <strong>React 18</strong>, <strong>PrimeReact</strong> and <strong>React Router Dom</strong>.
          </p>
          <p className="mt-0 mb-4 text-700 line-height-3">
            Example from <strong className="text-primary">React: De cero a experto (Hooks y MERN)</strong> course by <strong>Fernando Herrera</strong>.
          </p>
          <Button
            label="Demo"
            type="button"
            className="mr-3 p-button-raised"
            icon="pi pi-globe"
            onClick={goToDemo}
          />
          <Button
            label="Code"
            type="button"
            className="p-button-outlined"
            icon="pi pi-github"
            onClick={goToCode}
          />
        </section>
      </div>
      <div className="col-12 md:col-6 p-6">
        <span className="block text-3xl font-bold mb-1">About:</span>
        <InfoList items={features} />
        <span className="block text-3xl font-bold mb-1">Features:</span>
        <InfoList items={info} />
      </div>
    </div>
  );
};

export default HomePage;