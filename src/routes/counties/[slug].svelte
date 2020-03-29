<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`counties/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { county: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let county;
</script>

<style>

</style>

<svelte:head>
	<title>{county.name}</title>
</svelte:head>

<section p="8 sm3" bg="gray3">

	<h1>{county.name} County</h1>
	<h2>{county.state}</h2>

	<div class='content'>
		<h2>State Representatives</h2>
		<ul grid columns="4" gap="6">
			<li>
				<h3>Gov. {county.governor}</h3>
				<a href="">(123) 832-1329</a>
			</li>		
			<li>
				<h3>Sen. {county.senator1}</h3>
				<a href="">(123) 832-1329</a>
			</li>		
			<li>
				<h3>Sen. {county.senator1}</h3>
				<a href="">(123) 832-1329</a>
			</li>		
			<li>
				<h3>Secretary of State {county.secretary}</h3>
				<a href="">(123) 832-1329</a>
			</li>		

		</ul>
	</div>

</section>