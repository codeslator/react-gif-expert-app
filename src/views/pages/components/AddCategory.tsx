import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

interface AddCategoryProps {
  categories: string[];
  onNewCategory: (value: string) => void;
  onResetCategories: () => void;
}

const AddCategory: FC<AddCategoryProps> = ({ onNewCategory, onResetCategories, categories }) => {
  const [search, setSearch] = useState<string>('');

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (search.trim().length <= 1) return;
    onNewCategory(search.trim());
    setSearch('');
  };

  return (
    <form onSubmit={handleSubmit} aria-label="form">
      <div className="p-inputgroup flex-1">
        {(categories.length > 0) && (
          <Button
            label="Reset"
            icon="pi pi-times"
            severity="danger"
            onClick={onResetCategories}
          />
        )}
        <InputText
          type="text"
          placeholder="Search a category"
          value={search}
          onChange={handleSearch}
        />
        <Button
          label="Search"
          icon="pi pi-search"
          type="submit"
        />
      </div>
    </form>
  );
};

export default AddCategory;