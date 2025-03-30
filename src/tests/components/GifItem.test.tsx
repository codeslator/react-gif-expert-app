import { render, screen } from "@testing-library/react"
import { GifItem } from "../../views/pages/components"

describe('Test <GifItem /> component.', () => {
  const gif = {
    title: 'Pokemon',
    url: 'https://pokemon.com/bulbasaur.jpg',
    id: "abc123"
  }
  
  test('Should to match with the snapshot.', () => {
    const { container } = render(<GifItem gif={gif} />);
    expect(container).toMatchSnapshot();
  });

  test('Should display alt and url correctly.', () => {
    render(<GifItem gif={gif} />);
    // expect(screen.getByRole<HTMLImageElement>('img').src).toBe(gif.url);
    const { src, alt } = screen.getByRole<HTMLImageElement>('img');
    expect(src).toBe(gif.url);
    expect(alt).toBe(gif.title);
  });

  test('Should display the title in the component.', () => {
    render(<GifItem gif={gif} />);
    expect(screen.getByText(gif.title)).toBeTruthy();
  })
})