import { giphyApi } from "../api";

export const getGifs = async (search: string) => {
  const { data } = await giphyApi.get('', {
    params: {
      q: encodeURI(search)
    }
  });
  return data;
};