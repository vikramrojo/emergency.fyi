<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`index.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;

	import Post from "./_post.svelte";


	export let tags = [];
	var tagsA = flatten(posts.map(a => {
		const arrays = a.tagA;
		return arrays;
	}));
	var tagsB = flatten(posts.map(b => {
		const arrays = b.tagB;
		return arrays;
	}));
	tags = tagsA.filter((v, i, a) => a.indexOf(v) === i) + tagsB.filter((v, i, a) => a.indexOf(v) === i)
	function flatten(arr) {
		return arr.reduce(function (flat, toFlatten) {
			return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
		}, []);
	}
</script>

<style>
	[alert]{
		position:sticky;
		top:0;
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>


<section p="8 sm3" bg="gray3">
  <ul grid columns="3" gap="6">
    <li cell span="3">
			<h1>Emergency FYI for COVID-19</h1>
    </li>
    <li cell span="2">
      <h2>
        Help exists if you know where to find it.
      </h2>
      <p>The COVID-19 pandemic is overwhelming federal, state, and local capacities of the United States government. We can help you find resources and aid in your local area to navigate this ongoing crisis, and expand your network for volunteer work. Listed below are active efforts to mitigate the worst effects, organized by key topic area.</p>
    </li>
  </ul>
</section>

<div alert type="alert" color="white" class="h3" flex px="8 sm3" align="center" py="4"><span>We have 2 weeks to slow the spread of Coronavirus. Start by following the <a color="white" class="hide" href="https://www.coronavirus.gov/">US Government</a> response.</span><a button ml="4" class="hide" href="https://www.coronavirus.gov/">coronavirus.gov</a></div>

<section p="8 sm3">
	<ul grid columns="3" gap="6">
		{#each posts as post}
			<Post {post} />
		{/each}
	</ul>
</section>

{#each tags as tag}
	{tag}
{/each}