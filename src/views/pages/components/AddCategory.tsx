import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

interface AddCategoryProps {
  onNewCategory: (value: string) => void;
}

const AddCategory: FC<AddCategoryProps> = ({ onNewCategory }) => {
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
    <form onSubmit={handleSubmit}>
      <div className="p-inputgroup flex-1">
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