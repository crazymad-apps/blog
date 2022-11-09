import Axios, { AxiosRequestConfig } from "axios";
import { GET_ARTICLE_DETAIL } from "./urls";

const axios = Axios.create();

export interface ResBody<T = any> {
  state: number;
  message: string;
  data: T;
}

export function get<P = any>(
  url: string,
  params: P,
  config?: AxiosRequestConfig
): Promise<ResBody> {
  return axios
    .get(url, {
      params,
      ...(config ?? {}),
    })
    .then((res) => {
      return res.data;
    })
    .catch(() => {});
}

export function post<P = any>(
  url: string,
  data: P,
  config?: AxiosRequestConfig
): Promise<ResBody> {
  return axios
    .post(url, data, config)
    .then((res) => {
      return res.data;
    })
    .catch(() => {});
}

export async function getAllArticles() {}

export async function getArticleDetail(id: number | string) {
  const { state, data } = await get(GET_ARTICLE_DETAIL, { id });

  if (state === 0) {
    alert("文章不存在");
    throw new Error();
  } else {
    return data;
  }
}
