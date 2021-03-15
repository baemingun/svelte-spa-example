import type { AxiosPromise } from "axios";
import type Post from "../models/Post";
import ApiBuilder from "./builder/ApiBuilder";

const API_HOST = "https://jsonplaceholder.typicode.com";

export const getPosts = (): AxiosPromise<Post[]> => {
  return ApiBuilder.create()
    .get()
    .url(`${API_HOST}/posts`)
    .build()
}