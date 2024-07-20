import { FC, useState } from 'react';
import { AddCategory } from './components';

const GifListPage: FC = () => {
  const [categories, setCategories] = useState<string[]>([]);

  const handleAddCategory = (newCategory: string) => {
    if(categories.includes(newCategory)) return;
    setCategories((prev: string[]) => [newCategory, ...prev])
  };

  return (
    <>
      <h1>GifExpert</h1>
      <AddCategory onNewCategory={handleAddCategory} />
      <ul>
        {categories.map((category: string) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </>
  );
};

export default GifListPage;