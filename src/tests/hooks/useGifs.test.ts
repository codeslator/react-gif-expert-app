import { renderHook, waitFor } from "@testing-library/react"
import { useGifs } from "../../hooks"

describe('Test useGifs custom hook.', () => {
  
  test('Should to return the initial value.', () => {
    const { result } = renderHook(() => useGifs('Pokemon'));
    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });
  
  
  test('Should to return an array of gifs and isLoading in false.', async () => {
    const { result } = renderHook(() => useGifs('Pokemon'));
    await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0));

    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
})