<script lang="ts">
  import PostItem from "./PostItem.svelte";

  
</script>

<style lang="scss">
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-top: 10px;
  }
</style>

<!-- markup (zero or more items) goes here -->
<ul>
  <PostItem userId={1} title="메롱" content="메롱" />
  <PostItem userId={1} title="메롱" content="메롱" />
  <PostItem userId={1} title="메롱" content="메롱" />
</ul>