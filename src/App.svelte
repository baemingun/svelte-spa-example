<script lang="ts">
	import WriteButton from "./components/WriteButton.svelte";
	import PostList from "./components/PostList.svelte";
	import { fetchPosts, initPosts } from "./stores/post";

	let isWriting = false;

	initPosts();
	fetchPosts();
</script>

<main>
	{#if isWriting}
	<WriteButton onClick={() => { isWriting = false; }} />
	{:else}
	<WriteButton onClick={() => { isWriting = true; }} />
	<PostList />
	{/if}
	
</main>

<style lang="scss">
	
</style>