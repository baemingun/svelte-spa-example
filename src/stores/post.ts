import { writable, get } from "svelte/store";
import { getPosts } from "../apis/PostApi";
import type Post from "../models/Post";
import RequestStatus from "../models/RequestStatus";

export const posts = writable<Post[]>([]);
export const fetchPostsStatus = writable(RequestStatus.NOT_YET_OPENED);

export const initPosts = () => {
  posts.set([]);
  fetchPostsStatus.set(RequestStatus.NOT_YET_OPENED);
}

export const fetchPosts = async () => {
  if (get(fetchPostsStatus) === RequestStatus.FETCHING) {
    return;
  }

  fetchPostsStatus.set(RequestStatus.FETCHING);

  try {
    const response = await getPosts();

    posts.set(response.data);
    fetchPostsStatus.set(RequestStatus.COMPLETE);
  } catch (error) {
    console.error(error);
    fetchPostsStatus.set(RequestStatus.ERROR);
  }
}