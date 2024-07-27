import { FC } from 'react';
import { Button } from 'primereact/button';

const Footer: FC = () => {
  return (
    <footer className="surface-0">
      <div className="w-full mx-auto p-4">
        <div className="flex flex-column sm:flex-row align-items-center justify-content-between">
          <a href="https://codeslator.dev/" className="flex align-items-center mb-4 sm:mb-0 no-underline">
            <img src="https://codeslator.dev/wp-content/uploads/2024/07/Iso_Color_White.svg" className="w-3rem h-3rem" alt="Codeslator Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap mx-3 text-white">GifExpert</span>
          </a>
          <div className="w-full sm:w-auto flex flex-row justify-content-evenly align-items-center">
            <Button
              icon="pi pi-facebook"
              severity="secondary"
              text
              aria-label="Facebook"
              size="small"
              className="sm:mr-3"
              link
              onClick={() => window.open('https://www.facebook.com/codeslator', '_blank')}
            />
            <Button
              icon="pi pi-instagram"
              severity="secondary"
              text
              aria-label="Instagram"
              size="small"
              className="sm:mr-3"
              link
              onClick={() => window.open('https://www.instagram.com/codeslator/', '_blank')}
            />
            <Button
              icon="pi pi-linkedin"
              severity="secondary"
              text
              aria-label="LinkedIn"
              size="small"
              className="sm:mr-3"
              link
              onClick={() => window.open('https://www.linkedin.com/in/andres-melendez-dev/', '_blank')}
            />
            <Button
              icon="pi pi-github"
              severity="secondary"
              text
              aria-label="Github"
              size="small"
              className="sm:mr-3"
              link
              onClick={() => window.open('https://www.linkedin.com/in/andres-melendez-dev/', '_blank')}
            />
          </div>
        </div>
        <hr className="my-3 sm:mx-auto border-gray-700 lg:my-4" />
        <span className="block text-sm text-white text-center">
          © {new Date().getFullYear()} <a href="https://codeslator.dev/" className="no-underline hover:underline text-primary-500">CodeslatorDev</a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;