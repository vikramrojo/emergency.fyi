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
  import Chart from 'svelte-frappe-charts';

  let deaths = {
    labels: ['-6d', '-5d', '-4d', '-3d', '-2d', '-1d', 'Today'],
    datasets: [
      {
        values: [2486, 3073, 3911, 4841, 6228, 7121, 8499],
      }
    ]
	};
	let cases = {
    labels: ['-6d', '-5d', '-4d', '-3d', '-2d', '-1d', 'Today'],
    datasets: [
      {
        values: [142194, 163683, 188049, 214711, 244228, 276832, 311536],
      }
    ]
	};
	let num = 3;
	let filter = '';
</script>

<style>
</style>

<svelte:head>
	<meta name="twitter:title" content="COVID-19 Emergency FYI">

	<title>Emergency FYI</title>
</svelte:head>

<section p="8 sm3" bg="gray3">
  <ul grid columns="6" gap="6">
    <li cell span="4">
			<h1><img src="info-square.svg" icon="72" alt="icon title" class="hide" />Emergency FYI for COVID-19</h1>
      <h2>Helping you navigate the crisis in <span color="red">182</span> impacted counties.</h2>
			<p><span chip type="warning" mr="2">Last Updated</span><b>Saturda, April 4, 2020</b></p>
      <h3>The COVID-19 pandemic is overwhelming capacities of local branches of United States government. EmergencyFYI is a resource that provides county-level information to help you navigate this ongoing crisis, expand your network for volunteering, and provide direct support for local relief efforts. If this is an emergency, contact your insurance provider, primary care physician, or your local county health department.</h3>
			<span class="h3">Projected Best Case COVID-19 Peak <a href="https://covid19.healthdata.org/projections">(Source)</span>
			<h2>April 16, 2020</h2>
    </li>
		<li cell span="2" class="hide"/>
		<li cell>
			<span class="h3">US Cases <a href="https://github.com/nytimes/covid-19-data/blob/master/us-states.csv">(Source)</span>
			<h1>311,536</h1>
			<h3 color="orange"><img src="caret-up.svg" icon="24" alt="icon title" />{311536 - 276832} Daily Increase</h3>
		</li>
		<li cell>
			<Chart
				data={cases}
				type="line"
				colors={["orange"]}
				height=200
				lineOptions={{ hideDots: 0, dotSize: 8, hideLine: 0, }},
				axisOptions={{ xAxisMode: 'tick', default: 'span' }},
				/>
		</li>		
		<li cell>
			<span class="h3">US Deaths <a href="https://github.com/nytimes/covid-19-data/blob/master/us-states.csv">(Source)</a></span>
			<h1>8,499</h1>
			<h3 color="red"><img src="caret-up.svg" icon="24" alt="icon title" />{8499-7121} Daily Increase</h3>	
		</li>
		<li cell>
			<Chart
				data={deaths}
				type="line"
				colors={["red"]}
				height=200
				lineOptions={{ hideDots: 0, dotSize: 8, hideLine: 0, }},
				axisOptions={{ xAxisMode: 'tick', default: 'span' }},
				/>
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