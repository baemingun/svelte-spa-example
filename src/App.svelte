<script lang="ts">
	import WriteButton from "./components/FloatingButton.svelte";
	import PostList from "./components/list/PostList.svelte";
	import { fetchPosts, initPosts } from "./stores/post";
	import PostWrite from "./components/PostWrite.svelte";
import { onMount } from "svelte";

	let isWriting = false;

	onMount(() => {
		initPosts();
		fetchPosts();
	});
</script>

<main>
	{#if isWriting}
	<PostWrite bind:isWriting={isWriting} />
	{:else}
	<WriteButton onClick={() => { isWriting = true; }} />
	<PostList />
	{/if}
	
</main>

<style lang="scss">
	
</style>