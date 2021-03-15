<script lang="ts">
	import PostList from "./components/PostList.svelte";
	import { fetchPosts, initPosts } from "./stores/post";

	initPosts();
	fetchPosts();
</script>

<main>
	<PostList />
</main>

<style lang="scss">
	
</style>