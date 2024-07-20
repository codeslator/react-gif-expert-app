import { FC, useState } from 'react';
import { AddCategory, GifGrid } from './components';

const GifListPage: FC = () => {
  const [categories, setCategories] = useState<string[]>([]);

  const handleAddCategory = (newCategory: string) => {
    if (categories.includes(newCategory)) return;
    setCategories((prev: string[]) => [newCategory, ...prev])
  };

  return (
    <>
      <h1>GifExpert</h1>
      <AddCategory onNewCategory={handleAddCategory} />
      {categories.map((category: string) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifListPage;