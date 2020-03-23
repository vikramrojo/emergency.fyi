<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`index.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>Sapper List Template</h1>

<ul grid columns="3" gap="6">
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li cell p="6" shadow="3" bg="white"><a rel='prefetch' href='{post.slug}'>{post.title}</a></li>
	{/each}
</ul>