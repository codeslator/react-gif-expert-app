import { FC } from 'react';
import { Button } from 'primereact/button';

const Footer: FC = () => {
  return (
    <footer className="bg-gray-700">
      <div className="w-full mx-auto p-4">
        <div className="flex flex-column sm:flex-row align-items-center justify-content-between">
          <a href="https://flowbite.com/" className="flex align-items-center mb-4 sm:mb-0 no-underline">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap mx-3 text-white">GifExpert</span>
          </a>
          <div className="w-full sm:w-auto flex flex-row justify-content-evenly align-items-center">
            <Button icon="pi pi-facebook" severity="secondary" text aria-label="Facebook" size="small" className="sm:mr-3" />
            <Button icon="pi pi-instagram" severity="secondary" text aria-label="Instagram" size="small" className="sm:mr-3" />
            <Button icon="pi pi-linkedin" severity="secondary" text aria-label="LinkedIn" size="small" className="sm:mr-3" />
            <Button icon="pi pi-github" severity="secondary" text aria-label="Github" size="small" className="sm:mr-3" />
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