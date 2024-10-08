import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../views/pages/components"
import useGifs from "../../hooks/useGifs";

const mockUseGifs = jest.mocked(useGifs)

describe('Test <GifGrid /> component.', () => {
  const category = 'Pokemon';

  test('Should to display the loader starting.', () => {
    mockUseGifs.mockReturnValue({
      gifs: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText(category));
  });

  test('Should to display items when images are loaded using useGifs.', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Pokemon',
        url: 'https://pokemon.com/bulbasaur.png'
      },
      {
        id: 'DEF',
        title: 'Pokemon',
        url: 'https://pokemon.com/ivysaur.png'
      },
    ];

    mockUseGifs.mockReturnValue({
      gifs: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);

    expect(screen.getAllByRole<HTMLImageElement>('img').length).toBe(2);

  });
})