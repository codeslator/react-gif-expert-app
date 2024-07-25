import { useEffect, useState } from "react";
import { Gif } from "../global";
import { getGifs } from "../services";


const useGifs = (category: string) => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchGifs = async (search: string) => {
    const allGifs = await getGifs(search);
    setGifs(allGifs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchGifs(category);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return {
    gifs,
    isLoading,
    fetchGifs
  }
};

export default useGifs;