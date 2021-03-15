<script lang="ts">
  import PostItem from "./PostItem.svelte";
  import { fetchPostsStatus, posts } from '../stores/post';
  import RequestStatus from "../models/RequestStatus";
</script>

<style lang="scss">
  ul {
    list-style: none;
    margin: 0;
    padding: 10px 0 40px;
  }
</style>

<!-- markup (zero or more items) goes here -->
<ul>
  {#if $fetchPostsStatus === RequestStatus.FETCHING}
  로딩중
  {:else}
  {#each $posts as post}
     <PostItem userId={post.userId} title={post.title} content={post.body} />
  {/each}
  {/if}
</ul>