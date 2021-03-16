<script lang="ts">
  import PostItem from "./PostItem.svelte";
  import { fetchPostsStatus, posts } from '../stores/post';
  import RequestStatus from "../models/RequestStatus";
  import Loader from "./base/Loader.svelte";

  const isLoading = $fetchPostsStatus === RequestStatus.FETCHING;

</script>

<style lang="scss">
  ul {
    list-style: none;
    margin: 0;
    padding: 10px 0 40px;
  }
</style>

<Loader isLoading={$fetchPostsStatus === RequestStatus.FETCHING} />
<ul>
  {#each $posts as post}
  <PostItem userId={post.userId} title={post.title} content={post.body} />
  {/each}
</ul>