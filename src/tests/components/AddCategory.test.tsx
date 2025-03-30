import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../views/pages/components";

describe('Test <AddCategory /> component.', () => {

  test('Should to change the value of the input.', () => {
    render(
      <AddCategory
        onNewCategory={() => {}}
        categories={[]}
        onResetCategories={() => {}}
      />
    );
    const input = screen.getByRole<HTMLInputElement>('textbox');
    fireEvent.input(input, { target: { value: 'Pokemon' } });

    expect(input.value).toBe('Pokemon');
  });

  test('Should call onNewCategory if input has a value.', () => {
    const inputValue = 'Pokemon';
    const onNewCategory = jest.fn();
    const onResetCategories = jest.fn();
    render(
      <AddCategory
        onNewCategory={onNewCategory}
        categories={[]}
        onResetCategories={onResetCategories}
      />
    );

    const input = screen.getByRole<HTMLInputElement>('textbox');
    const form = screen.getByRole<HTMLFormElement>('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe('');
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('Should not call onNewCategory if input is empty.', () => {
    const onNewCategory = jest.fn();
    render(
      <AddCategory
        onNewCategory={onNewCategory}
        categories={[]}
        onResetCategories={() => {}}
      />
    );

    const form = screen.getByRole<HTMLFormElement>('form');
    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});