<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`counties.json`).then(r => r.json()).then(counties => {
			return { counties };
		});
	}
</script>

<script>
	export let counties;

	import _ from 'lodash';
	import Post from "./_post.svelte";
	import Feature from "./_feature.svelte";

	let filter = '';
	let feature = 'PopCare';
</script>

<style>
</style>

<svelte:head>
	<title>Emergency FYI</title>
</svelte:head>


<section p="8 sm3" bg="gray3">
  <ul grid columns="3" gap="6">
    <li cell span="3">
			<h1>Emergency FYI for COVID-19</h1>
    </li>
    <li cell>
      <h2>
        Get and give help in <span color="red">116</span> impacted counties.
      </h2>
      <p>The COVID-19 pandemic is overwhelming capacities of local branches of United States government. We can help you find medical resources and mutual aid in your county to navigate this ongoing crisis, expand your network for volunteering and directly support local relief efforts.</p>
    </li>
  </ul>
</section>

<div alert type="alert" color="white" class="h3" flex px="8 sm3" align="center" py="4"><span>We have weeks to slow the spread of Coronavirus. Start by following the <a color="white" class="hide" href="https://www.coronavirus.gov/">US Government</a> response.</span><a button ml="4" class="hide" href="https://www.coronavirus.gov/">coronavirus.gov</a></div>

<section p="8 sm3">
	<ul grid columns="3" gap="6">
		{#each counties as county}
			<li cell>
				<h2><a rel='prefetch' href='counties/{county.name}'>{county.county}, {county.state}</a></h2>
				<p><span chip><b>{county.cases}</b> Cases</span></p>
			</li>
		{/each}
	</ul>
</section>