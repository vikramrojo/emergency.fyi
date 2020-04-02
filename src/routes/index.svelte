<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`counties.json`).then(r => r.json()).then(counties => {
			return { counties };
		});
	}
</script>

<script>
	export let counties;

	import Post from "./_post.svelte";
	import Feature from "./_feature.svelte";

	let filter = '';
	let feature = 'PopCare';
</script>

<style>
</style>

<svelte:head>
	<meta name="twitter:title" content="COVID-19 Emergency FYI">

	<title>Emergency FYI</title>
</svelte:head>


<section p="8 sm3" bg="gray3">
  <ul grid columns="3" gap="6">
    <li cell span="3">
			<h1><img src="info-square.svg" icon="72" alt="icon title" />Emergency FYI for COVID-19</h1>
      <h2>Helping you navigate the crisis in <span color="red">116</span> impacted counties.</h2>
			<p><span chip type="warning" mr="2">Last Updated</span><b>Tuesday, March 31, 2020</b></p>
    </li>


    <li cell>
      <h3>The COVID-19 pandemic is overwhelming capacities of local branches of United States government. EmergencyFYI is a resource that provides county-level information to help you navigate this ongoing crisis, expand your network for volunteering, and provide direct support for local relief efforts. If this is an emergency, contact your insurance provider, primary care physician, or your local county health department.</h3>
			<span class="h3">Projected COVID-19 Peak <a href="https://covid19.healthdata.org/projections">(Source)</span>
			<h2>April 15, 2020</h2>
    </li>
		<li cell>
			<span class="h3">US Cases <a href="https://github.com/nytimes/covid-19-data">(Source)</span>
			<h1>187962</h1>
		</li>
		<li cell>
			<span class="h3">US Deaths <a href="https://github.com/nytimes/covid-19-data">(Source)</a></span>
			<h1>3631</h1>
		</li>
  </ul>
</section>

<div alert type="alert" color="white" class="h3" flex px="8 sm3" align="center" py="4"><span>We don't have much time to slow the spread of Coronavirus. Start by following the <a color="white" class="hide" href="https://www.coronavirus.gov/">US Government</a> response.</span><a button ml="4" class="hide" href="https://www.coronavirus.gov/">coronavirus.gov</a></div>

<section p="8 sm3">
	<ul grid columns="3" gap="6">
		{#each counties as county}
			<li cell>
				<h2><a rel='prefetch' href='counties/{county.name}'><img src="chevron-right.svg" icon="36" alt="icon title" />{county.county}, {county.state}</a></h2>
				<p><span chip><b>{county.cases}</b> Cases</span></p>
			</li>
		{/each}
	</ul>
</section>