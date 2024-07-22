export interface Gif {
  id: string;
  title: string;
  url: string;
}


export interface GiphyResponse {
  data: GiphyImage[];
  meta: Meta;
  pagination: Pagination;
}

export interface GiphyImage {
  id: string;
  url: string;
  slug: string;
  title: string;
  images: Image;
  alt_text: string;
}

export interface Image {
  downsized_medium: DownsizedSize;
}

export interface DownsizedSize {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface Meta {
  status: number;
  msg: string;
  response_id: string;
}

export interface Pagination {
  total_count: number;
  count: number;
  offset: number;
}
