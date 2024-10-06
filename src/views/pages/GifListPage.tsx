import { FC, useState } from 'react';
import { AddCategory, GifGrid } from './components';

const GifListPage: FC = () => {
  const [categories, setCategories] = useState<string[]>([]);

  const handleAddCategory = (newCategory: string) => {
    if (categories.includes(newCategory)) return;
    setCategories((prev: string[]) => [newCategory, ...prev])
  };

  const handleResetCategories = () => {
    setCategories([]);
  };

  return (
    <div>
      <h1 className="text-center">
        <strong className="text-primary">GifExpert</strong>: Search your favorite GIF's</h1>
      <AddCategory
        categories={categories}
        onNewCategory={handleAddCategory}
        onResetCategories={handleResetCategories}
      />
      {categories.map((category: string) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
};

export default GifListPage;