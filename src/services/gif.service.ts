import { giphyApi } from "../api";
import { Gif, GiphyImage, GiphyResponse } from "../global";

export const getGifs = async (search: string): Promise<Gif[]> => {
  const { data } = await giphyApi.get<GiphyResponse>('', {
    params: {
      q: encodeURI(search)
    }
  });

  const gifs: Gif[] = data.data.map((image: GiphyImage) => ({
    id: image.id,
    title: image.title,
    url: image.images?.downsized_medium.url
  }));

  return gifs;
};