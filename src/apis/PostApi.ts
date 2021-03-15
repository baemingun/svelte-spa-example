import ApiBuilder from "./builder/ApiBuilder";

const API_HOST = "https://jsonplaceholder.typicode.com";

export const getPosts = () => {
  return ApiBuilder.create()
    .get()
    .url(`${API_HOST}/posts`)
    .build()
}